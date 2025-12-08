import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { useEffect } from 'react';
import pageTransitionManager from '../utils/page-transitions';

export default function Contact({ globalData }) {
  useEffect(() => {
    // Initialize page transition for this page
    if (pageTransitionManager) {
      pageTransitionManager.switchPage('/contact');
    }
  }, []);

  return (
    <>
      <SEO title="Contact" description="Get in touch with Krizel Minnema" />
      
      {/* Content Frame for iframe-like scrolling */}
      <div className="content-frame">
        <main className="w-full">
          <h1>
            Hello.
          </h1>
          <div className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 rounded-lg border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 p-4 mobile:p-6 tablet:p-8 laptop:p-10">
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
                      href="https://github.com/krizel4"
                      className="text-primary dark:text-[#b7b7c3] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/krizel4
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
