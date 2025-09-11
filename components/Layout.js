import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';
import Navigation from './Navigation';

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
      // Default to dark mode if no theme preference is stored
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      // Only respect system theme changes if user hasn't explicitly set a preference
      const userTheme = localStorage.getItem('theme');
      if (!userTheme) {
        // Default to dark theme regardless of system preference
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
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
    <div className="relative pb-24 overflow-hidden">
      {showNavigation && <Navigation />}
      <div className={`flex flex-col items-center max-w-2xl w-full mx-auto ${showNavigation ? 'pt-20' : ''}`}>
        {children}
      </div>
    </div>
  );
}
