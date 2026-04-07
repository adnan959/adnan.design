import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Litmus App Redesign | Adnan Khan | Product Designer',
};

export default function RedesigningTheLitmusApplication() {
  return (
    <div className="work">
      <Header />

      <div className="post animated fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="title">
                <h1>Redesigning the Litmus Application</h1>
                <div className="byline">Sr. Product Designer &bull; UX / UI / Prototyping &bull; 2015&ndash;17</div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-full">
          <img src="/images/litmus-redesign/litmus-redesign-cover.png" alt="" />
        </div>

        <h2>Overview</h2>

        <p>Litmus builds a suite of powerful tools for email designers, developers and marketers. In 2015, Litmus had positioned itself as a leader in email testing and tracking. One of its biggest offerings was allowing customers to render email code in over 90+ email clients such as Outlook, Apple Mail, iOS Mail and more.</p>

        <p>I joined Litmus as the second design team member. At the time it took upto 20 minutes to render a set of email previews, this was one of the biggest customer pain point the company faced. As a result of significant investment in infrastructure and innovation, the team was able to reduce this time down to just 6 seconds (a 200x speed gain!).</p>

        <p>This was a unique opportunity to think through new ways users could test and optimize their emails within Litmus. Significant user research had proven that customers wanted additional checks from Litmus beyond just speed improvements, including ways to optimize code, image loading speed, subject line checking etc.</p>

        <p>The screens in this case study highlight the collaborative efforts of myself along with my Lead Designer at the time, Alan TIppins. Our team was responsible for the end-to-end solutioning including customer research, visual design, prototyping in HTML/SCSS and useability testing.</p>

        <h2>Building for a faster email testing experience</h2>

        <p>A deeper understanding was developed through extensive research into existing customer workflows, this helped not only inform testing patterns but specific pain points that could be addressed as part of the speed improvements.</p>

        <ul className="bulletedList">
          <li>Making Litmus available to a new type of customer by innovating new ways to test, introduce new types of checks within emails beyond just previews. This would help increase overall usage and seat growth of the platform.</li>
          <li>Improving the existing user experience in light of the faster backend infrastructure, this would help improve retention and delight to existing users.</li>
          <li>Improve customer satisfaction by delivering a fresh user interface that complimented existing design trends, and is built with faster testing in mind.</li>
        </ul>

        <h3>Integrating Previews into the email Builder</h3>

        <p>As a result of the faster previews architecture, we were able to integrate email previews directly in to the email building experience. This allowed users to switch between a browser view and a previews view. Users could even drill into a specific email client (e.g. Apple Mail 12), and test their live code within just that client.</p>

        <div className="image-full">
          <img src="/images/litmus-redesign/integrating-previews.png" alt="" />
        </div>

        <h3>Introducing Litmus Checklist</h3>

        <p>Checklist was Litmus&apos; answer towards offering a QA solution, it was targeted specifically for email marketing managers who needed to run a final check before hitting the big frightening send button. Checklist would help capture critical bugs and advocated for a QA workflow, this was inline with a lot of our findings from prior research. Checklist also allowed users to tailor their workflow to add additional steps or requirements if needed.</p>

        <div className="image-full">
          <img src="/images/litmus-redesign/introducing-litmus-checklist.png" alt="" />
        </div>

        <h3>Reskinning Litmus Analytics</h3>

        <p>The last piece of the puzzle was to bring the existing Litmus Analytics experience up-to-date with the updated user interface. Litmus Analytics or better known in the industry as &quot;pixel tracking&quot; measures critical data relevant to an email send, such as opens and engagement. This lead to the design of a charts library that could be cohesively used across the application.</p>

        <div className="image-full">
          <img src="/images/litmus-redesign/litmus-analytics.png" alt="" />
        </div>

        <h3>Filling the Gaps</h3>

        <p>Once the new features were complete and existing features updated, it was time to focus on areas of the application that usually do not get enough design love throughout their life. As part of the redesign the settings area was brought up-to-date as well. The bigger chunk of effort was involved improving the billing experience, and building a foundation upon which future experiments to begin taking place.</p>

        <div className="image-full">
          <img src="/images/litmus-redesign/redesigning-index-views.png" alt="" />
        </div>

        <div className="image-full">
          <img src="/images/litmus-redesign/litmus-settings.png" alt="" />
        </div>

        <h3>Impact &amp; Learnings</h3>

        <p>The early build of the redesigned platform was tested at <Link href="/designing-for-a-conference">Litmus Live (formerly The Email Design Conference)</Link>, Litmus&apos; annual conference for #emailgeeks. Its one of the most popular events for email designers of the year and perfect oppertunity to collect feedback.</p>

        <div className="image">
          <img className="w750" src="/images/litmus-redesign/gathering-feedback.png" alt="" />
        </div>

        <p>I&apos;ve often made the mistake of using the word &quot;Launch&quot; or &quot;Ship&quot; for a specific feature set, where as its become clear to me that delivering value to customers in an ongoing and often tediously incremental process. While building new features are a great addon to that value metric, as designers we need to continously derive learnings to form clear next steps.</p>

        <ul className="bulletedList">
          <li>Users loved the improvements in the speed of the platform and the reworked interface! Said this would shave hours off of their testing workflow and help send emails faster through previews integration in Builder.</li>
          <li>Overtime Litmus had positioned itself as a previews only company, this perception made it difficult for certain users to understand the new Checklist experience. There was an education gap that had to be bridged to make the additional tests available more impactful.</li>
          <li>There was a growth in net new users overtime as a result of Litmus positioning itself to new groups of users.</li>
          <li>The initial month of the release there was a spike in churn as a result of the new platform going live in a busy season, and users were reluctant towards learning. Figures in following months were proven to be significantly lower.</li>
        </ul>

        <h2>Links</h2>

        <ul className="linksList">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://litmus.com/email-checklist">Visit Checklist on the Litmus website</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://litmus.com/email-builder">Visit Builder on the Litmus website</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://litmus.com/email-analytics">Visit Email Analytics on the Litmus website</a>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
