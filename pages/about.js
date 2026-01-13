import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import Image from 'next/image';
import Skillbadge from '../components/Skillbadge';
import { useEffect } from 'react';
import pageTransitionManager from '../utils/page-transitions';


export default function About({ globalData }) {
  useEffect(() => {
    if (pageTransitionManager) {
      pageTransitionManager.switchPage('/about');
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

      <SEO title="About" description="About Krizel Minnema" />

      <div className="content-frame">
        <main>
          <div className="flex flex-row gap-6 mobile:gap-8 tablet:gap-12 w-xs">
            {/* Content - Left Side */}
            <div className="flex-1">
              <h1
                className="animate-slide-up"
                style={{ fontFamily: 'moret, serif' }}
              >
                About
              </h1>
              <h2>
                Hi, I&apos;m Krizel (krĭ-&apos;zel). </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="prose-text">
                  When I was a little girl, I convinced my cousins that to make
                  perfume, you had to mix rubbing alcohol and flowers.
                  &quot;Just mash them up in a jar and magic.&quot; I took it a
                  step further and I asked them to help me sell jars of this
                  stuff to neighbors. And the neighbors would buy it! After all,
                  who&apos;d say no to a bunch of little kids hustling to make a
                  dime so they can buy candy? It didn&apos;t matter that our
                  perfume probably made them smell like a hospital clinic; it
                  was what that purchase meant to my neighbor and what that
                  purchase meant to us. What I love about marketing is the power
                  to communicate value. Marketing is about uncovering great
                  stories worth sharing and delivering experiences and products
                  that matter. With the internet, you can spread powerful
                  missions like wildfire. That&apos;s why I love digital
                  marketing, tech and all things internet.
                </p>
                <p className="font-bold">
                  My core, technical competencies include a wide breadth of
                  solutions, including martech systems architecture, business
                  intelligence and full stack web development.
                </p>
                <p>
                  At the end of the day, what gives me the most excitement is
                  problem solving, whether that&apos;s figuring out how to close
                  gaps in KPIs or optimize campaigns and its delivery. I work
                  well as a project manager and team collaborator to improve ROI
                  and workflow efficiency.
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
                  <Skillbadge>
                    JavaScript, React, Next.js, Node.js, Salesforce, Marketo,
                    Analytics, Web Development
                  </Skillbadge>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            {/* <div className="profile-image">
                <Image
                  src="/profile-image.png"
                  alt="Krizel Minnema"
                  width={275}
                  height={350}
                  priority
                />
            </div> */}
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
