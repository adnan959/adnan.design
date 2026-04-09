import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link href="/">
            <img src="/images/adnan-avatar.jpeg" alt="" className="logo-avatar" aria-hidden="true" />
            <span>Adnan Khan</span>
          </Link>
        </h1>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

        <ul className="menu">
          <li className="work-link">
            <Link href="/">Work</Link>
          </li>
          <li className="about-link">
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adnan959/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
