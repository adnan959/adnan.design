import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Designing for a Conference | Adnan Khan | Product Designer',
};

export default function DesigningForAConference() {
  return (
    <div className="work">
      <Header />

      <div className="post animated fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
              <div className="title">
                <h1>Designing for a Conference</h1>
                <div className="byline">Sr. Product Designer &bull; UI / Web Development / Creative Direction &bull; 2016&ndash;17</div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-full">
          <img src="/images/tedc/tedc-cover.png" alt="Designing for a Conference" />
        </div>

        <p>Litmus Live (formerly the Email Design Conference), Litmus&apos; email conference, brings the smartest email professionals in the world together for workshops, talks, and networking. It is an annual conference held across three major cities, Boston, San Francisco and London. The conference helps attendees become a better email marketer with real-world advice, best practices and practical takeaways.</p>

        <p>I was tasked with redesigning the websites for the 2016 and 2017 conferences, during this time the conference went through a major rebrand as a result of its growing demand. I was involved in the end-to-end branding of both conferences, development of the websites and creative direction for conference related print materials.</p>

        <h2>2016: The Email Design Conference</h2>

        <p>The conference had been continuously growing since its first inception back in 2013, with attendees doubling across venues. Litmus had earned its name as an industry leader in the email space not just through its product but also establishing itself as a leader in knowledge and education within the community.</p>

        <h3>Save the date</h3>

        <p>As a designer, the save the date page was on my favorite things to work on. The page would go live a few months before the conference while the art direction, speakers and venues were locked down. It was a blank canvas, with endless possibilities. With the growth of the conference, there was a deeper desire to highlight the cities and venues.</p>

        <div className="image-full">
          <img src="/images/tedc/2016-save-the-date.png" alt="The Email Design Conference - Save the Date" />
        </div>

        <h3>City pages</h3>

        <p>Within the city pages themselves, prominent landmarks quickly became a popularity across the branding team, and it fit in well with the space theme of the save the date page. Ultimately I decided to go with bridges, Golden Gate Bridge for San Francisco, the infamous Tower Bridge for London and the Zakim Bunker Hill Bridge for Boston.</p>

        <div className="image-full">
          <img src="/images/tedc/2016-san-francisco.png" alt="The Email Design Conference - San Francisco" />
        </div>

        <div className="image-full">
          <img src="/images/tedc/2016-london.png" alt="The Email Design Conference - London" />
        </div>

        <div className="image-full">
          <img src="/images/tedc/2016-boston.png" alt="The Email Design Conference - Boston" />
        </div>

        <h2>2017: Conference rebranded to Litmus Live</h2>

        <p>During 2017, the conference was rebranded to &quot;Litmus Live&quot; as part of an executive decision to unite both the Litmus brand and Conference brand together. Among many other changes to the conference itself including the format, there were significant updates to the conference branding, including a brand new website, logo and print materials.</p>

        <div className="image-full">
          <img src="/images/tedc/2016-litmus-live-logos.png" alt="The Email Design Conference - Save the Date" />
        </div>

        <p>The website was designed with a more mature look in mind, while still sharing element of the fun and colorful Litmus brand. The website would continue to service the conference for the next four years, unlike its previous websites who were only purpose built for a single year, this played a vital part in informing design decisions across the design.</p>

        <div className="image-full">
          <img src="/images/tedc/2017-litmus-live.png" alt="The Email Design Conference - Save the Date" />
        </div>

        <h2>Links</h2>

        <ul className="linksList">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://litmus.com/conference/2016">The Email Design Conference 2016 Website</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://litmus.com/conference/2017">Litmus Live 2017 Website</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.campaignmonitor.com/blog/email-marketing/2017/10/3-things-learned-at-litmus-live-that-change-email-marketing/">Litmus Live on the Campaign Monitor blog</a>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
