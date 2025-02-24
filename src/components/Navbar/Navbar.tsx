import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo-main.png';

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
    { name: 'About Me', path: '/about-me' },
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
    <nav className={`${styles.navbar} ${isScrolled ? styles.hidden : ''}`}>
      <div className={styles.navbarContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.navbarLogo} />
        </Link>

        {isMobile ? (
          <>
            <button 
              className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu">
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
              <ul className={styles.mobileLinks}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className={styles.mobileNavLink}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleSearch} className={styles.navSearch}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.navSearchInput}
                />
                <button type="submit" className={styles.searchIcon}>⌗</button>
              </form>
            </div>
          </>
        ) : (
          <>
            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className={styles.navLink}>
                    <span className={styles.linkHover}></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <form onSubmit={handleSearch} className={styles.navSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.navSearchInput}
              />
              <button type="submit" className={styles.searchIcon}>⨳</button>
            </form>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
