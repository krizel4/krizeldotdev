import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
// import localFont from '../styles'

// const myFont = localFont({ src: './NeueHaasGroteskDisplay45Light/font.woff' })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
