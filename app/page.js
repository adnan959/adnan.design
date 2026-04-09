import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Adnan Khan | Staff Product Designer at Meta',
  description: 'Staff Product Designer at Meta with 16+ years of experience. Portfolio featuring enterprise platforms, VR experiences, and collaboration tools shipped to millions of users.',
  openGraph: {
    title: 'Adnan Khan | Staff Product Designer at Meta',
    description: 'Staff Product Designer at Meta with 16+ years of experience. Portfolio featuring enterprise platforms, VR experiences, and collaboration tools shipped to millions of users.',
    url: 'https://adnan.design',
    siteName: 'Adnan Khan',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: {
    canonical: 'https://adnan.design',
  },
};

export default function Home() {
  return (
    <div className="homepage">
      <div className="fold">
        <div className="hero-bg" aria-hidden="true">
          <div className="layer layer-1" />
          <div className="layer layer-2" />
          <div className="layer layer-3" />
        </div>
        <Header />

        <div className="hero">
          <div className="container animated fadeIn">
            <small className="greeting">Hi! I&apos;m Adnan. 👋</small>
            <h1>Staff Product Designer at Meta.</h1>
            <p className="hero-subtitle">
              I design enterprise platforms, zero-to-one products, and cross-platform
              experiences across web, mobile, and immersive tech.
            </p>
            <p className="hero-subtitle">
              My work bridges vision, strategy and execution.
            </p>
            <p className="hero-credibility">
              Shipped products used by 12M+ people. Inventor on a <a href="https://patents.google.com/patent/US20240152355A1/" target="_blank" rel="noopener noreferrer">Google Patent</a>.
            </p>
          </div>
        </div>
      </div>

      <div id="work" className="case-studies animated fadeIn">
        <div className="container">
          <h2>Selected Work</h2>

          <article>
            <Link href="/workplace-events">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/workplace-events/hero-events-studio.png" alt="Workplace Events Studio showing a live broadcast with engagement tools" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Workplace Events</h3>
                    <p className="description">Shipped Event Studio for 20,000+ enterprise customers including McDonald&apos;s and Nestl&eacute;. 12M+ users, 63% retention.</p>
                    <div className="year">
                      <strong className="company">Meta</strong>
                    </div>
                    <div className="year">2023&ndash;24</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article>
            <Link href="/ambient-coworking">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/ambient-coworking-index.png" alt="Ambient Coworking avatar calling interface on Meta Portal" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Ambient Coworking</h3>
                    <p className="description">Invented a lightweight calling experience using avatars. Filed a patent. Adopted across Portal, web, and mobile surfaces.</p>
                    <div className="year">
                      <strong className="company">Meta</strong>
                    </div>
                    <div className="year">2022</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article>
            <Link href="/horizon-workrooms">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/horizon-workrooms/horizon-workrooms-index.png" alt="Horizon Workrooms virtual meeting environment" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Horizon Workrooms</h3>
                    <p className="description">Defined the 0&rarr;1 product vision for virtual events in VR. Presented directly to CTO Andrew Bosworth. Showcased at Meta Connect 2025.</p>
                    <div className="year">
                      <strong className="company">Meta</strong>
                    </div>
                    <div className="year">2022&ndash;25</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article>
            <Link href="/meta-portal">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/meta-portal/meta-portal-index.jpg" alt="Meta Portal+ device on a desk" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Meta Portal</h3>
                    <p className="description">Led the pivot from family device to workplace tool. Exceeded activation targets, contributing to 22% of 950K units sold.</p>
                    <div className="year">
                      <strong className="company">Meta</strong>
                    </div>
                    <div className="year">2020&ndash;22</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article>
            <Link href="/design-library">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/design-library/design-library-index.png" alt="Litmus Design Library showing reusable email components" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Design Library</h3>
                    <p className="description">Built a first-of-its-kind tool for reusable email components. 42% beta adoption in 30 days. Created a new revenue stream.</p>
                    <div className="year">
                      <strong className="company">Litmus</strong>
                    </div>
                    <div className="year">2019</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article>
            <Link href="/redesigning-the-litmus-application">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/litmus-redesign/litmus-redesign-index.png" alt="Redesigned Litmus application interface" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Redesigning the Litmus Application</h3>
                    <p className="description">Co-led a platform redesign after a 200x speed improvement. Personally coded production UI in Rails, HTML, and SCSS.</p>
                    <div className="year">
                      <strong className="company">Litmus</strong>
                    </div>
                    <div className="year">2015&ndash;17</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article>
            <Link href="/building-a-design-system">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/design-system/design-system-index.png" alt="Litmus design system in Sketch" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Building a Scalable Design System</h3>
                    <p className="description">Migrated from Photoshop to Sketch and scaled the design team from 2 to 12 designers after a $49M investment.</p>
                    <div className="year">
                      <strong className="company">Litmus</strong>
                    </div>
                    <div className="year">2018</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article>
            <Link href="/designing-a-slack-app">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/slack/slack-integration-index.png" alt="Litmus Slack app notifications" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Designing a Slack App</h3>
                    <p className="description">Designed Slack notifications for Proof, Analytics, and Spam Checks. Part of Litmus&apos;s &quot;work where you work&quot; strategy.</p>
                    <div className="year">
                      <strong className="company">Litmus</strong>
                    </div>
                    <div className="year">2018</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article>
            <Link href="/building-a-chrome-extension">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/extension/extension-index.png" alt="Litmus Chrome Extension showing email previews" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Building a Chrome Extension</h3>
                    <p className="description">Brought email testing into ESPs and local dev workflows, eliminating context switching. 10,000+ users.</p>
                    <div className="year">
                      <strong className="company">Litmus</strong>
                    </div>
                    <div className="year">2018</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article>
            <Link href="/designing-for-a-conference">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/tedc/tedc-index.png" alt="The Email Design Conference city page with Golden Gate Bridge illustration" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Designing for a Conference</h3>
                    <p className="description">Led creative direction and web design for Litmus&apos;s annual conference across Boston, San Francisco, and London. Including a full rebrand.</p>
                    <div className="year">
                      <strong className="company">Litmus</strong>
                    </div>
                    <div className="year">2016&ndash;17</div>
                  </div>
                </div>
              </div>
            </Link>
          </article>

        </div>
      </div>

      <Footer />
    </div>
  );
}
