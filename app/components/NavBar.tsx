"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b-2 border-black p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold font-mono">
          <Link href="/">
            &lt;OTOMATON/&gt;
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden retro-button py-1 px-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'X' : '≡'}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-mono">
            <li>
              <Link href="/" className="hover:underline">HOME</Link>
            </li>
            <li>
              <Link href="/games" className="hover:underline">GAMES</Link>
            </li>
            <li>
              <Link href="/assets" className="hover:underline">ASSETS</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">SERVICES</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">ABOUT</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 border-t-2 border-dashed border-black pt-4">
          <ul className="flex flex-col space-y-2 font-mono">
            <li>
              <Link 
                href="/" 
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/games" 
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                GAMES
              </Link>
            </li>
            <li>
              <Link 
                href="/assets" 
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                ASSETS
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="retro-marquee mt-4">
        NOW LOADING... WELCOME TO OTOMATON - GAMES | ASSETS | AUTOMATION | OPTIMIZATION
      </div>
    </header>
  );
}