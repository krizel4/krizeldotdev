import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Linkedin, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

const FloatingNav = () => {
  const router = useRouter();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Empty space - logo removed */}
        </div>
      </div>
    </nav>
  );
};

export default function Hero({ globalData }) {
  const { theme, toggleTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <FloatingNav />
      
      {/* Theme Toggle - Top Right Corner */}
      <div className="absolute top-8 right-8 z-50">
        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: 'roc-grotesk, sans-serif' }}>
          <div className="flex items-center space-x-2">
            <span className={theme === 'light' ? 'font-medium' : ''}>LIGHT</span>
            <button 
              onClick={toggleTheme}
              className={`w-4 h-4 rounded-sm transition-colors cursor-pointer ${
                theme === 'light' 
                  ? 'bg-gray-900 dark:bg-gray-100' 
                  : 'border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
            ></button>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className={theme === 'dark' ? 'font-medium' : ''}>DARK</span>
            <button 
              onClick={toggleTheme}
              className={`w-4 h-4 rounded-sm transition-colors cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-gray-900 dark:bg-gray-100' 
                  : 'border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
            ></button>
          </div>
        </div>
      </div>
      
      {/* Dense dithered dot pattern with horizontal gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 0.5px 0.5px, rgba(0,0,0,0.08) 0.5px, transparent 0),
            radial-gradient(circle at 1.5px 1.5px, rgba(0,0,0,0.06) 0.3px, transparent 0),
            radial-gradient(circle at 2.5px 0.5px, rgba(0,0,0,0.05) 0.4px, transparent 0),
            radial-gradient(circle at 0.5px 2.5px, rgba(0,0,0,0.04) 0.3px, transparent 0)
          `,
          backgroundSize: '3px 3px',
          opacity: 1,
          mixBlendMode: 'multiply'
        }}
      ></div>
      
      {/* Dark mode dithered dot pattern */}
      <div 
        className="absolute inset-0 pointer-events-none dark:block hidden"
        style={{
          background: `
            radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.08) 0.5px, transparent 0),
            radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.06) 0.3px, transparent 0),
            radial-gradient(circle at 2.5px 0.5px, rgba(255,255,255,0.05) 0.4px, transparent 0),
            radial-gradient(circle at 0.5px 2.5px, rgba(255,255,255,0.04) 0.3px, transparent 0)
          `,
          backgroundSize: '3px 3px',
          opacity: 1,
          mixBlendMode: 'multiply'
        }}
      ></div>
      
      {/* Horizontal gradient mask for fade effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, 
              rgba(255,255,255,0.8) 0%, 
              rgba(255,255,255,0) 20%, 
              rgba(255,255,255,0) 80%, 
              rgba(255,255,255,0.8) 100%
            )
          `,
          mixBlendMode: 'multiply'
        }}
      ></div>
      
      {/* Dark mode horizontal gradient mask */}
      <div 
        className="absolute inset-0 pointer-events-none dark:block hidden"
        style={{
          background: `
            linear-gradient(to right, 
              rgba(0,0,0,0.8) 0%, 
              rgba(0,0,0,0) 20%, 
              rgba(0,0,0,0) 80%, 
              rgba(0,0,0,0.8) 100%
            )
          `,
          mixBlendMode: 'multiply'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Name and Navigation */}
          <div className="lg:col-span-4 space-y-12">
            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 dark:text-gray-100 tracking-tight" style={{ fontFamily: 'moret, serif' }}>
                {globalData.name}
              </h1>
              <p 
                className={`text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-light transition-all duration-700 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ 
                  fontFamily: 'roc-grotesk, sans-serif',
                  transitionDelay: '0.05s'
                }}
              >
                {globalData.blogTitle}
              </p>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              <Link href="/about">
                <a 
                  className={`block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-700 py-1 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ 
                    fontFamily: 'roc-grotesk, sans-serif',
                    transitionDelay: '0.1s'
                  }}
                >
                  About
                </a>
              </Link>
              <Link href="/blog">
                <a 
                  className={`block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-700 py-1 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ 
                    fontFamily: 'roc-grotesk, sans-serif',
                    transitionDelay: '0.2s'
                  }}
                >
                  Blog
                </a>
              </Link>
              <Link href="/cv">
                <a 
                  className={`block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-700 py-1 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ 
                    fontFamily: 'roc-grotesk, sans-serif',
                    transitionDelay: '0.3s'
                  }}
                >
                  CV
                </a>
              </Link>
              <Link href="/contact">
                <a 
                  className={`block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-700 py-1 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ 
                    fontFamily: 'roc-grotesk, sans-serif',
                    transitionDelay: '0.4s'
                  }}
                >
                  Contact
                </a>
              </Link> 
            </nav>

          </div>

          {/* Right Column - Empty for spacing */}
          <div className="lg:col-span-8">
          </div>
        </div>
      </div>
      
      {/* About Me Text - Bottom Right Corner */}
      <div className="absolute bottom-8 right-8 z-10 max-w-md">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm" style={{ fontFamily: 'roc-grotesk, sans-serif' }}>
          Born and raised in Los Angeles. Lover of simplicity.
        </p>
      </div>
    </div>
  );
}
