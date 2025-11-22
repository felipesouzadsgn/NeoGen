import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing in process.env.API_KEY");
  }
  return new GoogleGenAI({ apiKey: apiKey });
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  try {
    const ai = getClient();
    const model = "gemini-2.5-flash-image"; // Optimized for speed/efficiency as per guidelines

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    // Handle the response to find the image part
    if (response.candidates && response.candidates.length > 0) {
      const content = response.candidates[0].content;
      if (content && content.parts) {
        for (const part of content.parts) {
          if (part.inlineData && part.inlineData.data) {
             const base64EncodeString = part.inlineData.data;
             return `data:image/png;base64,${base64EncodeString}`;
          }
        }
      }
    }
    
    return null;

  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};