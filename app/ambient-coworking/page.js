import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Ambient Coworking with Avatars | Adnan Khan | Product Designer',
}

export default function AmbientCoworking() {
  return (
    <div className="work">
      <Header />

      <div className="post animated fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">

              <div className="title">
                <h1>Ambient Coworking with Avatars</h1>
                <div className="byline">Product Design Lead &bull; Prototyping / Innovation &bull; 2021</div>
              </div>

            </div>{/* /col */}
          </div>{/* /row */}
        </div>{/* container */}

        <div className="image-full">
          <div className="video-container" style={{ borderRadius: '4px', overflow: 'hidden' }}>
            <script src="https://fast.wistia.com/embed/medias/n3z81yij3x.jsonp" async></script>
            <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
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

        <p>Above: Prototype animation for Ambient Coworking with Avatars.</p>

        <div className="image-full">
          <div className="video-container" style={{ borderRadius: '4px', overflow: 'hidden' }}>
            <script src="https://fast.wistia.com/embed/medias/mwuspopx2m.jsonp" async></script>
            <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
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

        <p>Above: Prototype animation implemented on to Portal&apos;s Ambient Homescreen</p>

      </div>{/* post */}

      <Footer />
    </div>
  )
}
