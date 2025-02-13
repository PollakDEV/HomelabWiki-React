import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brandColumn}>
          <h3 className={styles.footerTitle}>
            <span>Homelab</span>
            <span>Wiki</span>
          </h3>
          <p className={styles.tagline}>
            Empowering self-hosted solutions for the modern era
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.79-.255.79-.57 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.3-.54-1.52.105-3.16 0 0 1.005-.32 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.645 1.64.24 2.86.12 3.16.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.905-.015 3.3 0 .315.19.69.8.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <Link to="/documentation" className={styles.footerLink}>Documentation</Link>
          <Link to="/app-repository" className={styles.footerLink}>App Repository</Link>
          <Link to="/blog" className={styles.footerLink}>Blog</Link>
          <Link to="/community" className={styles.footerLink}>Community</Link>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Resources</h4>
          <Link to="/github" className={styles.footerLink}>GitHub</Link>
          <Link to="/support" className={styles.footerLink}>Support</Link>
          <Link to="/contact" className={styles.footerLink}>Contact</Link>
          <Link to="/status" className={styles.footerLink}>System Status</Link>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.columnTitle}>Legal</h4>
          <Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link>
          <Link to="/terms" className={styles.footerLink}>Terms of Service</Link>
          <Link to="/licensing" className={styles.footerLink}>Licensing</Link>
          <Link to="/cookies" className={styles.footerLink}>Cookie Policy</Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} HomelabWiki. Proudly self-hosted.
        </p>
      </div>
    </footer>
  );
};

export default Footer;