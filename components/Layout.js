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
      document.documentElement.classList.remove('light');
    } else if (userTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      // Default to dark mode if no theme preference is stored
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
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
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
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
      <div className={`flex-1 overflow-y-auto ${showNavigation ? 'ml-16' : ''}`}>
        <div className="flex flex-col items-center max-w-5xl w-full mx-auto px-8 py-8">
          {children}
        </div>
      </div>
    </div>
  );
}