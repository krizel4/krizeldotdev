import Link from 'next/link';
import { useRouter } from 'next/router';
import { Linkedin, Github, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';


export default function SidebarNav() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('dark');

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CV', href: '/cv' },
    { name: 'CONTACT', href: '/contact' },
  ];

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-16 z-50 flex flex-col items-center justify-center">
      {/* Theme Toggle */}
      <div className="mb-8">
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          aria-label="Toggle theme"
        >
          {!mounted ? (
            <Sun className="w-4 h-4" />
          ) : theme === 'light' ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
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
  );
}
