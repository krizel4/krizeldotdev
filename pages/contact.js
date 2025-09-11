import Layout, { GradientBackground } from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function Contact({ globalData }) {
  return (
    <Layout>
      <SEO title="Contact" description="Get in touch with Krizel Minnema" />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 dark:text-white">
          Contact Me
        </h1>
        <div className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 rounded-lg border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Let's Connect</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <div className="mt-8">
                <h3 className="text-xl font-semibold dark:text-white mb-4">Get in Touch</h3>
                <div className="space-y-2">
                  <p>📧 Email: <a href="mailto:hello@krizel.dev" className="text-primary hover:underline">hello@krizel.dev</a></p>
                  <p>💼 LinkedIn: <a href="https://linkedin.com/in/krizelminnema" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/krizelminnema</a></p>
                  <p>🐙 GitHub: <a href="https://github.com/krizelminnema" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">github.com/krizelminnema</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-0 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
