import Script from 'next/script';
import CaseStudyLayout from '../components/CaseStudyLayout';

export const metadata = {
  title: 'Building a Design System | Adnan Khan | Product Designer',
};

export default function BuildingADesignSystem() {
  return (
    <CaseStudyLayout
      title="Building a Design System"
      tags={['Design Lead', 'UX & UI / Design Ops', '2018']}
      variant="v2"
    >
      <div className="image-full">
        <div className="video-container" style={{ borderRadius: '4px', overflow: 'hidden' }}>
          <Script src="https://fast.wistia.com/embed/medias/oeks4fz2hv.jsonp" strategy="lazyOnload" />
          <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
          <div className="wistia_responsive_padding" style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
              <div className="wistia_embed wistia_async_oeks4fz2hv videoFoam=true autoPlay=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                  <img src="https://fast.wistia.com/embed/medias/oeks4fz2hv/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Overview</h2>

      <p>Litmus took on an investment of $49m in 2015, at the time it needed to rapidly grow its design team from 2 designers to 12. This meant there was a need to scale up design operations. I stepped up to help migrate design assets of Litmus from Photoshop to Sketch. This meant having to recreate all assets from scratch in a different design tool and building them in a way that they could be highly adaptable to different needs of the business.</p>

      <p>Furthermore, as we brought in additional design talent I helped mentor and drive adoption of the system that ensured the company could maintain velocity as it continued to expand.</p>

      <p>I also worked closely with engineering to ensure we&apos;re able to map components 1:1 with what we have in the design system; this would ensure superior product quality down the line.</p>

      <p>The entire process took 3 months to design and another 3 months to componentize in code, later down the line each individual designer was tasked with contributing to the system to expand and support more and more use cases.</p>
    </CaseStudyLayout>
  );
}
