import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Adnan Khan | Staff Product Designer at Meta',
};

export default function Home() {
  return (
    <div className="homepage">
      <div className="fold">
        <Header />

        <div className="hero">
          <div className="container animated fadeIn">
            <small className="greeting">Hi! I&apos;m Adnan.</small>
            <h1>Staff Product Designer at Meta.</h1>
            <p className="hero-subtitle">
              I design enterprise platforms, zero to one products, and cross
              platform experiences across web, mobile, and immersive tech.
            </p>
            <p className="hero-subtitle">
              My work bridges vision, strategy and execution.
            </p>
            <div className="hero-links">
              <a href="/about">More about me &rarr;</a>
              <a href="https://www.linkedin.com/in/adnan959/" target="_blank" rel="noopener noreferrer">Find me on LinkedIn &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      <div className="case-studies animated fadeIn">
        <div className="container">
          <h2>Overview</h2>

          <article>
            <Link href="/workplace-events">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/workplace-events/hero-events-studio.png" alt="Workplace Events" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Workplace Events</h3>
                    <div className="year">
                      <strong className="company">Meta</strong>
                    </div>
                    <div className="year">2023 - 24&apos;</div>
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
                    <img src="/images/ambient-coworking-index.png" alt="Ambient Coworking" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Ambient Coworking</h3>
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
                    <img src="/images/horizon-workrooms/horizon-workrooms-index.png" alt="Horizon Workrooms" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Horizon Workrooms</h3>
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
            <Link href="/meta-portal">
              <div className="row middle-md">
                <div className="col-md-8">
                  <div className="frame">
                    <img src="/images/meta-portal/meta-portal-index.jpg" alt="Meta Portal" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Meta Portal</h3>
                    <div className="year">
                      <strong className="company">Meta</strong>
                    </div>
                    <div className="year">2020 - 22&apos;</div>
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
                    <img src="/images/design-library/design-library-index.png" alt="Design Library" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Design Library</h3>
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
                    <img src="/images/litmus-redesign/litmus-redesign-index.png" alt="Redesigning the Litmus Application" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Redesigning the Litmus Application</h3>
                    <div className="year">
                      <strong className="company">Litmus</strong>
                    </div>
                    <div className="year">2017</div>
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
                    <img src="/images/design-system/design-system-index.png" alt="Building a Scalable Design System" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Building a Scalable Design System</h3>
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
                    <img src="/images/slack/slack-integration-index.png" alt="Designing a Slack App" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Designing a Slack App</h3>
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
                    <img src="/images/extension/extension-index.png" alt="Building a Chrome Extension" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Building a Chrome Extension</h3>
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
                    <img src="/images/tedc/tedc-index.png" alt="Designing for a Conference" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Designing for a Conference</h3>
                    <div className="year">
                      <strong className="company">Litmus</strong>
                    </div>
                    <div className="year">2016</div>
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
