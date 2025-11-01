import { Metadata } from "next";
import Navbar from "../Components/Navbar";
import EmailForm from "../Components/EmailForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Production Visuelle - Vidéo, Photo & Motion Design",
  description: "Services de production audiovisuelle professionnelle : vidéos corporate, photographie d'entreprise, motion design. Mettez en valeur votre entreprise avec du contenu visuel de qualité.",
  keywords: ["production vidéo", "vidéo corporate", "photographie professionnelle", "motion design", "contenu audiovisuel", "vidéo d'entreprise"],
  openGraph: {
    title: "Production Visuelle - Vidéo & Photo Professionnelle",
    description: "Productions audiovisuelles de qualité pour valoriser votre entreprise et vos projets.",
  },
};

export default function ProductionPage() {
    return (
        <div className={styles.page}>
            <Navbar focusOn={4}/>

            <header className={styles.hero + ' reveal delay-1'}>
                <div>
                    <h1 className={styles.heroTitle}>Production visuelle — vidéos, photos, contenus qui marquent les esprits</h1>
                    <p className={styles.heroSubtitle}>Captez l'attention de votre audience avec des créations visuelles professionnelles et impactantes adaptées à vos besoins.</p>
                    <div style={{marginTop: '1rem'}}>
                        <button className={styles.cta}>Parlez-nous de votre projet</button>
                    </div>
                </div>
                <div style={{minWidth:180,textAlign:'right'}}>
                    {/* Camera/Video production illustration */}
                    <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.7}}>
                        <rect x="20" y="40" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                        <circle cx="50" cy="60" r="12" stroke="currentColor" strokeWidth="2" opacity="0.25" />
                        <circle cx="50" cy="60" r="6" fill="currentColor" opacity="0.3" />
                        <path d="M80 50 L95 40 L95 80 L80 70 Z" fill="currentColor" opacity="0.2" />
                        <rect x="30" y="32" width="8" height="8" rx="1" fill="currentColor" opacity="0.15" />
                    </svg>
                </div>
            </header>

            <section className={styles.grid}>
                <article className={styles.card + ' reveal delay-1'}>
                    <div className={styles.cardHeader}>
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M17 10l5-3v10l-5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                          <div className={styles.cardTitle}>Vidéo corporate</div>
                          <div className={styles.cardSubtitle}>Présentations & témoignages</div>
                        </div>
                    </div>
                    <p className={styles.cardText}>Films institutionnels, interviews, captation d'événements. Tournage, montage et post-production inclus.</p>
                </article>
                <article className={styles.card + ' reveal delay-2'}>
                    <div className={styles.cardHeader}>
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="8.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M3 15l5-5 4 4 5-5 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                          <div className={styles.cardTitle}>Photographie pro</div>
                          <div className={styles.cardSubtitle}>Portraits & produits</div>
                        </div>
                    </div>
                    <p className={styles.cardText}>Shootings en studio ou sur site, retouches professionnelles, photos HD prêtes pour web et print.</p>
                </article>
                <article className={styles.card + ' reveal delay-3'}>
                    <div className={styles.cardHeader}>
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                          <div className={styles.cardTitle}>Motion design</div>
                          <div className={styles.cardSubtitle}>Animations & explainers</div>
                        </div>
                    </div>
                    <p className={styles.cardText}>Vidéos animées, infographies dynamiques, génériques et habillages pour vos contenus digitaux.</p>
                </article>
            </section>

            <EmailForm
                subjectDefault="Demande de production visuelle"
                bodyDefault="Bonjour,\n\nJ'aimerais discuter d'un projet de production visuelle (vidéo, photo, motion design). Pourriez-vous me recontacter pour en discuter ?\n\nMerci,\nCordialement,"
                logoSrc="/victordigitkom-2.png"
            />

            <div className={styles.featureList}>
                <span className={styles.feature}>Équipe créative</span>
                <span className={styles.feature}>Matériel pro 4K</span>
                <span className={styles.feature}>Post-production soignée</span>
                <span className={styles.feature}>Délais respectés</span>
            </div>

            <footer className={styles.footer}>
                <p>Un projet visuel en tête ? <strong>Contactez-nous</strong> pour un devis et des exemples de réalisations.</p>
            </footer>
        </div>
    );
}
