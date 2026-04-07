import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link href="/">Adnan Khan</Link>
        </h1>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

        <ul className="menu">
          <li className="work-link">
            <Link href="/#work">Work</Link>
          </li>
          <li className="about-link">
            <Link href="/about">About</Link>
          </li>
          <li className="contact-link">
            <a href="mailto:adnan959@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
