import Link from 'next/link';
import { useRouter } from 'next/router';
import { Linkedin, Github, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';


export default function SidebarNav() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CV', href: '/cv' },
    { name: 'CONTACT', href: '/contact' },
  ];

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Add transition class to prevent rendering issues
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Remove transition class after transition completes
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  };

  return (
    <>
      {/* Mobile Horizontal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 tablet:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive =
                router.pathname === item.href ||
                (item.href === '/' && router.pathname === '/');

              return (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`text-xs font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${
                      isActive
                        ? 'text-gray-900 dark:text-gray-100'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                    style={{
                      fontFamily: 'roc-grotesk, sans-serif',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>

          {/* Right Side - Theme Toggle & Social Icons */}
          <div className="flex items-center space-x-3">
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <a
                href="https://linkedin.com/in/krizelminnema"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/krizelminnema"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 p-1"
              aria-label="Toggle theme"
              style={{ 
                isolation: 'isolate',
                position: 'relative',
                zIndex: 10001,
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            >
              {!mounted ? (
                <Sun className="w-4 h-4" style={{ 
                  shapeRendering: 'geometricPrecision',
                  isolation: 'isolate',
                  position: 'relative',
                  zIndex: 10002
                }} />
              ) : theme === 'light' ? (
                <Moon className="w-4 h-4" style={{ 
                  shapeRendering: 'geometricPrecision',
                  isolation: 'isolate',
                  position: 'relative',
                  zIndex: 10002
                }} />
              ) : (
                <Sun className="w-4 h-4" style={{ 
                  shapeRendering: 'geometricPrecision',
                  isolation: 'isolate',
                  position: 'relative',
                  zIndex: 10002
                }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Vertical Sidebar Navigation */}
      <nav className="sidebar-nav fixed left-0 top-0 h-full w-0 tablet:w-16 z-50 flex flex-col items-center justify-center hidden tablet:flex">
        {/* Theme Toggle */}
        <div className="mb-8" style={{ isolation: 'isolate', zIndex: 10001 }}>
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
            aria-label="Toggle theme"
            style={{ 
              isolation: 'isolate',
              position: 'relative',
              zIndex: 10001,
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          >
            {!mounted ? (
              <Sun className="w-4 h-4" style={{ 
                shapeRendering: 'geometricPrecision',
                isolation: 'isolate',
                position: 'relative',
                zIndex: 10002
              }} />
            ) : theme === 'light' ? (
              <Moon className="w-4 h-4" style={{ 
                shapeRendering: 'geometricPrecision',
                isolation: 'isolate',
                position: 'relative',
                zIndex: 10002
              }} />
            ) : (
              <Sun className="w-4 h-4" style={{ 
                shapeRendering: 'geometricPrecision',
                isolation: 'isolate',
                position: 'relative',
                zIndex: 10002
              }} />
            )}
          </button>
        </div>

        {/* Vertical Navigation Items */}
        <div className="flex flex-col space-y-16">
          {navItems.map((item) => {
            const isActive =
              router.pathname === item.href ||
              (item.href === '/' && router.pathname === '/');

            return (
              <Link key={item.name} href={item.href}>
                <a
                  className={`text-xs font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${
                    isActive
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                  style={{
                    fontFamily: 'roc-grotesk, sans-serif',
                    writingMode: 'sideways-lr',
                    textOrientation: 'mixed',
                    letterSpacing: '0.15em',
                  }}
                >
                  {item.name}
                </a>
              </Link>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="flex flex-col space-y-4 mt-8">
          <a
            href="https://linkedin.com/in/krizelminnema"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/krizelminnema"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Vertical Line */}
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px bg-gray-900 dark:bg-gray-100 opacity-10"
          style={{ height: 'calc(4 * 4rem + 3 * 1rem + 2 * 1rem + 2 * 1rem)' }}
        ></div>
      </nav>
    </>
  );
}
