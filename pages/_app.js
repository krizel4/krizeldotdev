import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { ThemeProvider } from '../contexts/ThemeContext';
// import localFont from '../styles'

// const myFont = localFont({ src: './roc-grotesk/font.woff' })

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
