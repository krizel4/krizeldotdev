import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import Image from 'next/image';
import Skillbadge from '../components/Skillbadge';

export default function About({ globalData }) {
  return (
    <Layout>
      <SEO title="About" description="About Krizel Minnema" />
      <main className="w-full">
        <h1 className="page-title-md text-left">About Me</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Content - Left Side */}
          <div className="flex-1">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="prose-text">
                When I was a little girl, I convinced my cousins that to make
                perfume, you had to mix rubbing alcohol and flowers. &quot;Just mash
                them up in a jar and magic.&quot; I took it a step further and I
                asked them to help me sell jars of this stuff to neighbors. And
                the neighbors would buy it! After all, who&apos;d say no to a
                bunch of little kids hustling to make a dime so they can buy
                candy? It didn&apos;t matter that our perfume probably made them
                smell like a hospital clinic; it was what that purchase meant to
                my neighbor and what that purchase meant to us. What I love
                about marketing is the power to communicate value. Marketing is
                about uncovering great stories worth sharing and delivering
                experiences and products that matter. With the internet, you can
                spread powerful missions like wildfire. That&apos;s why I love
                digital marketing, tech and all things internet.
              </p>
              <p>
                My core, technical competencies include a wide breadth of
                solutions, including martech systems architecture, business
                intelligence and full stack web development.
              </p>
              <p>
                At the end of the day, what gives me the most excitement is
                problem solving, whether that&apos;s figuring out how to close
                gaps in KPIs or optimize campaigns and its delivery. I work well
                as a project manager and team collaborator to improve ROI and
                workflow efficiency.
              </p>
              <p>
                When I&apos;m not working, I love to learn new things like
                phrases from a different language, tinkering in video
                production, or random things like obscure Scrabble words and
                facts that only have a place at dive bar trivia nights.
              </p>
            </div>

            {/* Skills & Tech Stack */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                <Skillbadge>JavaScript</Skillbadge>
                <Skillbadge>React</Skillbadge>
                <Skillbadge>Next.js</Skillbadge>
                <Skillbadge>Node.js</Skillbadge>
                <Skillbadge>Salesforce</Skillbadge>
                <Skillbadge>Marketo</Skillbadge>
                <Skillbadge>Analytics</Skillbadge>
                <Skillbadge>Web Development</Skillbadge>
              </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="flex-shrink-0 lg:w-1/3">
            <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/profile-image.png"
                alt="Krizel Minnema"
                width={400}
                height={500}
                className="object-cover"
                priority
              />
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
