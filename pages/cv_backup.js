import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { useState, useEffect } from 'react';
import Skillbadge from '../components/Skillbadge';
import CareerTimeline from '../components/CareerTimeline';
import pageTransitionManager from '../utils/page-transitions';

export default function CV({ globalData }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Initialize page transition for this page
    if (pageTransitionManager) {
      pageTransitionManager.switchPage('/cv');
    }
  }, []);

  const handleSectionChange = async (newSection) => {
    if (newSection === activeSection || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Scroll to top of content frame when changing sections
    const contentFrame = document.querySelector('.content-frame');
    if (contentFrame) {
      contentFrame.scrollTop = 0;
    }
    
    // Find the content container (the div with prose class)
    const contentContainer = document.querySelector('.cv-content-column .prose');
    if (contentContainer) {
      // Start transition out
      contentContainer.classList.add('is-transitioning');
      
      // Wait for transition out to complete
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Change the section
      setActiveSection(newSection);
      
      // Start transition in
      contentContainer.classList.remove('is-transitioning');
      contentContainer.classList.add('is-entering');
      
      // Wait for transition in to complete
      await new Promise(resolve => setTimeout(resolve, 400));
      
      // Clean up classes
      contentContainer.classList.remove('is-entering');
      
      // Ensure scroll is at top after transition completes
      if (contentFrame) {
        contentFrame.scrollTop = 0;
      }
    } else {
      // Fallback if content container not found
      setActiveSection(newSection);
    }
    
    setIsTransitioning(false);
  };

  const sections = {
    overview: {
      title: '',
      subtitle: '',
      content: (
        <>
          <div className="cv-content-frame">
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
            <h4>Certificate, Full Stack Web Development</h4>
            <p className="text-sm">
              University of California, Los Angeles — Extension
            </p>

            <h4>Masters of Business Administration</h4>
            <p className="text-sm">Southern New Hampshire University</p>

            <h4>Bachelors of Arts, Film and Media</h4>
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
      title: 'Vivre d\'Amour',
      subtitle: '⸺ Manager, Marketing Operations',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="date-heading">July 2014 - November 2019</h3>
            <p>
              I launched this side business in 2014 to apply my MBA learnings,
              scaling it in 2016 through digital-first marketing strategies that
              tripled inquiries and increased revenue by 42% within one year,
              allowing me to go full-time in the beginning of 2017. By driving
              SEO, social, and web campaigns, I achieved top keyword rankings,
              national publication features, and multiple industry awards,
              ultimately photographing over 100 weddings.
              <p>
               After selling the business in 2019, I transitioned into
                corporate marketing to continue applying growth and digital
                strategy at scale.
              </p>
            </p>
          </div>

          <h3>About the Company</h3>
          <p className="text-base">
            Founded in 2014, Krizel Photography (later rebranded as Vivre
            d’Amour) grew into an award-winning wedding photography studio
            serving couples across California. The business gained recognition
            for its lifestyle approach, national publication features, and
            consistent client satisfaction, earning multiple industry accolades.
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

      <SEO title="CV" description="Krizel Minnema's Curriculum Vitae" />
      
      {/* Content Frame for iframe-like scrolling */
      <div className="content-frame">
        <main className="w-full">
          <h1 
            className="text-4xl mobile:text-5xl tablet:text-6xl laptop:text-7xl font-light text-gray-900 dark:text-gray-100 tracking-tight text-left animate-slide-up"
            style={{ fontFamily: 'moret, serif' }}
          >
            Curriculum Vitae
          </h1>
          <div className="cv-layout grid grid-cols-1 tablet:grid-cols-2 gap-8 mobile:gap-12 tablet:gap-16">
            {/* Left Column - Dynamic Content */}
            <div className="cv-content-column">
              <div className="backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 rounded-lg border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 p-4 mobile:p-6 tablet:p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="section-title">
                    {sections[activeSection].title}
                  </h2>
                  {sections[activeSection].content}
                </div>
              </div>
            </div>

            {/* Right Column - Navigation Links */}
            <div className="cv-navigation-column">
              <div className="space-y-6">
                {/* Curriculum Vitae Overview Button */}
                <div className="space-y-1">
                  <button
                    onClick={() => handleSectionChange('overview')}
                    disabled={isTransitioning}
                    className={`nav-button ${
                      activeSection === 'overview' ? 'nav-button-active' : 'nav-button-inactive'
                    } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}`}
                  >
                    Curriculum Vitae
                  </button>
                  <p className="subtitle-text">
                    Overview & Summary
                  </p>
                </div>
                
                {/* Professional Experience Buttons */}
                {Object.entries(sections)
                  .filter(([key]) => key !== 'overview')
                  .map(([key, section]) => (
                  <div key={key} className="space-y-1">
                    <button
                      onClick={() => handleSectionChange(key)}
                      disabled={isTransitioning}
                      className={`nav-button ${
                        activeSection === key ? 'nav-button-active' : 'nav-button-inactive'
                      } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}`}
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
      </div>
    </div>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
