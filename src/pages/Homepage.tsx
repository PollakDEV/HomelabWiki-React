import styles from './Homepage.module.css'

const Homepage = () => {
    return (
      <div>


    {/* <!-- Hero Section --> */}
    <section className={`${styles['cyber-hero']}`}>
        <div className={`${styles['hero-content']}`}>
            <div className={`${styles['hero-glitch']}`}>Homelab_Handbook</div>
            <p className={`${styles['hero-sub']}`}>Take back control of your digital life</p>
            <div className={`${styles['hero-cta']}`}>
                <a href="#start" className={`${styles['cta-button']}`}>Initialize_Setup.exe</a>
                <div className={`${styles['scanline']}`}></div>
            </div>
        </div>
    </section>

    {/* <!-- Core Features --> */}
    <section id="features">
        <h2>Core_Features</h2>
        <div className={`${styles['cyber-grid']}`}>
            <div className={`${styles['cyber-card']}`}>
                <div className={`${styles['card-icon']}`}><i className={`${styles['fas fa-server']}`}></i></div>
                <h3>Container Orchestration</h3>
                <p>Docker & Kubernetes management with automated scaling</p>
                <div className={`${styles['terminal-code']}`}>
                    <span>$ docker-compose up -d</span>
                </div>
            </div>
            
            <div className={`${styles['cyber-card']}`}>
                <div className={`${styles['card-icon']}`}><i className={`${styles['fas fa-shield-alt']}`}></i></div>
                <h3>Secure Networking</h3>
                <p>WireGuard VPN + Reverse Proxy configurations</p>
                <div className={`${styles['terminal-code']}`}>
                    <span>$ wg-quick up wg0</span>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Getting Started --> */}
    <section id="start">
        <h2>Getting_Started</h2>
        <div className={`${styles['setup-steps']}`}>
            <div className={`${styles['step']}`}>
                <div className={`${styles['step-number']}`}>01</div>
                <h3>Hardware Provisioning</h3>
                <p>Choose between bare metal or cloud infrastructure</p>
                <ul className={`${styles['spec-list']}`}>
                    <li><i className={`${styles['fas fa-microchip']}`}></i> Minimum: 4vCPU / 8GB RAM</li>
                    <li><i className={`${styles['fas fa-hdd']}`}></i> Storage: 50GB+ SSD</li>
                </ul>
            </div>

            <div className={`${styles['step']}`}>
                <div className={`${styles['step-number']}`}>02</div>
                <h3>Base OS Installation</h3>
                <p>Recommended: Ubuntu Server 22.04 LTS</p>
                <div className={`${styles['terminal-code']}`}>
                    <span>$ ssh admin@homelab</span>
                </div>
            </div>
        </div>
    </section>
        {/* <!-- Self-Hosted Apps Showcase --> */}
        <section id="apps">
            <h2>App_Repository</h2>
            <div className={`${styles['app-grid']}`}>
                <div className={`${styles['app-card']}`}>
                    <div className={`${styles['app-header']}`}>
                        <i className={`${styles['fab fa-docker']}`}></i>
                        <h3>Media Stack</h3>
                        <span className={`${styles['app-status operational']}`}>Operational</span>
                    </div>
                    <div className={`${styles['app-content']}`}>
                        <p>Plex + Sonarr + Radarr + qBittorrent</p>
                        <div className={`${styles['app-tech']}`}>
                            <span>Docker</span>
                            <span>Reverse Proxy</span>
                        </div>
                        <div className={`${styles['terminal-code']}`}>
                            <span>version: '3.8'</span>
                            <span>services:</span>
                            <span>  plex:</span>
                            <span>    image: linuxserver/plex</span>
                        </div>
                    </div>
                </div>
    
                <div className={`${styles['app-card']}`}>
                    <div className={`${styles['app-header']}`}>
                        <i className={`${styles['fas fa-database']}`}></i>
                        <h3>Home Cloud</h3>
                        <span className={`${styles['app-status maintenance']}`}>Maintenance</span>
                    </div>
                    <div className={`${styles['app-content']}`}>
                        <p>Nextcloud + Collabora Office</p>
                        <div className={`${styles['app-tech']}`}>
                            <span>Kubernetes</span>
                            <span>PostgreSQL</span>
                        </div>
                        <a href="#docs" className={`${styles['app-docs']}`}>View_Documentation.md</a>
                    </div>
                </div>
            </div>
        </section>    

        {/* <!-- Infrastructure Guide --> */}
        <section id="infra">
            <h2>Infrastructure_Blueprint</h2>
            <div className={`${styles['infra-map']}`}>
                <div className={`${styles['infra-node primary']}`}>
                    <i className={`${styles['fas fa-network-wired']}`}></i>
                    <h4>Proxmox Cluster</h4>
                    <p>3-node hyperconverged setup</p>
                    <div className={`${styles['node-connector']}`}></div>
                </div>
    
                <div className={`${styles['infra-node secondary']}`}>
                    <i className={`${styles['fab fa-docker']}`}></i>
                    <h4>Docker Swarm</h4>
                    <p>Container orchestration layer</p>
                    <div className={`${styles['node-connector']}`}></div>
                </div>
    
                <div className={`${styles['infra-node tertiary']}`}>
                    <i className={`${styles['fas fa-cloud']}`}></i>
                    <h4>Cloud Services</h4>
                    <p>Traefik + Authelia + Vaultwarden</p>
                </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default Homepage;