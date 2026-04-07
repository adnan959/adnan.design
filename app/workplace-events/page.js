import CaseStudyLayout from '../components/CaseStudyLayout';

export const metadata = {
  title: 'Workplace Events | Adnan Khan | Product Designer',
};

export default function WorkplaceEvents() {
  return (
    <CaseStudyLayout
      title="Redesigning Workplace Events for Organisational Comms"
      subtitle='A unified platform that streamlines live events with multi-player broadcasts, engagement tools, and post-production features, replacing the outdated "Workplace Live" system.'
      tags={['Design Lead', 'Design Strategy & Vision', '2023 - 24']}
      variant="v2"
    >
      <div className="image-full">
        <img src="/images/workplace-events/hero-events-studio.png" alt="Workplace Events Studio showing a live Reality Labs All Hands broadcast with engagement sidebar" />
      </div>

      <h2>Highlights</h2>

      <ul className="bulletedList">
        <li>Overall design lead for Workplace design vision and direction, working tightly with senior leadership (D+, VP) to influence product direction.</li>
        <li>Provided overall design vision and creative direction to the team.</li>
        <li>Led a series of work streams and sprints that would eventually become Workplace 2.0 vision strategy, which would be a fundamental re-think of the Workplace product. Events Studio was the first sliver in that new direction.</li>
        <li>Led talented design leads like <a href="https://emanuelsfolio.framer.website/" target="_blank" rel="noopener noreferrer">Emanuel Serbanoiu</a> who became the end-to-end executional owners that worked seamlessly with engineers and junior designers on the team to deliver on an ambitious and ambiguous roadmap.</li>
        <li>Sequenced work happening on this work stream across other redesign initiatives.</li>
      </ul>

      <h3>Overview</h3>

      <p>Workplace was at the centre for organisational communication for companies like Walmart, McDonalds, and Nestle to name a few. While a lot of the organisational communication was posts based, Workplace needed a more durable way to do organisational broadcasts such as &apos;All Hands&apos; or company wide &apos;Q&amp;As&apos;, this was crucial for many companies who had large front-line roles.</p>

      <p>Thats predominantly where this end-to-end redesign came into focus. There was an existing version of live video broadcasts within the tool which was called &quot;Workplace Live&quot; however the system was heavily borrowed from facebook.com and lacked enterprise grade features.</p>

      <p>Additionally, there was desire to be able to sell this entire Workplace Broadcasting capability has its own standalone feature in the market.</p>

      <p>I built the end-to-end design strategy for redesigned Workplace that would be a new platform of capabilities for large organisations. Workplace Events was one of those new capabilities.</p>

      <h3>User Pain Points</h3>

      <ul className="bulletedList">
        <li><strong>Inability to Communicate and Collaborate:</strong> Presenters, Moderators, and Producers lack a means to communicate and collaborate before going live.</li>
        <li><strong>Complicated Setup Process:</strong> Unintuitive design and fragmented user experience make setting up a live stream a challenging task.</li>
        <li><strong>Limited Engagement and Moderation Capabilities:</strong> Moderators lack the necessary tools to engage audiences and interact with them effectively.</li>
        <li><strong>Quality and Reliability Issues:</strong> Technical gaps detract from the overall experience, including host dropping ending the live stream and sound injection from videos not working.</li>
        <li><strong>Limited Post-Production Capabilities:</strong> Producers lack the necessary tools to make videos easier to consume, hindering content repurposing and reuse.</li>
      </ul>

      <h3>Solution</h3>

      <ul className="bulletedList">
        <li>Provide viewers with an easy consumption experience where they don&apos;t have to look around Workplace across the feed and various groups. Instead they can go to singular surface and find the latest organisational broadcast from leadership.</li>
        <li>Provide presenters with a singular studio like surface where they can go live, do multi-player broadcasts with other leaders, measure sentiment as the event goes on and also have various tools to engage with the audience.</li>
        <li>Provide moderators with the ability to effectively monitor and schedule leadership broadcasts and also have post-production tools to make the broadcast be available afterwards.</li>
        <li>Provide technical producers the ability to monitor the quality of their stream input and debug any issues on the fly with minimal issues.</li>
      </ul>

      <h2>Introducing Event Studio</h2>

      <p>A singular unified creator studio for different roles to seamlessly work together under a single tool. Inclusive of producers, moderators and the presenter.</p>

      <p>A &apos;studio&apos; like surface that would become a collaboration surface for all the different roles needed to drive a successful event throughout the duration of the event cycle (pre, during and post event).</p>

      <div className="image-full">
        <img src="/images/workplace-events/producer-stream-monitoring.png" alt="Event Studio producer view with stream metrics, stream key configuration, and quality monitoring" />
      </div>

      <p className="image-caption">For technical producers, studio made it easy to plug in a video stream from complex camera equipment using advanced stream keys, additionally they could monitor quality throughout.</p>

      <div className="image-full">
        <img src="/images/workplace-events/stream-branding.png" alt="Event Studio branding panel with color customization, logo upload, and background overlay options" />
      </div>

      <p className="image-caption">...additionally having the ability to brand the stream a certain way.</p>

      <div className="image-full">
        <img src="/images/workplace-events/moderator-engagement-polls.png" alt="Event Studio moderator view with live polls, audience reactions, and engagement metrics" />
      </div>

      <p className="image-caption">Moderators could track sentiment and engagement coming from the crowd in real time.</p>

      <div className="image-full">
        <img src="/images/workplace-events/multiplayer-broadcast.png" alt="Event Studio multiplayer broadcast with multiple presenters on screen and live comments" />
      </div>

      <p className="image-caption">Presenters also had the ability to have multiplayer broadcasts with many attendees.</p>

      <h2>A singular Events Consumption Page</h2>

      <p>Beyond studio, another core part of the experience was to also provide viewers with a cohesive viewing experience where they can consume the content and also engage with other viewers in a live chat. The page would also be used for pre, during and post parts of the event journey.</p>

      <div className="image-full">
        <img src="/images/workplace-events/events-consumption-page.png" alt="Events consumption page with video player, live chat engagement, and event details" />
      </div>

      <h2>Discovery across Workplace</h2>

      <p>Additionally, discovery of events has typically been quite difficult across Workplace because of the nature of news feed. It was designed to be ever green and prioritise latest information first. This meant that events would quickly disappear from the eye sight of user as soon as they logged in. We reworked the ranking algorithm to ensure that events that are &apos;live&apos; always appear at the top as this is the most important bit of information that should be consumed.</p>

      <div className="image-full">
        <img src="/images/workplace-events/discovery-in-feed.png" alt="Workplace news feed showing a live event pinned at the top for discovery" />
      </div>
    </CaseStudyLayout>
  );
}
