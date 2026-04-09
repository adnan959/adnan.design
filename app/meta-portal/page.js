import CaseStudyLayout from '../components/CaseStudyLayout';

export const metadata = {
  title: 'Meta Portal | Adnan Khan | Product Designer',
  description: 'Led the strategic shift of Meta Portal from a family device to a workplace productivity tool. Exceeded activation targets, contributed to 22% of device sales, and unblocked key partnerships with Zoom and WebEx.',
};

export default function MetaPortal() {
  return (
    <CaseStudyLayout
      title="Meta Portal"
      subtitle="I led the strategic pivot of Portal from a family calling device into a workplace productivity tool, shipping Calendar, proactive notifications, and one-tap meeting entry. The work exceeded activation targets and contributed to 22% of Portal's total device sales."
      tags={['Product Design Lead', 'Strategy & Execution', '2020 - 22']}
      variant="v2"
    >
      <div className="image-full">
        <img src="/images/meta-portal/portal-swivel.jpg" alt="Meta Portal+ device on a desk, angled to show the display and smart camera" />
      </div>

      <h2>The Tension</h2>

      <p>Meta Portal launched in 2018 as a family calling device. A high-density smart camera that used AI to pan and reframe. A simple, opinionated interface designed for grandparents talking to grandkids. It did one thing well: building connection with your loved ones.</p>

      <p>When COVID-19 hit, Portal saw a massive spike in usage. Leadership saw an opportunity and made a strategic bet: bring Portal to the desk of knowledge workers. The hardware team started developing Portal+ as an "on desk" device.</p>

      <p>There was one problem. No clear software story. No understanding of what features knowledge workers actually need from a secondary screen on their desk. The hardware was being built, but the experience that would make it worth buying didn't exist yet.</p>

      <h2>My Role</h2>

      <p>I was the Product Design Lead for all work-based experiences on Portal. I led a team of 5+ designers and partnered closely with Product, Engineering, and User Research to define the product vision, ship the roadmap, and deliver on time for the Portal+ and Portal Go hardware launch in September 2021. I was one of the launch DRIs, end-to-end responsible for ensuring all blocking features shipped.</p>

      <h2>Discovery: What Do Workers Actually Need?</h2>

      <p>Before designing anything, I led a foundational piece of discovery work with our UXR team. The question wasn't "what features should Portal have?" It was "what do knowledge workers actually want from their workday, and which of those needs can a secondary screen uniquely solve?"</p>

      <p>We identified the top 11 goals knowledge workers have during their day, then stack-ranked them against Portal's strengths. The number one goal wasn't "more productivity apps" or "better video calls." It was: <strong>"Make sure I don't miss important or time-sensitive information."</strong></p>

      <p>That insight reshaped everything. It told us Portal's value wasn't in being a second computer. It was in being a calm, glanceable surface that keeps you aware of what's coming next without demanding your attention. We leaned into Portal's existing design philosophy of being a "calm house guest" and applied it to work.</p>

      <p>This discovery work became the foundation for the entire Portal for Work strategy, ratified by leadership at the Director and VP levels.</p>

      <h2>The Solution</h2>

      <p>I delivered three core features as part of the Portal+ and Portal Go launch:</p>

      <ul className="bulletedList">
        <li><strong>A redesigned PortalOS Home Screen</strong> with a proactive notification card system</li>
        <li><strong>Portal Calendar</strong> with one-tap meeting joins and third-party provider detection</li>
        <li><strong>Screenshare and screen mirroring</strong> via a new Portal Companion App</li>
      </ul>

      <h3>Proactivity</h3>

      <p>The research told us that focus isn't about turning off notifications. Workers feel more in control when they can glance at what's coming up without context-switching. So instead of building complex apps, we designed a card system that surfaces the right information at the right moment.</p>

      <div className="image-full">
        <img src="/images/meta-portal/portal-home-1.jpg" alt="Portal home screen displaying upcoming calendar events as proactive notification cards" />
      </div>

      <p className="image-caption">Portal sits quietly on the desk, surfacing upcoming events through cards. No interaction needed. This was a direct response to the top workday goal we identified in research.</p>

      <div className="image-full">
        <img src="/images/meta-portal/portal-home-2.jpg" alt="Portal expanded view showing additional cards and favourite work contacts" />
      </div>

      <p className="image-caption">A single tap reveals more: additional calendar cards, quick-access contacts. We deliberately kept the information density low. Four visible events was the sweet spot between glanceability and overwhelm, validated across multiple research sessions.</p>

      <div className="image-full">
        <img src="/images/meta-portal/portal-home-3.jpg" alt="Portal highlighting an imminent meeting with a prominent join button" />
      </div>

      <p className="image-caption">When a meeting is about to start, that card elevates to the top of the feed with a clear join action. One tap. No fumbling through calendar apps or hunting for meeting links.</p>

      <div className="image-full">
        <img src="/images/meta-portal/portal-home-4.jpg" alt="Portal showing meeting notification with countdown and one-tap join" />
      </div>

      <p className="image-caption">Calendar-aware notifications solve the "binge meeting" problem. Back-to-back calls become manageable when your next meeting is always one tap away.</p>

      <h3>Simplicity</h3>

      <p>We made a deliberate choice: Portal would do very few things, but do them exceptionally well. Every experience was designed to be consumed from arm's length with minimal touch interaction. This was a trade-off. It meant saying no to feature requests that would have added complexity in exchange for flexibility. We chose conviction over comprehensiveness.</p>

      <div className="image-full">
        <img src="/images/meta-portal/portal-app-1.jpg" alt="Portal Calendar app entry via launcher" />
      </div>

      <div className="image-full">
        <img src="/images/meta-portal/portal-app-2.jpg" alt="Portal Calendar showing four upcoming events in a clean agenda view" />
      </div>

      <p className="image-caption">The Calendar agenda is intentionally constrained to four visible events. This wasn't arbitrary. It came directly from research sessions where we tested different densities and found that four was the point where users could process at a glance without feeling they were missing something.</p>

      <div className="image-full">
        <img src="/images/meta-portal/portal-app-3.jpg" alt="Portal Calendar revealing past events on swipe down" />
      </div>

      <div className="image-full">
        <img src="/images/meta-portal/portal-app-4.jpg" alt="Portal Calendar pull-to-refresh gesture" />
      </div>

      <h3>Embedding into Existing Workflows</h3>

      <p>One of the trickiest parts of the project was third-party integration. Enterprise customers won't adopt a device that forces them to change their video conferencing provider. Portal needed to work with the tools people already use.</p>

      <p>I developed a clear user story for third-party partnerships: Portal's Calendar would automatically detect whether a meeting was on Zoom, WebEx, or another provider, and display the correct branding and launch flow. This gave partners a front-row seat on the home screen. The story landed well internally, and it unblocked partner teams who had been struggling to articulate a clear narrative to Zoom and WebEx.</p>

      <div className="image-full">
        <img src="/images/meta-portal/3p-support.jpg" alt="Portal showing Zoom, Microsoft Teams, WebEx, GoToMeeting, BlueJeans, and Workplace integrations" />
      </div>

      <p className="image-caption">Automatic provider detection meant users never had to think about which app to open. The calendar card handled it. This paved the way for successful partnerships with Zoom and WebEx, with Teams and Google Hangouts in the pipeline.</p>

      <div className="image-full">
        <img src="/images/meta-portal/portal-settings-1.jpg" alt="Portal calendar settings showing multi-calendar sync configuration" />
      </div>

      <p className="image-caption">Support for multiple calendar sources, intelligently prioritising between work and personal events.</p>

      <h2>Evidence</h2>

      <p>On 21 September 2021, Meta successfully launched Portal Go and Portal+, marking Portal's entry into the work segment.</p>

      <ul className="bulletedList">
        <li><strong>Exceeded the team's 30% DAD/MAD target, hitting 32.5% DAD/MAD</strong> (Daily Active Devices / Monthly Active Devices) before the holidays.</li>
        <li><strong>The Portal Companion app exceeded its 20% DAD/MAD target</strong>, reaching 21.4%.</li>
        <li><strong>Between 2021 and 2022, Meta sold over 950,000 Portal units.</strong> 22% of those were directly attributable to users who bought Portal for work-based experiences.</li>
        <li>The third-party partnership story unblocked successful integrations with <strong>Zoom and WebEx</strong>, with Teams and Google Hangouts in the pipeline.</li>
        <li>I led a team of <strong>5+ designers across multiple pillars</strong>, and the work contributed to the promotion of 2 designers to a higher level.</li>
        <li>The discovery research on "Remote Workday Goals" became the linchpin for the Portal for Work strategy, and influenced investment decisions for other Meta work teams including Workplace and Workrooms.</li>
      </ul>

      <h3>What I Learned</h3>

      <p>Portal had a quarterly release cycle. Software only shipped to devices every three months. That constraint forced a level of planning discipline I hadn't experienced before. There was zero margin for slipped timelines. I set clear milestones, ran tight feedback loops, and learned that the hardest part of shipping hardware-coupled software isn't the design. It's the coordination.</p>

      <p>The other lesson was about conviction. Portal's value was in doing less, not more. Every feature request we declined was a bet that simplicity would win. The DAD/MAD numbers suggest that bet paid off.</p>

      <h3>Links</h3>

      <ul className="bulletedList">
        <li><a href="https://tech.facebook.com/reality-labs/2021/9/facebook-adds-two-new-portals-to-the-family-including-first-portable-version/" target="_blank" rel="noopener noreferrer">Meta Portal Launch Post &rarr;</a></li>
        <li><a href="https://www.meta.com/gb/portal/" target="_blank" rel="noopener noreferrer">Meta Portal Product Website &rarr;</a></li>
        <li><a href="https://www.techradar.com/news/meta-wants-its-portal-devices-out-of-your-home-and-into-the-office" target="_blank" rel="noopener noreferrer">Meta wants its Portal devices out of your home and into the office &rarr;</a></li>
        <li><a href="https://techcrunch.com/2022/08/10/meta-portal-owners-can-now-use-their-devices-as-a-second-screen-for-pcs-and-macs/" target="_blank" rel="noopener noreferrer">Portal owners can now use their devices as a second screen &rarr;</a></li>
      </ul>
    </CaseStudyLayout>
  );
}
