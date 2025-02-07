import './css/Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Homelabwiki</Link>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/blog" className="nav__link">Blog</Link>
          </li>
          <li className="nav__item">
            <Link to="/app-repository" className="nav__link">Apps</Link>
          </li>
          <li className="nav__item">
            <Link to="/documentation" className="nav__link">Docs</Link>
          </li>
          <li className="nav__item">
            <Link to="/about-me" className="nav__link">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;