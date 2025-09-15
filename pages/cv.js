import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { useState } from 'react';
import Skillbadge from '../components/Skillbadge';

export default function CV({ globalData }) {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: '',
      subtitle: '',
      content: (
        <>
          <div>
            <h2 className="thick-underline">Experience</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              15 years experience in Digital Marketing
            </p>
          </div>

          <div>
            <h2 className="thick-underline">Education</h2>
            <h3>Masters of Business Administration, 2017</h3>
            <p className="text-lg">Southern New Hampshire University</p>
            <h3>Bachelors of Arts, Film and Media, 2015</h3>
            <p>University of California, Santa Barbara</p>
          </div>

          <h3 className="thick-underline">Skills</h3>
          <Skillbadge>
            Salesforce,
            Marketo
          </Skillbadge>
        </>
      ),
    },
    experience: {
      title: 'Mammotome',
      subtitle: '⸺ Manager, Digital Marketing Operations',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="date-heading">November 2020 - Present</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I direct the digital marketing strategy while also serving as the
              primary solutions architect responsible for unifying martech
              systems, Salesforce–Marketo integration health, and end-to-end
              campaign optimization. I&apos;ve directed major initiatives such
              as migrating to AEM.Live, implementing Marketo Measure for
              multi-touch attribution, and designing Salesforce flows that
              increased visibility into revenue-driving channels and pipeline
              impact. With strengths in data analytics, web development, and
              cross-functional leadership, I focus on scaling global web
              experiences to pipeline growth year over year.
            </p>

            <div className="mt-6">
              <Skillbadge>
                Salesforce,
                Marketo,
                AEM.Live,
                Marketo Measure,
                Tableau,
                UX Optimization,
                HTML, CSS, JavaScript,
                Adobe Creative Cloud,
                SEM,
                Google AdWords
              </Skillbadge>
            </div>
          </div>
        </div>
      ),
    },
    skills: {
      title: 'Granville Homes',
      subtitle: '⸺ Marketing Automation Lead',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="date-heading">August 2019 - November 2020</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a core member of an award-winning marketing team, I led email
              marketing campaigns, drove web content initiatives, and CRM
              analytics to drive demand and customer engagement. I also led the
              migration into Pardot and Salesforce to deliver more visibility on
              attribution and optimize campaigns for improved lead quality.
            </p>

            <div className="mt-6">
              <Skillbadge>
                Salesforce,
                Pardot,
                Wordpress,
                ActiveCampaign,
                Email Marketing & Coding like it&apos;s 1999,
                Lasso CRM,
                GTM Research
              </Skillbadge>
            </div>
          </div>
        </div>
      ),
    },
    education: {
      title: `Vivre d'Amour`,
      subtitle: '⸺ Manager, Marketing Operations',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="date-heading">July 2014 - November 2019</h3>
            <p>
              As founder of an award-winning photography brand, I scaled the
              business through digital-first marketing strategies that tripled
              inquiries and drove a 42% revenue increase within one year. I
              built campaigns across SEO, social, and web, consistently
              achieving top rankings for competitive keywords and securing
              features in national publications. By applying consumer insights
              and growth trends, I created a differentiated brand experience
              that earned over 11 industry awards and national recognition.
            </p>
          </div>
          <div className="mt-6">
            <Skillbadge>
              Google Analytics,
              SEM,
              Wordpress,
              Adobe Creative Cloud,
              Social Media Marketing,
              Business Development
            </Skillbadge>
          </div>
        </div>
      ),
    },
    JDFood: {
      title: 'JD Food',
      subtitle: '⸺ Digital Marketing Lead',
      content: (
        <div className="space-y-6">
          <p>
            I led digital strategy for a multi-division foodservice distributor,
            spearheading the first corporate website launch and building SEO and
            content programs that expanded brand visibility. Partnering directly
            with the president, I developed market and audience insights that
            informed product positioning, digital branding, and lead generation
            campaigns. My leadership in content and creative strategies
            strengthened customer engagement and established new revenue
            channels across the company&apos;s portfolio.
          </p>

          <div className="mt-6">
            <Skillbadge>
              Google Analytics,
              SEM,
              Wordpress,
              Adobe Creative Cloud,
              Social Media Marketing,
              Brand Development
            </Skillbadge>
          </div>
        </div>
      ),
    },
    InterVarsity: {
      title: 'InterVarsity',
      subtitle: '⸺ Manager, Communications & Events',
      content: (
        <div className="space-y-6">
          <p>
            I directed multi-channel communications and campaigns for a regional
            nonprofit, growing chapter engagement by 36% in one year and scaling
            a campus initiative into a nationwide program. Through targeted
            digital campaigns, donor relations, and community partnerships, I
            raised more than $500K in funding over five years. My leadership in
            campaign strategy, event communications, and digital outreach
            strengthened organizational visibility and expanded long-term
            impact.
          </p>

          <div className="mt-6">
            <Skillbadge>
              MailChimp,
              Social Media Marketing,
              Event Marketing,
              Leadership Development
            </Skillbadge>
          </div>
        </div>
      ),
    },
  };

  return (
    <Layout>
      <SEO title="CV" description="Krizel Minnema's Curriculum Vitae" />
      <main className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Dynamic Content */}
          <div className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 rounded-lg border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="section-title">
                {sections[activeSection].title}
              </h2>
              {sections[activeSection].content}
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="space-y-4">
            <button
              onClick={() => setActiveSection('overview')}
              className="page-title text-left hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer border-none bg-transparent p-0"
            >
              Curriculum Vitae
            </button>
            <div className="space-y-6">
              {Object.entries(sections)
                .filter(([key]) => key !== 'overview')
                .map(([key, section]) => (
                <div key={key} className="space-y-1">
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`nav-button ${
                      activeSection === key ? 'nav-button-active' : 'nav-button-inactive'
                    }`}
                  >
                    {section.title}
                  </button>
                  <p className="subtitle-text">
                    {section.subtitle || 'Professional Experience'}
                  </p>
                </div>
              ))}
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
