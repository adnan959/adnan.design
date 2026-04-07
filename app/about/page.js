import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About | Adnan Khan | Product Designer',
};

export default function About() {
  return (
    <div className="about">
      <Header />

      <div className="post about">
        <div className="title">
          <h1>About</h1>
          <div className="byline">A designer living in, fully remote since 2014. Sometimes I travel.</div>
        </div>

        <p>Hi! I&apos;m Adnan, a product designer based out of the United Kingdom. Currently I&apos;m a Design Lead at Litmus focused on designing enterprise class software.</p>

        <p>As a designer, I&apos;m a strong advocate for the user and believe in finding solutions that solve actual user problems. I favor whiteboards to design tools and avoid solutioning until I&apos;ve fully understood a problem space. Discovery is critical to my process, as a result I&apos;ll often be found talking to customers, internal stakeholders and scrum owners.</p>

        <p>In the past I&apos;ve worked for several startups and brands including Placester, InStyle, SapientNitro, Harvard Business School.</p>

        <p>I&apos;m self taught and have been designing since I was 16 years old, what started off as a hobby quickly turned into a full-time career path. I&apos;ve embraced working remotely since 2014, as a result you will often find me behind the camera of a Loom recording, talking to customers, sketching out ideas or running design sprints within scrum teams together - all remotely!</p>

        <p>I&apos;ve worked across several cross-functional Agile teams striving for continuous improvement and incrementally shipping product. I value effective communication and strong collaboration. I strongly believe that teams do their best work when they solve problems together. As a designer, I try to bring people together on a shared goal.</p>

        <p>Outside of work, I enjoy talking about cars, technology and sometimes travel. My most recent adventure took me through Europe, where I visited six countries across two weeks.</p>

        <ul className="linksList">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adnan959/">Find me on LinkedIn</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="mailto:adnan959@gmail.com">Get in touch over Email</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/adnankhan">I post my latest work on Dribbble</a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/adnan959">Or simply say a hello on Twitter!</a>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
