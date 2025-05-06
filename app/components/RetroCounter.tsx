"use client";

import { useState, useEffect } from 'react';
import { getVisitorCount } from '../lib/utils';

export default function RetroCounter() {
  const [count, setCount] = useState<number | null>(null);
  
  useEffect(() => {
    // Generate a random visitor count for the retro aesthetic
    setCount(getVisitorCount());
    
    // Optional: Increment the counter occasionally for a "live" feel
    const interval = setInterval(() => {
      setCount(prevCount => prevCount !== null ? prevCount + 1 : null);
    }, 120000); // Every 2 minutes
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="border-2 border-dashed border-black p-4">
      <p className="text-sm">
        <span className="font-bold">VISITOR COUNTER:</span>{' '}
        <span className="font-mono bg-black text-[lime] px-2 py-1">
          {count !== null ? count : '----'}
        </span>
      </p>
      <p className="text-xs mt-2">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}