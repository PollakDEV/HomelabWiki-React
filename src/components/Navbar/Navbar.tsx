
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Apps', path: '/app-repository' },
    { name: 'Docs', path: '/documentation' },
    { name: 'About', path: '/about-me' },
  ];

  const checkMobile = () => setIsMobile(window.innerWidth <= 860);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
    setSearchQuery('');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'hidden' : ''}`}>
      <div className="navbar-container">
        <Link to="/">
          <img 
            src="src/assets/logo-main.png"
            alt="Logo" 
            className="navbar-logo"
          />
        </Link>

        {isMobile ? (
          <>
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu">
              <span className="hamburger-line top"></span>
              <span className="hamburger-line middle"></span>
              <span className="hamburger-line bottom"></span>
            </button>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <ul className="mobile-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleSearch} className="nav-search">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-icon">⌗</button>
              </form>
            </div>
          </>
        ) : (
          <>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="nav-link">
                    <span className="link-hover"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <form onSubmit={handleSearch} className="nav-search">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-icon">⨳</button>
            </form>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;