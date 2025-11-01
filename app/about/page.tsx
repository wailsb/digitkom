import Navbar from "../Components/Navbar";
import EmailForm from "../Components/EmailForm";
import styles from "./page.module.css";

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <Navbar focusOn={6}/>

            <header className={styles.hero + ' reveal delay-1'}>
                <div>
                    <h1 className={styles.heroTitle}>À propos de DigitKom</h1>
                    <p className={styles.heroSubtitle}>
                        Nous sommes une agence digitale passionnée qui accompagne les entreprises dans leur transformation numérique. 
                        De la stratégie à la réalisation, nous mettons notre expertise au service de votre réussite.
                    </p>
                </div>
                <div style={{minWidth:180,textAlign:'right'}}>
                    {/* Team/Company illustration */}
                    <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.7}}>
                        <circle cx="60" cy="45" r="15" stroke="currentColor" strokeWidth="2" opacity="0.25" />
                        <circle cx="35" cy="60" r="12" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                        <circle cx="85" cy="60" r="12" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                        <path d="M60 60v20M45 85h30" stroke="currentColor" strokeWidth="2" opacity="0.15" strokeLinecap="round"/>
                        <circle cx="60" cy="45" r="6" fill="currentColor" opacity="0.3" />
                        <circle cx="35" cy="60" r="5" fill="currentColor" opacity="0.25" />
                        <circle cx="85" cy="60" r="5" fill="currentColor" opacity="0.25" />
                    </svg>
                </div>
            </header>

            <section className={styles.section + ' reveal delay-2'}>
                <h2 className={styles.sectionTitle}>Notre mission</h2>
                <p className={styles.sectionText}>
                    Aider les entreprises, associations et porteurs de projets à se développer grâce au numérique. 
                    Nous croyons en l'alliance de la technologie et de la créativité pour bâtir des solutions qui ont du sens.
                </p>
                <p className={styles.sectionText}>
                    Chaque projet est unique. C'est pourquoi nous prenons le temps d'écouter, de comprendre vos enjeux 
                    et de proposer des solutions sur mesure qui répondent précisément à vos besoins.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Nos valeurs</h2>
                <div className={styles.valuesList}>
                    <div className={styles.valueCard + ' reveal delay-1'}>
                        <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className={styles.valueTitle}>Excellence</div>
                        <p className={styles.valueText}>
                            Nous visons la qualité dans chaque détail, du code au design en passant par le service client.
                        </p>
                    </div>
                    <div className={styles.valueCard + ' reveal delay-2'}>
                        <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <div className={styles.valueTitle}>Réactivité</div>
                        <p className={styles.valueText}>
                            Délais respectés, communication fluide et disponibilité pour répondre à vos questions rapidement.
                        </p>
                    </div>
                    <div className={styles.valueCard + ' reveal delay-3'}>
                        <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2v4M6.2 4.6l2.8 2.8M2 12h4M6.2 19.4l2.8-2.8M12 18v4M17.8 19.4l-2.8-2.8M20 12h-4M17.8 4.6l-2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className={styles.valueTitle}>Innovation</div>
                        <p className={styles.valueText}>
                            Veille technologique, outils modernes et approches créatives pour rester à la pointe.
                        </p>
                    </div>
                    <div className={styles.valueCard + ' reveal delay-4'}>
                        <svg className={styles.valueIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M20 8v6M23 11h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <div className={styles.valueTitle}>Proximité</div>
                        <p className={styles.valueText}>
                            Relation humaine, écoute active et accompagnement personnalisé tout au long du projet.
                        </p>
                    </div>
                </div>
            </section>

            <EmailForm
                subjectDefault="Demande de renseignements"
                bodyDefault="Bonjour,\n\nJ'aimerais en savoir plus sur vos services. Pouvez-vous me recontacter ?\n\nMerci,\nCordialement,"
                logoSrc="/victordigitkom-2.png"
            />

            <footer className={styles.footer}>
                <p>Prêt à lancer votre projet ? <strong>Contactez-nous</strong> pour échanger ensemble.</p>
            </footer>
        </div>
    );
}
