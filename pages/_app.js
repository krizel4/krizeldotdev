import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import PageTransition from '../components/PageTransition';
import SidebarNav from '../components/SidebarNav';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <span className="theme-bejamas" />
      {/* Sidebar outside of animated container */}
      <SidebarNav />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </ThemeProvider>
  );
}

export default MyApp;
