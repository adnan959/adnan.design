import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Adnan Khan | Product Designer | United Kingdom & Remote',
};

export default function Home() {
  return (
    <div className="homepage">
      <div className="fold">
        <Header />

        <div className="hero">
          <div className="container animated fadeIn">
            <h1>Hi! I&apos;m Adnan. A Product Designer who builds highly functional, user centric experiences that maximizes value.</h1>

            <small>
              Currently at <a target="_blank" rel="noopener noreferrer" href="https://litmus.com/">Litmus</a>, previously at <a target="_blank" rel="noopener noreferrer" href="https://placester.com/">Placester</a>.
            </small>
          </div>
        </div>
      </div>

      <a name="work" id="work"></a>
      <div className="block case-studies animated fadeIn">
        <div className="container">

          <h2>Highlights</h2>

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
                    <div className="year">2018</div>
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
                    <img src="/images/litmus-redesign/litmus-redesign-index.png" alt="Litmus application redesign" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Redesigning the Litmus Application</h3>
                    <div className="year">2015 - 17&apos;</div>
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
                    <img src="/images/slack/slack-integration-index.png" alt="Designing a Slack Integration" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Designing a Slack App</h3>
                    <div className="year">2018&apos;</div>
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
                    <img src="/images/tedc/tedc-index.png" alt="Designing the Email Design Conference" />
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="details">
                    <h3>Designing for a Conference</h3>
                    <div className="year">2016 - 17&apos;</div>
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
