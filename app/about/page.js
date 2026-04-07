import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About | Adnan Khan | Product Designer',
};

export default function About() {
  return (
    <div className="about">
      <Header />

      <div className="post post-v2 about">
        <div className="container">
          <div className="title">
            <h1>About</h1>
            <div className="subtitle">I design enterprise platforms, zero to one products, and cross platform experiences across web, mobile, and immersive tech.</div>
          </div>
        </div>

        <div className="image-full">
          <img src="/images/about/meta-way-team.jpg" alt="Adnan and team at Meta headquarters, Hacker Way" />
        </div>

        <h2>Overview</h2>

        <p>Hi, I&apos;m Adnan. I&apos;m a product designer, design strategist, and systems thinker with over 16 years of experience building digital products that scale.</p>

        <p>Currently, I&apos;m a Staff Product Designer (IC7) at Meta, where I&apos;ve led high-impact initiatives across productivity, collaboration, and immersive technologies. My work includes enterprise-grade platforms, zero-to-one product launches, and multi-surface design across web, mobile, and XR.</p>

        <p>At Meta, I helped transform Portal from a family device into a work-first productivity tool. I led design for features like one-tap meetings, proactive notifications, and calendar integrations. These directly contributed to 22 percent of Portal&apos;s total device sales during its peak. I also invented Ambient Coworking with Avatars, a patent-pending feature that offered a new, low-friction way to connect using avatars in distributed teams.</p>

        <div className="image-full">
          <img src="/images/about/speaking.png" alt="Adnan speaking at design conferences" />
        </div>

        <p>Beyond hands-on design, I&apos;ve collaborated with senior leadership to define company-wide product and design strategy. I helped unify work products across teams by introducing principles that clarified direction, increased team velocity, and improved morale. This work was presented live to over 2,000 employees across the company.</p>

        <p>Previously, I led design at Litmus, where I created the Design Library. This helped email developers build and manage reusable components, improving retention and unlocking a new revenue stream. Earlier in my career, I worked with startups, agencies, and global brands including Harvard Business School and InStyle.</p>

        <p>Whether I&apos;m designing interfaces, shaping product direction, or mentoring others, I focus on turning complexity into clarity and delivering meaningful, measurable impact.</p>

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
