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
      <div className={`flex-1 overflow-y-auto ${showNavigation ? 'ml-0 tablet:ml-16' : ''}`}>
        <div className="flex flex-col items-center max-w-5xl w-full mx-auto px-4 mobile:px-6 tablet:px-8 py-4 mobile:py-6 tablet:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}