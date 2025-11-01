
import EmailForm from "../Components/EmailForm";
import Navbar from "../Components/Navbar";
import styles from "./page.module.css";

export default function GestionPage() {
    return (
        <div className={styles.page}>
            <Navbar focusOn={1}/>

            <header className={styles.hero + ' reveal delay-1'}>
                <div>
                    <h1 className={styles.heroTitle}>Solutions de gestion numériques — simples, rapides, efficaces</h1>
                    <p className={styles.heroSubtitle}>Nous aidons les entreprises à structurer leurs flux, automatiser les tâches répétitives et offrir une expérience client moderne.</p>
                    <div style={{marginTop: '1rem'}}>
                        <button className={styles.cta}>Contactez-nous</button>
                    </div>
                </div>
                <div style={{minWidth:180,textAlign:'right'}}>
                    {/* Dashboard-style illustration: simplified monitoring/chart */}
                    <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="108" height="108" rx="16" fill="rgba(126,82,154,0.08)" />
                        <rect x="18" y="26" width="84" height="10" rx="4" fill="rgba(116,135,194,0.12)" />
                        <rect x="18" y="46" width="60" height="8" rx="3" fill="rgba(255,122,89,0.12)" />
                        <rect x="18" y="60" width="40" height="8" rx="3" fill="rgba(116,135,194,0.08)" />
                        <g transform="translate(18,76)">
                          <rect x="0" y="0" width="10" height="24" rx="2" fill="#7e529a" />
                          <rect x="16" y="6" width="10" height="18" rx="2" fill="#ff7a59" />
                          <rect x="32" y="2" width="10" height="22" rx="2" fill="#7487c2" />
                          <rect x="48" y="10" width="10" height="14" rx="2" fill="#9b7bd1" />
                        </g>
                    </svg>
                </div>
            </header>
            <EmailForm
                subjectDefault="Demande de démonstration - Solutions de gestion numériques"
                bodyDefault="Bonjour,\n\nJe suis intéressé par vos solutions de gestion numériques et j'aimerais organiser une démonstration pour en savoir plus sur la façon dont elles peuvent bénéficier à mon entreprise.\n\nMerci de me contacter pour convenir d'une date et d'une heure.\n\nCordialement,"
                logoSrc="/victordigitkom-2.png"
            />

            <div className={styles.featureList}>
                <span className={styles.feature}>Intégrations</span>
                <span className={styles.feature}>Support 24/7</span>
                <span className={styles.feature}>Personnalisation</span>
            </div>

            <footer className={styles.footer}>
                <p>Prêt à moderniser votre gestion ? <strong>Contactez-nous</strong> pour une démonstration.</p>
            </footer>
        </div>
    );
}