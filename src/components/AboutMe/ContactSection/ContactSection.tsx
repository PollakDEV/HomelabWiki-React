import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <h2>Initiate Connection</h2>
      <div className={styles.contactGrid}>
        {/* Contact Cards */}
        <div className={styles.contactCard} data-type="github">
          <div className={styles.cardIcon}>
            <svg aria-hidden="true" viewBox="0 0 16 16" width="24">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                   0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                   1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                   0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 
                   1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 
                   2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 
                   1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
                   1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
                   8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </div>
          <h3>Code Repository</h3>
          <p>Explore my digital workshop</p>
          <a
            href="https://github.com/PollakDEV"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            Connect <span>→</span>
          </a>
        </div>

        <div className={styles.contactCard} data-type="email">
          <div className={styles.cardIcon}>
            <svg aria-hidden="true" viewBox="0 0 24 24" width="24">
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 
                   2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
          </div>
          <h3>Secure Channel</h3>
          <p>Direct encrypted communication</p>
          <a href="mailto:owner@homelabwiki.pl" className={styles.cardLink}>
            Initialize <span>↗</span>
          </a>
        </div>

        {/* Merged Contact Form */}
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className={styles.formGroup}>
            <input type="email" id="email" required />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className={styles.formGroup}>
            <textarea id="message" rows={3} required />
            <label htmlFor="message">Message Payload</label>
          </div>
          <button type="submit" className={styles.glowButton}>
            Transmit Data
            <div className={styles.buttonPulse} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
