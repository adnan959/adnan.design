import Script from 'next/script';
import CaseStudyLayout from '../components/CaseStudyLayout';

export const metadata = {
  title: 'Ambient Coworking | Adnan Khan | Product Designer',
};

export default function AmbientCoworking() {
  return (
    <CaseStudyLayout
      title="Ambient Coworking"
      subtitle="Invented a lightweight coworking experience using avatars on Meta Portal, enabling casual, privacy-friendly calls without video. The concept led to a patent, cross-org adoption, and helped address Zoom fatigue in remote teams through ambient presence."
      tags={['Design Strategy & Vision', 'Innovation', 'Prototyping', '2022']}
      variant="v2"
    >
      {/* Existing Wistia prototype animation */}
      <div className="image-full">
        <div className="video-container" style={{ borderRadius: '4px', overflow: 'hidden' }}>
          <Script src="https://fast.wistia.com/embed/medias/n3z81yij3x.jsonp" strategy="lazyOnload" />
          <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
          <div className="wistia_responsive_padding" style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
              <div className="wistia_embed wistia_async_n3z81yij3x videoFoam=true autoPlay=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                  <img src="https://fast.wistia.com/embed/medias/n3z81yij3x/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Overview</h3>

      <p>In 2022, I led a foundational piece of discovery work to better understand what users actually want from a modern workday device on their desk. Partnering with our user research team, we uncovered the top 11 goals users have during their workday, and mapped those goals against Portal&apos;s capabilities.</p>

      <p>As a follow-up, I invented a new calling modality using Meta&apos;s avatars technology to deliver a more engaging and less intrusive coworking experience. Instead of relying on live video&mdash;which often feels invasive&mdash;users could be represented by expressive avatars in a shared virtual workspace.</p>

      <h3>The Idea</h3>

      <p>The concept enables coworkers to ambiently see when someone is at their desk via a subtle avatar representation powered by Portal&apos;s smart camera sensors. With a single tap, you can initiate a casual avatar-based call&mdash;no awkward &quot;Are you free?&quot; messages or need to turn your camera on.</p>

      <div className="image-full">
        <img src="/images/ambient-coworking/portal-avatar-ui.png" alt="Portal device showing avatar coworkers with presence indicators and upcoming meeting" />
      </div>

      <div className="image-full">
        <img src="/images/ambient-coworking/avatar-states.png" alt="Avatar interaction states — available with green dot, idle, and active talking call" />
      </div>

      <div className="image-full">
        <img src="/images/ambient-coworking/fidelity-spectrum.png" alt="Fidelity spectrum from low to high: green dot, avatar, blurred live video, live video" />
      </div>

      <h3>Why it Matters</h3>

      <p>Positioned between live video and audio calls, this concept strikes a balance between presence and privacy. It reduces friction in casual communication while preserving personal boundaries&mdash;especially relevant in the new normal of distributed work.</p>

      <h3>How it Works</h3>

      <ul className="bulletedList">
        <li><strong>Presence detection</strong> via Portal&apos;s smart camera shows which coworkers are currently available.</li>
        <li><strong>Tap to talk:</strong> A single tap sends a non-intrusive chime.</li>
        <li><strong>Live avatar call:</strong> The call begins with your avatar mirroring your facial expressions&mdash;no video needed.</li>
      </ul>

      {/* Existing Wistia prototype on Portal homescreen */}
      <div className="image-full">
        <div className="video-container" style={{ borderRadius: '4px', overflow: 'hidden' }}>
          <Script src="https://fast.wistia.com/embed/medias/mwuspopx2m.jsonp" strategy="lazyOnload" />
          <div className="wistia_responsive_padding" style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
              <div className="wistia_embed wistia_async_mwuspopx2m videoFoam=true autoPlay=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                  <img src="https://fast.wistia.com/embed/medias/mwuspopx2m/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="image-caption">Above: Prototype animation implemented on to Portal&apos;s Ambient Homescreen</p>

      <h3>Impact of Work</h3>

      <ul className="bulletedList">
        <li><strong>Patent Filed (2022)</strong> Meta successfully filed a defensive patent on the concept, helping create product and IP differentiation.</li>
        <li><strong>Cross-org Adoption:</strong> This calling paradigm began influencing other teams beyond Portal, including WWW and mobile surfaces.</li>
        <li><strong>Strategic Differentiation:</strong> The work created new business value by enabling more lightweight, high-frequency interactions&mdash;driving engagement and device usage.</li>
        <li><strong>Solving for Future of Work:</strong> In an increasingly remote world, we need tools that reduce Zoom fatigue. This was one of my contributions toward making that future more human.</li>
      </ul>
    </CaseStudyLayout>
  );
}
