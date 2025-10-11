import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import PageTransition from '../components/PageTransition';
import SidebarNav from '../components/SidebarNav';
import BackgroundPattern from '../components/BackgroundPattern';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <span className="theme-krizel" />
      {/* Sidebar outside of animated container */}
      <SidebarNav />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
        <BackgroundPattern />
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
