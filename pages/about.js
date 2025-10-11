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
    <>
      <SEO title="About" description="About Krizel Minnema" />

      <div className="content-frame">
        <main>
          <div className="flex flex-col tablet:flex-row gap-6 mobile:gap-8 tablet:gap-12 w-full">
            {/* Content - Left Side */}
            <div className="flex-1 w-full">
              <h1
                className="animate-slide-up"
                style={{ fontFamily: 'moret, serif' }}
              >
                About
              </h1>
              <h2 className="mt-4 mobile:mt-6 tablet:mt-8">
                Hi, I&apos;m Krizel (krĭ-&apos;zel).
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none mt-6 mobile:mt-8 tablet:mt-10">
                <p className="prose-text text-base mobile:text-lg tablet:text-xl leading-relaxed mb-4 mobile:mb-6">
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
                <p className="font-bold text-base mobile:text-lg tablet:text-xl leading-relaxed mb-4 mobile:mb-6">
                  My core, technical competencies include a wide breadth of
                  solutions, including martech systems architecture, business
                  intelligence and full stack web development.
                </p>
                <p className="prose-text text-base mobile:text-lg tablet:text-xl leading-relaxed mb-4 mobile:mb-6">
                  At the end of the day, what gives me the most excitement is
                  problem solving, whether that&apos;s figuring out how to close
                  gaps in KPIs or optimize campaigns and its delivery. I work
                  well as a project manager and team collaborator to improve ROI
                  and workflow efficiency.
                </p>
                <p className="prose-text text-base mobile:text-lg tablet:text-xl leading-relaxed">
                  When I&apos;m not working, I love to learn new things like
                  phrases from a different language, tinkering in video
                  production, or random things like obscure Scrabble words and
                  facts that only have a place at dive bar trivia nights.
                </p>
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
    </>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
