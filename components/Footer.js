import { Linkedin, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M14 8.5A6 6 0 118.5 2.5a4.5 4.5 0 005.5 6z"
    />
  </svg>
);

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 12a4 4 0 100-8 4 4 0 000 8zM8 1v1M8 14v1M3.5 3.5l.7.7M11.8 11.8l.7.7M1 8h1M14 8h1M3.5 12.5l.7-.7M11.8 4.2l.7-.7"
    />
  </svg>
);

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex bg-gray-200 dark:bg-gray-700 rounded-full p-1 mt-4">
      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={toggleTheme}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          theme === 'light' 
            ? 'bg-white text-gray-600 shadow-sm' 
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        {sunIcon}
      </button>
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={toggleTheme}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          theme === 'dark' 
            ? 'bg-indigo-600 text-white shadow-sm' 
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        {moonIcon}
      </button>
    </div>
  );
};

export default function Footer({ copyrightText }) {
  return (
    <footer className="py-8 mobile:py-10 tablet:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 tablet:px-8">
        <div className="flex flex-col tablet:flex-row justify-between items-center">
          {/* Left side - Copyright and Theme Toggle */}
          <div className="flex flex-col items-center tablet:items-start">
            <p className="text-gray-600 dark:text-gray-400 uppercase text-xs mobile:text-sm font-medium mb-3 mobile:mb-4" style={{ fontFamily: 'roc-grotesk, sans-serif' }}>
              {copyrightText}
            </p>
            <ThemeSwitcher />
          </div>
          
          {/* Right side - Contact Information and Social Links */}
          <div className="mt-6 mobile:mt-8 tablet:mt-0 flex flex-col items-center tablet:items-end">
            <div className="space-y-1 text-xs mobile:text-sm text-gray-600 dark:text-gray-400 mb-3 mobile:mb-4" style={{ fontFamily: 'roc-grotesk, sans-serif' }}>
              <p>
                <a href="mailto:hello@krizel.dev" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  hello@krizel.dev
                </a>
              </p>
              <p>
                <a href="tel:+18183005908" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  (818) 300-5908
                </a>
              </p>
              <p>Los Angeles, CA</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 mobile:space-x-4">
              <a
                href="https://linkedin.com/in/krizelminnema"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Linkedin className="w-4 h-4 mobile:w-5 mobile:h-5" />
              </a>
              <a
                href="https://github.com/krizelminnema"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Github className="w-4 h-4 mobile:w-5 mobile:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
