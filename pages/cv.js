import Layout, { GradientBackground } from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function CV({ globalData }) {
  return (
    <Layout>
      <SEO title="CV" description="Krizel Minnema's Curriculum Vitae" />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 dark:text-white">
          Curriculum Vitae
        </h1>
        <div className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 rounded-lg border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Professional Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Marketing Operations Specialist</h3>
                <p className="text-gray-600 dark:text-gray-300">Expertise in Salesforce, data analytics, and marketing automation</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Skills & Technologies</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Salesforce Administration & Development</li>
                  <li>Marketing Operations & Automation</li>
                  <li>Data Analytics & Visualization</li>
                  <li>Campaign Management</li>
                  <li>Lead Generation & Nurturing</li>
                </ul>
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
