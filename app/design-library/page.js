import CaseStudyLayout from '../components/CaseStudyLayout';

export const metadata = {
  title: 'Design Library',
  description: 'Built a first-of-its-kind tool for reusable email components at Litmus. 42% beta adoption in 30 days, 24% increase in Builder usage, and a new revenue stream.',
};

export default function DesignLibrary() {
  return (
    <CaseStudyLayout
      title="Litmus Design Library"
      subtitle="90% of Litmus's revenue came from users who'd test one email and cancel. I led the design of a new product that turned episodic testers into retained customers, achieving 42% adoption in its first 30 days and creating a new revenue stream."
      tags={['Product Design Lead', 'UX / UI / Strategy', '2019']}
      variant="v2"
    >
      <div className="image-full">
        <img src="/images/design-library/design-library-index.png" alt="Litmus Design Library showing reusable email component blocks and a template builder" />
      </div>

      <h2>The Tension</h2>

      <p>Litmus had a retention problem. The platform was the industry leader in email testing and tracking, letting customers render email code across 90+ clients like Outlook, Apple Mail, and iOS Mail. But the usage pattern was brutally episodic: a developer would sign up, test an email, then cancel. 90% of revenue came from this cycle.</p>

      <p>In 2019, leadership wanted to change the equation. The goal was to bring value across the entire email development lifecycle, not just the testing phase. If Litmus could become essential to how teams build emails (not just test them), retention would follow.</p>

      <p>The business goals were clear:</p>

      <ul className="bulletedList">
        <li><strong>Reduce episodic usage</strong> by giving people a reason to stay beyond testing.</li>
        <li><strong>Drive plan upgrades</strong> by adding features worth paying more for.</li>
        <li><strong>Add new users</strong> through collaboration features that pulled in entire teams, not just individual developers.</li>
      </ul>

      <h2>My Role</h2>

      <p>I was the Product Design Lead responsible for developing solutions that would tackle these business goals through product innovation. I partnered with data science, product management, and our internal email team throughout.</p>

      <h2>Discovery</h2>

      <p>I interviewed over 20 customers, drawing from both existing Litmus users and non-users for a broader perspective. I also synthesised previous internal research and worked closely with the data science team to understand current behaviour patterns.</p>

      <p>The core problem was straightforward: email developers were not productive when building new emails. Every email is built modularly, from reusable blocks like headers, title sections, image blocks, and footers. But there was no good way to manage these blocks.</p>

      {/* TODO: Add image showing modular email structure (header block, title block, video block, paragraph block, pull quote block) */}

      <h3>What we found</h3>

      <ul className="bulletedList">
        <li>New content blocks were rarely created from scratch. Teams reused what they had.</li>
        <li>There was <strong>no single source of truth</strong>. Blocks were maintained by copying from old emails.</li>
        <li>Workflows were hacky and fragmented across multiple tools.</li>
        <li>It was <strong>difficult to scale</strong> for larger teams. Emails went out of date quickly.</li>
        <li>Code was stored in Google Docs. Organising it was painful.</li>
        <li>New developers joining a team couldn&apos;t find up-to-date code. Onboarding was slow.</li>
      </ul>

      <p>The opportunity was clear: maximise developer productivity by giving teams a proper home for their reusable templates and content blocks, with the quality and consistency controls they were hacking together manually.</p>

      <h2>The Solution</h2>

      <p>The outcome was Design Library: a first-of-its-kind tool in the email marketing space that let developers build, store, and manage reusable code blocks that could be applied to any email. Think of it as a design system, but for email HTML components. Templates, headers, buttons, footers, content blocks, all version-controlled and accessible to the whole team.</p>

      <p>This didn&apos;t exist before. Email developers had been using home-grown solutions, spreadsheets, and shared Google Docs to approximate this workflow. Design Library gave them a real tool.</p>

      {/* TODO: Add image showing Design Library UI - component library view with categories (Templates, Announcements, Product Marketing, Webinars) and component blocks (Headers, Buttons, Footers, Others) */}

      <p>Design Library integrated directly into Litmus&apos;s existing Builder, the email code editor. Developers could pull components from their library while building, ensuring consistency across every email their team sent. A component updated in the library would be available everywhere.</p>

      {/* TODO: Add image showing Design Library integrated into Builder with component drawer open alongside code editor */}

      <h2>Evidence</h2>

      <p>After extensive beta testing, the product was launched to production following four weeks of successful validation.</p>

      <ul className="bulletedList">
        <li><strong>42% of beta users created at least one Design Library component within 30 days</strong> of launch. That&apos;s adoption velocity you rarely see with a new product surface.</li>
        <li><strong>14% of beta users transferred their entire email assets to Litmus</strong>, learned via signals from customer support. This was the stickiness we were after. Once your design system lives in Litmus, you&apos;re not cancelling after one test.</li>
        <li><strong>Builder usage increased by 24% within the beta cohort</strong> and 18% after general release. More time in Builder meant more value derived from the subscription.</li>
        <li><strong>Reduced shared logins.</strong> Previously, teams shared a single account. Design Library gave teams a reason to add individual seats, because each person needed their own workspace. This directly drove plan upgrades and revenue growth.</li>
        <li><strong>Early retention signals were strong.</strong> Customer support reported users requesting features to move their entire email design systems into Litmus. That&apos;s the kind of lock-in that comes from genuine product value, not switching costs.</li>
      </ul>

      <h3>What I Learned</h3>

      <p>The biggest insight was that Litmus had been thinking about itself as a testing tool, and its customers had internalised that framing. Changing that perception was harder than building the product. Some users didn&apos;t immediately understand why their testing platform was now offering a component library. There was an education gap that needed bridging alongside the product launch.</p>

      <p>The other lesson: the best retention features aren&apos;t the ones that make it hard to leave. They&apos;re the ones that make the product more valuable the more you invest in it. A Design Library with three components is useful. One with your entire email system is indispensable. That compounding value is what turned episodic users into long-term customers.</p>

      <h3>Links</h3>

      <ul className="bulletedList">
        <li><a href="https://www.litmus.com/blog/introducing-design-library" target="_blank" rel="noopener noreferrer">Introducing Design Library on the Litmus blog &rarr;</a></li>
        <li><a href="https://www.litmus.com/blog/litmus-new-features-integrations-email-production" target="_blank" rel="noopener noreferrer">Litmus launches new features to scale on-brand email production &rarr;</a></li>
      </ul>
    </CaseStudyLayout>
  );
}
