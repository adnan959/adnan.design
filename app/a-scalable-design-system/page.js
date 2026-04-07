import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'A scalable design system in Sketch | Adnan Khan | Product Designer',
};

export default function AScalableDesignSystem() {
  return (
    <div className="work">
      <Header />

      <div className="post animated fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
              <div className="title">
                <h1>A scalable design system in Sketch</h1>
                <div className="byline">Design Lead &bull; 2018</div>
              </div>
            </div>
          </div>
        </div>

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
      </div>

      <Footer />
    </div>
  );
}
