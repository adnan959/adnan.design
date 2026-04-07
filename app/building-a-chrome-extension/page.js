import CaseStudyLayout from '../components/CaseStudyLayout';

export const metadata = {
  title: 'Building a Chrome Extension | Adnan Khan | Product Designer',
};

export default function BuildingAChromeExtension() {
  return (
    <CaseStudyLayout
      title="Building a Chrome Extension"
      subtitle="Litmus Chrome Extension brought email testing directly into users' workflows, eliminating context switching between ESPs and Litmus. I led the end-to-end design of this extension."
      tags={['Design Lead', 'Design Strategy & Vision', '2018']}
      variant="v2"
    >
      <div className="image-full">
        <img src="/images/extension/extension-cover.png" alt="Litmus Chrome Extension overview with email previews" />
      </div>

      <h3>Overview</h3>

      <p>Litmus at its core is a testing and tracking platform, for nearly a decade Litmus has dominated the email previews space. It has positioned itself into the pre-send and post-send workflows of its users. Today, thousands of email professionals rely on Litmus as a critical partner in their email building and testing workflows.</p>

      <p>Litmus being a standalone platform, means that users have to either bring their email code to Litmus manually for testing, or send them in directly from their Email Service Providers (e.g. Mailchimp, Campaign Monitor, Salesforce etc.) using a sending in test address. This created a lot of overhead and context switching for email senders. This was a prominent piece of feedback received from customers during research, where customers found it difficult to switch between their ESPs and Litmus. Couldn&apos;t there be a way to have it all in one place?</p>

      <p>In the past Litmus has tried to solve this problem by providing bespoke partnerships with ESPs through building APIs that would let partners build functionality within their platforms. This was a challenging model from a billing, engineering and scalability sense. Litmus had to rely on partners to build functionality in their platforms without having any control over the user experience. In addition, as new email clients rolled out, it would take months for partners to begin supporting them.</p>

      <p>A need existed to build a solution that would let Litmus own the end-to-end user experience, have users create their account with Litmus instead of complicated partnerships and to ensure new functionality is available from day one.</p>

      <h3>Introducing Extension</h3>

      <p>The Extension was Litmus&apos;s solution towards fitting into the workflow of users that actively worked within their ESPs or even just locally on their desktop using code editors such as Dreamweaver, Atom, Sublime and many others. It came with the best of Litmus through offering previews in a compact experience, and additional tests for email marketers using Checklist. Majority of Litmus&apos;s users use Google Chrome as their web browser, it made sense to start from that platform.</p>

      <div className="image-full">
        <img src="/images/extension/extension-previews.png" alt="Extension email previews panel" />
      </div>

      <div className="image-full">
        <img src="/images/extension/extension-checks.png" alt="Extension email checks and QA" />
      </div>

      <div className="image-full">
        <img src="/images/extension/extension-empty-state.png" alt="Extension empty state" />
      </div>

      <h3>Testing within an Email Service Provider (Mailchimp)</h3>

      <p>Extension supports 8 of the most popular ESPs including Mailchimp, Salesforce, Campaign Monitor and others. This meant users could leverage Litmus right within their ESP window without having to make a test send over to Litmus. The Extension would automatically be aware of the email campaign&apos;s configuration within the ESP and run a test on the user&apos;s behalf. This not only shaved off a lot of time, but also reduced the load of context switching for users.</p>

      <div className="image-full">
        <img src="/images/extension/extension-in-mailchimp.png" alt="Litmus Extension running inside Mailchimp" />
      </div>

      <h3>Testing emails locally</h3>

      <p>An additional use case for Extension is to solve for email developers that build emails using a custom setup locally on their computer. The included having the email open in their browser of choice, and developing locally via an IDE such as Dreamweaver, Atom or Sublime. In the past, developers had to finish coding an email and send into Litmus, and repeat until all issues were resolved. The Extension now allows these developers to test locally while they&apos;re building their email right within the context of the browser.</p>

      <div className="image-full">
        <img src="/images/extension/extension-in-local.png" alt="Litmus Extension testing a locally developed email" />
      </div>

      <h3>Impact</h3>

      <p>The extension served as a key vessel to drive a better plan mix, and put testing into the hands of users that were previously not using Litmus to its fullest potential.</p>

      <ul className="bulletedList">
        <li>Today, Extension is used by over 10,000 users and growing, as part of their testing and sending workflow.</li>
        <li>It helped add additional feature differentiation and additional value that allowed the sales team to upgrade existing users to higher tier plans.</li>
        <li>It builds a foundation upon which Litmus can grow its customer base, and also maintain control over feature delivery and the user experience.</li>
      </ul>

      <h3>Links</h3>

      <ul className="bulletedList">
        <li><a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/litmus/makmhllelncgkglnpaipelogkekggpio">Visit Extension on the Chrome Store &rarr;</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://litmus.com/extension">Checkout Extension on the Litmus website &rarr;</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://litmus.com/blog/introducing-the-litmus-extension">Extension launch blog post &rarr;</a></li>
      </ul>
    </CaseStudyLayout>
  );
}
