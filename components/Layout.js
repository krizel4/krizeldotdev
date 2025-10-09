import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';
import SidebarNav from './SidebarNav';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children, showNavigation = true }) {
  const setAppTheme = () => {
    const userTheme = localStorage.getItem('theme');

    if (userTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (userTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // Default to light mode if no theme preference is stored
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      // Only respect system theme change if no user preference is stored
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {showNavigation && <SidebarNav />}
      <div className={`flex-1 overflow-y-auto ${showNavigation ? 'ml-0 tablet:ml-16 pt-16 tablet:pt-0' : ''}`}>
        {/* Top Double Line */}
        <div className="w-full flex justify-center pt-6 mobile:pt-8 tablet:pt-12 pb-2 mobile:pb-4 tablet:pb-6">
          <div className="w-20 mobile:w-24 tablet:w-32">
            <div className="border-t border-gray-300 dark:border-gray-600" style={{ borderWidth: '1px' }}></div>
            <div className="border-t border-gray-300 dark:border-gray-600 mt-1" style={{ borderWidth: '1px' }}></div>
          </div>
        </div>
        
        <div className="flex flex-col items-center max-w-5xl w-full mx-auto px-3 mobile:px-4 tablet:px-6 laptop:px-8 py-2 mobile:py-4 tablet:py-6 laptop:py-8">
          {children}
        </div>
        
        {/* Bottom Double Line */}
        <div className="w-full flex justify-center pt-2 mobile:pt-4 tablet:pt-6 pb-6 mobile:pb-8 tablet:pb-12">
          <div className="w-20 mobile:w-24 tablet:w-32">
            <div className="border-t border-gray-300 dark:border-gray-600" style={{ borderWidth: '1px' }}></div>
            <div className="border-t border-gray-300 dark:border-gray-600 mt-1" style={{ borderWidth: '1px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}