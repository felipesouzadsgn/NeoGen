import React, { useEffect, useRef, useState } from 'react';
import { ImageAsset } from '../types';

interface ScannerGridProps {
  images: ImageAsset[];
}

export const ScannerGrid: React.FC<ScannerGridProps> = ({ images }) => {
  const [scanPosition, setScanPosition] = useState(50); // Percentage
  const requestRef = useRef<number | null>(null);
  const directionRef = useRef<number>(0.15); // Slower, smoother speed

  useEffect(() => {
    const animate = () => {
      setScanPosition((prev) => {
        let next = prev + directionRef.current;
        if (next > 90 || next < 10) {
          directionRef.current *= -1;
        }
        return next;
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[350px] md:h-[450px] select-none overflow-hidden group">
      
      {/* Container for cards */}
      <div className="relative w-full h-full flex items-center justify-center gap-4 px-4">
         
         {/* BACKGROUND LAYER (Raw Data / Wireframe Look) */}
         <div className="absolute inset-0 flex items-center justify-center gap-4 px-4 pointer-events-none">
            {images.map((img, idx) => (
               <div 
                 key={`raw-${img.id}`} 
                 className="relative w-1/3 md:w-1/5 aspect-[3/4] rounded-xl border border-gray-800 bg-black overflow-hidden"
                 style={{
                   transform: `scale(${idx === 1 || idx === 2 ? 1.05 : 0.95})`,
                   transition: 'transform 0.5s ease'
                 }}
               >
                  {/* Simulating wireframe/dot matrix with CSS filters and overlays */}
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover opacity-40 grayscale contrast-[2.0] brightness-75"
                  />
                  {/* Matrix Grid Overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiAvPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMC41IiBmaWxsPSIjMTRGMTk1IiBmaWxsLW9wYWNpdHk9IjAuNSIgLz4KPC9zdmc+')] opacity-50 mix-blend-screen"></div>
                  
                  {/* Scanlines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-[length:10px_10px] opacity-30"></div>
               </div>
            ))}
         </div>

         {/* FOREGROUND LAYER (Full Color), Masked by Scan Position */}
         <div 
            className="absolute inset-0 flex items-center justify-center gap-4 px-4 overflow-hidden"
            style={{ 
              clipPath: `polygon(0 0, ${scanPosition}% 0, ${scanPosition}% 100%, 0 100%)` 
            }}
         >
            {images.map((img, idx) => (
               <div 
                 key={`color-${img.id}`} 
                 className="relative w-1/3 md:w-1/5 aspect-[3/4] rounded-xl shadow-2xl shadow-primary/10 overflow-hidden bg-gray-900"
                 style={{
                   transform: `scale(${idx === 1 || idx === 2 ? 1.05 : 0.95})`,
                   transition: 'transform 0.5s ease'
                 }}
               >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover brightness-110 contrast-110"
                  />
                  {/* Glossy sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-40"></div>
               </div>
            ))}
         </div>

         {/* THE SCANNER BEAM */}
         <div 
            className="absolute top-0 bottom-0 w-[2px] z-20 pointer-events-none"
            style={{ left: `${scanPosition}%` }}
         >
            {/* Core beam */}
            <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_10px_#fff,0_0_20px_#14F195,0_0_40px_#14F195]"></div>
            
            {/* Horizontal flare */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-12 w-24 h-[2px] bg-primary blur-[2px]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-[2px] bg-white"></div>
            
            {/* Vertical wide glow */}
            <div className="absolute inset-y-0 -left-8 w-16 bg-primary/10 blur-xl"></div>
            
            {/* Particles (simplified) */}
            <div className="absolute top-1/4 -left-1 w-2 h-2 bg-primary rounded-full blur-[1px] animate-ping"></div>
            <div className="absolute bottom-1/3 -left-1 w-1.5 h-1.5 bg-white rounded-full blur-[1px] animate-pulse"></div>
         </div>
         
      </div>
    </div>
  );
};