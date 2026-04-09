import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About',
  description: 'Staff Product Designer at Meta with 16+ years of experience. Self-taught since 16. Grew up across Sweden, Sri Lanka, and Kuwait. Designs enterprise platforms, ships production code, and holds a patent on avatar-based collaboration.',
};

export default function About() {
  return (
    <div className="about">
      <Header />

      <div className="post post-v2 about">
        <div className="container">
          <div className="title">
            <h1>About</h1>
            <div className="subtitle">I design enterprise platforms, zero-to-one products, and cross-platform experiences across web, mobile, and immersive tech.</div>
          </div>
        </div>

        <div className="image-full">
          <img src="/images/about/meta-way-team.jpg" alt="Adnan and team at Meta headquarters, Hacker Way" />
        </div>

        <h2>Background</h2>

        <p>I grew up across Sweden, Sri Lanka, and Kuwait before settling in the UK. I&apos;ve been designing since I was 16, starting as a self-taught freelancer building websites for agencies and brands while studying at Oxford Brookes University.</p>

        <p>That early freelance work led to my first full-time role at Placester, a Boston-based startup where I worked directly with founders on a zero-to-one product. I was the designer, the researcher, and often the frontend developer. That experience set the pattern for the rest of my career: I&apos;ve always been closest to the work when I can see the full picture, from strategy through to shipped product.</p>

        <h2>At Litmus</h2>

        <p>I joined Litmus in 2015 as the second designer. Over five years I helped scale the team from 2 to 12, served as Interim Head of Design for over a year, and led the end-to-end redesign of the platform after a 200x speed improvement in their core testing infrastructure.</p>

        <p>One thing that set me apart at Litmus: I wrote production code. Not prototypes. Actual shipped UI in Ruby on Rails, HTML, SCSS, and JavaScript. It gave me a tighter feedback loop with engineering and a level of implementation fidelity that most designers can&apos;t achieve from Figma alone. I also built a Chrome Extension (10,000+ users), designed a Slack integration, created the Design Library (which drove a new revenue stream), and led creative direction for Litmus Live, the company&apos;s annual conference.</p>

        <h2>At Meta</h2>

        <p>I joined Meta in 2020 and have worked across some of the company&apos;s most ambitious bets in collaboration and productivity.</p>

        <p>On <strong>Meta Portal</strong>, I led the strategic pivot from a family calling device to a workplace productivity tool. I ran the foundational research that identified what knowledge workers actually need from a secondary screen, then shipped Calendar, proactive notifications, and one-tap meetings. The work exceeded our activation targets and contributed to 22% of Portal&apos;s total device sales. I also invented <strong>Ambient Coworking with Avatars</strong>, a lightweight calling concept using presence detection and avatar representation. Meta filed a patent on the concept, and it was adopted by teams across web and mobile.</p>

        <div className="image-full">
          <img src="/images/about/speaking.png" alt="Adnan presenting design strategy at Meta" />
        </div>

        <p>On <strong>Workplace</strong>, I led the design of Event Studio, a broadcast platform shipped to 20,000+ enterprise customers including McDonald&apos;s and Nestl&eacute;, reaching 12M+ users with 63% retention. I also developed Meta&apos;s Future of Work design strategy alongside senior leadership, defining three core principles (Persistent Spaces, Rich Presence, Equitable Participation) that were presented live to over 2,500 employees and adopted as the go-forward direction by product leadership.</p>

        <p>On <strong>Horizon Workrooms</strong>, I defined and delivered a zero-to-one product vision for virtual events in VR. I led a team of technical artists, concept artists, and engineers, presented the vision directly to CTO Andrew Bosworth, and the product was showcased at Meta Connect 2025.</p>

        <p>Today I&apos;m a Staff Product Designer at Meta, leading an AI Pod that&apos;s redesigning enterprise procurement workflows for 50,000+ employees. I design human-in-the-loop patterns for AI-assisted decisions: review, escalation, audit trails, and the judgment layer that makes AI systems trustworthy at scale.</p>

        <h2>How I work</h2>

        <p>I&apos;m a designer who builds. That&apos;s been true since I wrote production Rails at Litmus, and it&apos;s even more true now. I use Cursor, Claude Code, and Figma Make alongside Figma to move from concept to working software faster than the traditional design-to-handoff pipeline allows. This site, for example, is a Next.js app I built and deployed to Vercel.</p>

        <p>I believe the best design work happens when you can hold the full problem in your head: the user need, the technical constraints, the business context, and the team dynamics. My strongest contributions have always been at that intersection, not just the pixels.</p>

        <h2>A few things I believe in</h2>

        <ul className="bulletedList">
          <li>Good design scales. A strong system helps teams move faster and stay aligned.</li>
          <li>Enterprise tools can be elegant. Complexity should never come at the cost of usability.</li>
          <li>Zero-to-one work requires curiosity and patience. It&apos;s not linear, and that&apos;s okay.</li>
          <li>Mentorship is part of the job. Sharing knowledge helps grow great teams.</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
