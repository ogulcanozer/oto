"use client";

import { useState, useEffect } from 'react';

export default function PixelBanner() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Start animation shortly after component mounts
    const timeout = setTimeout(() => {
      setIsAnimating(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="w-full border-2 border-black p-2 my-6 overflow-hidden">
      <div 
        className={`flex ${isAnimating ? 'animate-pulse' : ''}`}
        style={{ 
          height: '4px',
          background: 'repeating-linear-gradient(to right, black 0, black 8px, transparent 8px, transparent 16px)'
        }}
      />
      
      <div className="text-center font-mono font-bold p-4 text-lg">
        OTOMATON - CRAFTING DIGITAL EXPERIENCES SINCE 2018
      </div>
      
      <div 
        className={`flex ${isAnimating ? 'animate-pulse' : ''}`}
        style={{ 
          height: '4px',
          background: 'repeating-linear-gradient(to right, black 0, black 8px, transparent 8px, transparent 16px)'
        }}
      />
    </div>
  );
}