import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
import { ArrowLeft, Sparkles, Download, Loader2 } from 'lucide-react';

interface GeneratorProps {
  onBack: () => void;
}

export const Generator: React.FC<GeneratorProps> = ({ onBack }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setResultImage(null);

    try {
      const imageBase64 = await generateImage(prompt);
      if (imageBase64) {
        setResultImage(imageBase64);
      } else {
        setError("No image generated. Please try a different prompt.");
      }
    } catch (err) {
      setError("Failed to generate image. Please check your API key or try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-white p-4 md:p-8">
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center mb-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
        <div className="font-mono text-primary text-sm border border-primary/30 px-3 py-1 rounded bg-primary/10">
          GEMINI-2.5-FLASH-IMAGE
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Input Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">What do you want to create?</h2>
            <p className="text-gray-400">Describe your vision in detail. The more specific you are, the better the results.</p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A futuristic cyberpunk city with neon lights, raining, 8k resolution..."
                className="w-full h-48 bg-surface border border-gray-800 rounded-2xl p-5 text-lg focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none resize-none transition-all placeholder:text-gray-600"
              />
              <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                {prompt.length} chars
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className="w-full py-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-primary-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6" />
                  <span>Generate Art</span>
                </>
              )}
            </button>
          </form>
          
          {error && (
            <div className="p-4 bg-red-900/20 border border-red-800 text-red-300 rounded-xl">
              {error}
            </div>
          )}
        </div>

        {/* Result Section */}
        <div className="relative aspect-square bg-surface rounded-2xl border border-gray-800 overflow-hidden flex items-center justify-center group">
          {resultImage ? (
            <>
              <img 
                src={resultImage} 
                alt="Generated Result" 
                className="w-full h-full object-contain animate-in fade-in duration-700" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <a 
                   href={resultImage} 
                   download={`neongen-${Date.now()}.png`}
                   className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
                 >
                   <Download className="w-5 h-5" />
                   Download
                 </a>
              </div>
            </>
          ) : (
            <div className="text-center p-8 text-gray-600 space-y-4">
              {isLoading ? (
                <div className="relative w-20 h-20 mx-auto">
                   <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
                   <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                   <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800">
                      <Sparkles className="w-8 h-8 text-gray-700" />
                   </div>
                   <p>Your masterpiece will appear here</p>
                </div>
              )}
            </div>
          )}
          
          {/* Scanning effect overlay when loading */}
          {isLoading && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-primary/50 shadow-[0_0_30px_rgba(20,241,149,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
            </div>
          )}
        </div>
      </main>
      
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};