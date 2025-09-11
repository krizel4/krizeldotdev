import Layout, { GradientBackground } from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function About({ globalData }) {
  return (
    <Layout>
      <SEO title="About" description="About Krizel Minnema" />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 dark:text-white">
          About Me
        </h1>
        <div className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 rounded-lg border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm baby same pickled shaman vinyl umami, kogi wayfarers.
              Solarpunk gluten-free knausgaard, williamsburg kogi semiotics
              pinterest lo-fi blackbird spyplane PBR&B retro cardigan adaptogen.
              Vibecession poke kitsch, ugh helvetica enamel pin mixtape beard
              offal craft beer ascot lyft XOXO flannel readymade. Normcore next
              level four loko cray af keytar, actually gatekeep vegan
              microdosing selfies celiac. Jean shorts cred kickstarter cupping
              quinoa authentic four dollar toast readymade. PBR&B narwhal hot
              chicken whatever chillwave fashion axe put a bird on it, tonx wolf
              cloud bread gastropub Brooklyn leggings vice. Man braid man bun
              try-hard cray, slow-carb iPhone bushwick glossier 8-bit meh salvia
              scenester jean shorts artisan pinterest.
            </p>
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
