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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Background Patterns */}
      {/* Light mode dithered dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          background: `
            radial-gradient(circle at 0.5px 0.5px, rgba(0,0,0,0.15) 0.6px, transparent 0),
            radial-gradient(circle at 1.5px 1.5px, rgba(0,0,0,0.12) 0.4px, transparent 0),
            radial-gradient(circle at 2.5px 0.5px, rgba(0,0,0,0.1) 0.5px, transparent 0),
            radial-gradient(circle at 0.5px 2.5px, rgba(0,0,0,0.08) 0.4px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 0.3px, transparent 0),
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 0.3px, transparent 0),
            radial-gradient(circle at 0px 0px, rgba(0,0,0,0.03) 0.2px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(0,0,0,0.02) 0.2px, transparent 0)
          `,
          backgroundSize: '3px 3px',
          opacity: 0.6,
        }}
      ></div>

      {/* Dark mode dithered dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none dark:block hidden"
        style={{
          background: `
            radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.25) 0.6px, transparent 0),
            radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.18) 0.4px, transparent 0),
            radial-gradient(circle at 2.5px 0.5px, rgba(255,255,255,0.15) 0.5px, transparent 0),
            radial-gradient(circle at 0.5px 2.5px, rgba(255,255,255,0.12) 0.4px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 0.3px, transparent 0),
            radial-gradient(circle at 2px 2px, rgba(255,255,255,0.06) 0.3px, transparent 0),
            radial-gradient(circle at 0px 0px, rgba(255,255,255,0.04) 0.2px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(255,255,255,0.03) 0.2px, transparent 0)
          `,
          backgroundSize: '3px 3px',
          opacity: 1,
          mixBlendMode: 'multiply',
        }}
      ></div>

      <SEO title="Contact" description="Get in touch with Krizel Minnema" />
      
      {/* Content Frame for iframe-like scrolling */}
      <div className="content-frame">
        <main className="w-full">
          <h1>
            Hello.
          </h1>
          <div className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 rounded-lg border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 p-4 mobile:p-6 tablet:p-8">
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
      </div>
    </div>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
