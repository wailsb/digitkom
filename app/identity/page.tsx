import Navbar from "../Components/Navbar";
import EmailForm from "../Components/EmailForm";
import styles from "./page.module.css";

export default function IdentityPage() {
  return (
    <div className={styles.page}>
        <Navbar focusOn={3}/>

        <header className={styles.hero + ' reveal delay-1'}>
            <div>
                <h1 className={styles.heroTitle}>Identité visuelle — créez une marque forte et mémorable</h1>
                <p className={styles.heroSubtitle}>Logo, charte graphique, supports de communication : nous construisons votre image de marque de A à Z pour vous démarquer.</p>
                <div style={{marginTop: '1rem'}}>
                    <button className={styles.cta}>Démarrer votre projet</button>
                </div>
            </div>
            <div style={{minWidth:180,textAlign:'right'}}>
                {/* Design/Palette illustration */}
                <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.7}}>
                    <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="2" opacity="0.15" />
                    <circle cx="60" cy="30" r="8" fill="currentColor" opacity="0.3" />
                    <circle cx="85" cy="45" r="8" fill="currentColor" opacity="0.35" />
                    <circle cx="85" cy="75" r="8" fill="currentColor" opacity="0.25" />
                    <circle cx="60" cy="90" r="8" fill="currentColor" opacity="0.4" />
                    <circle cx="35" cy="75" r="8" fill="currentColor" opacity="0.28" />
                    <circle cx="35" cy="45" r="8" fill="currentColor" opacity="0.32" />
                    <rect x="50" y="50" width="20" height="20" rx="2" fill="currentColor" opacity="0.2" />
                </svg>
            </div>
        </header>

        <section className={styles.grid}>
            <article className={styles.card + ' reveal delay-1'}>
                <div className={styles.cardHeader}>
                    <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <div className={styles.cardTitle}>Création de logo</div>
                      <div className={styles.cardSubtitle}>Unique et adapté à votre activité</div>
                    </div>
                </div>
                <p className={styles.cardText}>Conception sur mesure d'un logo professionnel, déclinable en couleur et noir & blanc, avec fichiers sources vectoriels.</p>
            </article>
            <article className={styles.card + ' reveal delay-2'}>
                <div className={styles.cardHeader}>
                    <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="6" cy="6" r="1" fill="currentColor"/>
                    </svg>
                    <div>
                      <div className={styles.cardTitle}>Charte graphique</div>
                      <div className={styles.cardSubtitle}>Guide complet pour vos équipes</div>
                    </div>
                </div>
                <p className={styles.cardText}>Palette de couleurs, typographies, règles d'usage et déclinaisons. Document PDF prêt à partager avec vos prestataires.</p>
            </article>
            <article className={styles.card + ' reveal delay-3'}>
                <div className={styles.cardHeader}>
                    <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 2v4M16 2v4M4 10h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="8" y="13" width="2" height="2" rx="0.5" fill="currentColor"/>
                      <rect x="12" y="13" width="2" height="2" rx="0.5" fill="currentColor"/>
                      <rect x="16" y="13" width="2" height="2" rx="0.5" fill="currentColor"/>
                    </svg>
                    <div>
                      <div className={styles.cardTitle}>Supports de communication</div>
                      <div className={styles.cardSubtitle}>Print & digital</div>
                    </div>
                </div>
                <p className={styles.cardText}>Cartes de visite, flyers, signatures email, templates réseaux sociaux — tout pour une image cohérente.</p>
            </article>
        </section>

        <EmailForm
            subjectDefault="Demande de création d'identité visuelle"
            bodyDefault="Bonjour,\n\nJe souhaite créer ou refondre l'identité visuelle de mon entreprise/projet. Pouvez-vous me recontacter pour en discuter ?\n\nMerci,\nCordialement,"
            logoSrc="/victordigitkom-2.png"
        />

        <div className={styles.featureList}>
            <span className={styles.feature}>Logo vectoriel</span>
            <span className={styles.feature}>Révisions incluses</span>
            <span className={styles.feature}>Formats multiples</span>
            <span className={styles.feature}>Livraison rapide</span>
        </div>

        <footer className={styles.footer}>
            <p>Prêt à donner vie à votre marque ? <strong>Contactez-nous</strong> pour un devis personnalisé.</p>
        </footer>
    </div>
  );
}

