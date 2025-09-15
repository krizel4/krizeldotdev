import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { useState } from 'react';
import Skillbadge from '../components/Skillbadge';
import CareerTimeline from '../components/CareerTimeline';

export default function CV({ globalData }) {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: '',
      subtitle: '',
      content: (
        <>
          <div>
            <p className="text-base italic mb-0">
              Use the navigation on the right to explore my professional
              experience.
            </p>
          </div>
          <div>
            <h2 className="thick-underline">Strengths in Practice</h2>
            <Skillbadge>
              Strategic Leadership, Agile Execution & Prioritization,
              Cross-Functional Collaboration, Project Management, User-Centered
              Thinking & Research, Business & Outcomes Driven, Data Analytics,
              GTM Research
            </Skillbadge>
          </div>

          <div className="mt-8">
            <CareerTimeline />
          </div>

          <div>
            <h2 className="thick-underline">Education</h2>
            <h4>Certificate, Full Stack Web Development, 2020</h4>
            <p className="text-sm">
              University of California, Los Angeles — Extension
            </p>

            <h4>Masters of Business Administration, 2017</h4>
            <p className="text-sm">Southern New Hampshire University</p>

            <h4>Bachelors of Arts, Film and Media, 2012</h4>
            <p className="text-sm">University of California, Santa Barbara</p>
          </div>

          <div>
            <h2 className="thick-underline">Interests</h2>
            <h4>
              <a
                href="https://prettylittlepoppy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                Pretty Little Poppy Marketplace — Antelope Valley, CA
              </a>
            </h4>
            <ul className="text-sm">
              <li>Community Growth Initiatives</li>
              <li>Youth Entrepreneurship Mentorship</li>
              <li>Enabling Local Retail Innovation</li>
            </ul>

            <h4>Mammotome&apos;s Women & Friends</h4>
            <ul className="text-sm">
              <li>Communications Chair</li>
              <li>Empower Women in the Workplace</li>
              <li>Build Ally Networks</li>
            </ul>
          </div>
        </>
      ),
    },
    mammotome: {
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

            <h3>About the Company</h3>
            <p className="text-base">
              At Mammotome, we are committed to providing best-in-class
              technology to help clinicians accurately diagnose breast cancer.
              Never forgetting that at the heart of each breast cancer diagnosis
              is the patient.
            </p>

            <div className="mt-6">
              <h3>Technical Skills</h3>
              <Skillbadge>
                Salesforce, Marketo, AEM.Live, Marketo Measure, Tableau, UX
                Optimization, HTML, CSS, JavaScript, Adobe Creative Cloud, SEM,
                Google AdWords
              </Skillbadge>
            </div>
          </div>
        </div>
      ),
    },
    granville: {
      title: 'Granville Homes',
      subtitle: '⸺ Marketing Automation Lead',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="date-heading">August 2019 - November 2020</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I led email marketing campaigns and strategized web content
              initiatives to drive demand and customer engagement. I also led
              the migration into Pardot and Salesforce to deliver more
              visibility on attribution and optimize campaigns for improved lead
              quality.
            </p>

            <h3>About the Company</h3>
            <p className="text-base">
              GV Homes is a homebuilder based in the greater San Joaquin Valley,
              specializing in a wide range of quality homes from affordable to
              luxury within Frenso, CA.
            </p>

            <div className="mt-6">
              <h3>Technical Skills</h3>
              <Skillbadge>
                Wordpress, ActiveCampaign, Email Marketing & Coding like
                it&apos;s 1999, Salesforce, Pardot, Lasso CRM, GTM Research
              </Skillbadge>
            </div>
          </div>
        </div>
      ),
    },
    vivre: {
      title: `Vivre d'Amour`,
      subtitle: '⸺ Manager, Marketing Operations',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="date-heading">July 2014 - November 2019</h3>
            <p>
              In 2016, I scaled the business through digital-first marketing
              strategies that tripled inquiries and drove a 42% revenue increase
              within one year. I built campaigns across SEO, social, and web,
              consistently achieving top rankings for competitive keywords and
              securing features in national publications. By applying consumer
              insights and growth trends, I created a brand experience that
              earned multiple industry awards and national recognition. In a few
              short years, I photographed over 100 weddings.
            </p>
          </div>

          <h3>About the Company</h3>
          <p className="text-base">
            I started Krizel Photography (now Vivre d&apos;Amour) in 2014 to
            develop my marketing and business administration skills while
            enrolled in my MBA program. This learning journey turned into a
            flourishing award-winning business, where I photographed couples all
            over California.
          </p>

          <div className="mt-6">
            <h3>Technical Skills</h3>
            <Skillbadge>
              Google Analytics, SEM, Wordpress, Adobe Creative Cloud, Social
              Media Marketing, Business Development
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
          <h3 className="date-heading">February 2016 - January 2017</h3>

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

          <h3>About the Company</h3>
          <p className="text-base">
            JD Food is a Fresno based foodservice distributor with over 150
            employees, servicing the greater Central Valley area and Central
            Coast.
          </p>

          <div className="mt-6">
            <h3>Technical Skills</h3>
            <Skillbadge>
              Google Analytics, SEM, Wordpress, Adobe Creative Cloud, Social
              Media Marketing, Brand Development
            </Skillbadge>
          </div>
        </div>
      ),
    },
    intervarsity: {
      title: 'InterVarsity',
      subtitle: '⸺ Manager, Communications & Events',
      content: (
        <div className="space-y-6">
          <h3 className="date-heading">June 2010 - July 2015</h3>

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

          <h3>About the Company</h3>
          <p className="text-base">
            InterVarsity is a non-profit organization whose purpose is to
            establish and advance at colleges and universities by providing
            spiritual and relational support and development to college students
            and faculty. Its mission is to see students and faculty transformed,
            campuses renewed, and world changers developed.
          </p>
          <div className="mt-6">
            <h3>Technical Skills</h3>
            <Skillbadge>
              MailChimp, Social Media Marketing, Event Marketing, Leadership
              Development
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
