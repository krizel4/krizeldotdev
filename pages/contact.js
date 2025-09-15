import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function Contact({ globalData }) {
  return (
    <Layout>
      <SEO title="Contact" description="Get in touch with Krizel Minnema" />
      <main className="w-full">
        <h1 className="page-title-md text-left">Let&apos;s Connect</h1>
        <div className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 rounded-lg border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sans">
              <div>
                <p>
                  📧 Email:{' '}
                  <a
                    href="mailto:hello@krizel.dev"
                    className="text-primary dark:text-[#b7b7c3] hover:underline"
                  >
                    hello@krizel.dev
                  </a>
                </p>
                <p>
                  💼 LinkedIn:{' '}
                  <a
                    href="https://linkedin.com/in/krizelminnema"
                    className="text-primary dark:text-[#b7b7c3] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/krizelminnema
                  </a>
                </p>
                <p>
                  🐱 GitHub:{' '}
                  <a
                    href="https://github.com/krizelminnema"
                    className="text-primary dark:text-[#b7b7c3] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/krizelminnema
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
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
