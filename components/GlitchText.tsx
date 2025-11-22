import React from 'react';

interface GlitchTextProps {
  text: string;
  highlightIndices?: number[];
  highlightChar?: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, highlightIndices = [], highlightChar, className = "" }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => {
        const isHighlighted = highlightIndices.includes(index) || (highlightChar && char === highlightChar);
        
        return (
          <span
            key={index}
            className={`inline-block ${
              isHighlighted
                ? "text-primary text-glow font-mono font-bold relative"
                : ""
            }`}
          >
            {char}
            {isHighlighted && (
               <span className="absolute inset-0 animate-pulse opacity-50 blur-[2px] text-primary" aria-hidden="true">{char}</span>
            )}
          </span>
        );
      })}
    </span>
  );
};