import { Metadata } from "next";
import Navbar from "../Components/Navbar";
import EmailForm from "../Components/EmailForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sponsoring & Partenariats - Stratégie de Collaboration",
  description: "Services de sponsoring et partenariats : montage de dossiers, prospection de sponsors, gestion de partenariats. Développez votre réseau et trouvez les bons partenaires.",
  keywords: ["sponsoring", "partenariats", "prospection sponsors", "dossier de sponsoring", "collaboration entreprise", "recherche de sponsors"],
  openGraph: {
    title: "Sponsoring & Partenariats Stratégiques",
    description: "Expertise en montage de dossiers de sponsoring et développement de partenariats durables.",
  },
};

export default function SponsorPage() {
    return (
        <div className={styles.page}>
            <Navbar focusOn={5}/>

            <header className={styles.hero + ' reveal delay-1'}>
                <div>
                    <h1 className={styles.heroTitle}>Sponsoring & partenariats — boostez votre visibilité</h1>
                    <p className={styles.heroSubtitle}>Nous vous accompagnons dans la recherche de sponsors, la création de dossiers et la gestion de vos partenariats stratégiques.</p>
                    <div style={{marginTop: '1rem'}}>
                        <button className={styles.cta}>Discutons de votre projet</button>
                    </div>
                </div>
                <div style={{minWidth:180,textAlign:'right'}}>
                    {/* Partnership/Handshake illustration */}
                    <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.7}}>
                        <circle cx="35" cy="60" r="20" stroke="currentColor" strokeWidth="2" opacity="0.15" />
                        <circle cx="85" cy="60" r="20" stroke="currentColor" strokeWidth="2" opacity="0.15" />
                        <path d="M55 60 L65 60" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                        <rect x="25" y="50" width="20" height="20" rx="3" fill="currentColor" opacity="0.2" />
                        <rect x="75" y="50" width="20" height="20" rx="3" fill="currentColor" opacity="0.2" />
                        <circle cx="35" cy="60" r="5" fill="currentColor" opacity="0.3" />
                        <circle cx="85" cy="60" r="5" fill="currentColor" opacity="0.3" />
                    </svg>
                </div>
            </header>

            <section className={styles.grid}>
                <article className={styles.card + ' reveal delay-1'}>
                    <div className={styles.cardHeader}>
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <div>
                          <div className={styles.cardTitle}>Dossiers de sponsoring</div>
                          <div className={styles.cardSubtitle}>Convaincre & séduire</div>
                        </div>
                    </div>
                    <p className={styles.cardText}>Création de dossiers percutants avec présentation de votre projet, audiences, contreparties et retour sur investissement.</p>
                </article>
                <article className={styles.card + ' reveal delay-2'}>
                    <div className={styles.cardHeader}>
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <div>
                          <div className={styles.cardTitle}>Prospection de sponsors</div>
                          <div className={styles.cardSubtitle}>Ciblage & approche</div>
                        </div>
                    </div>
                    <p className={styles.cardText}>Identification des sponsors potentiels alignés avec vos valeurs, prise de contact et négociation des partenariats.</p>
                </article>
                <article className={styles.card + ' reveal delay-3'}>
                    <div className={styles.cardHeader}>
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M20 8v6M23 11h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <div>
                          <div className={styles.cardTitle}>Gestion de partenariats</div>
                          <div className={styles.cardSubtitle}>Suivi & reporting</div>
                        </div>
                    </div>
                    <p className={styles.cardText}>Animation de vos relations sponsors, respect des engagements, mesure de performance et rapports réguliers.</p>
                </article>
            </section>

            <EmailForm
                subjectDefault="Demande d'accompagnement sponsoring"
                bodyDefault="Bonjour,\n\nJe recherche un accompagnement pour développer mes partenariats sponsoring. Pouvons-nous en discuter ?\n\nMerci,\nCordialement,"
                logoSrc="/victordigitkom-2.png"
            />

            <div className={styles.featureList}>
                <span className={styles.feature}>Dossiers personnalisés</span>
                <span className={styles.feature}>Réseau qualifié</span>
                <span className={styles.feature}>Suivi rigoureux</span>
                <span className={styles.feature}>ROI mesurable</span>
            </div>

            <footer className={styles.footer}>
                <p>Besoin d'un sponsor pour votre projet ? <strong>Contactez-nous</strong> pour un accompagnement sur mesure.</p>
            </footer>
        </div>
    );
}
