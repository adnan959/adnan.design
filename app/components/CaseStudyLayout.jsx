import Header from './Header';
import Footer from './Footer';

export default function CaseStudyLayout({ title, subtitle, byline, tags, variant, children }) {
  const postClass = variant === 'v2' ? 'post post-v2 animated fadeIn' : 'post animated fadeIn';
  const isV2 = variant === 'v2';

  return (
    <div className="work">
      <Header />

      <div className={postClass}>
        <div className="container">
          {isV2 ? (
            <div className="title">
              <h1>{title}</h1>
              {subtitle && <div className="subtitle">{subtitle}</div>}
              {tags && tags.length > 0 && (
                <div className="tags">
                  {tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1">
                <div className="title">
                  <h1>{title}</h1>
                  {subtitle && <div className="subtitle">{subtitle}</div>}
                  {byline && <div className="byline" dangerouslySetInnerHTML={{ __html: byline }} />}
                  {tags && tags.length > 0 && (
                    <div className="tags">
                      {tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {children}
      </div>

      <Footer />
    </div>
  );
}
