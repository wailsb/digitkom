import { Metadata } from "next";
import Navbar from "../Components/Navbar";
import EmailForm from "../Components/EmailForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Software as a Service (SaaS) - Développement sur mesure",
  description: "Développement de solutions logicielles sur mesure : applications web, API, tableaux de bord et outils d'automatisation. Technologies modernes et architecture scalable.",
  keywords: ["SaaS", "développement web", "application web", "API", "React", "Node.js", "Next.js", "dashboard", "automatisation"],
  openGraph: {
    title: "Software as a Service - Développement logiciel sur mesure",
    description: "Applications web, API et dashboards développés avec les technologies les plus modernes.",
  },
};

export default function SasPage() {
    return (
        <div className={styles.page}>
            <Navbar focusOn={2}/>

            <header className={styles.hero + ' reveal delay-1'}>
                <div>
                    <h1 className={styles.heroTitle}>Software as a Service — développement sur mesure, déploiement rapide</h1>
                    <p className={styles.heroSubtitle}>Nous concevons des solutions logicielles adaptées à vos besoins métier : web apps, API, tableaux de bord et outils d'automatisation.</p>
                    <div style={{marginTop: '1rem'}}>
                        <button className={styles.cta}>Discuter de votre projet</button>
                    </div>
                </div>
                <div style={{minWidth:180,textAlign:'right'}}>
                    {/* Code/Cloud illustration */}
                    <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.7}}>
                        <rect x="10" y="20" width="100" height="70" rx="8" fill="currentColor" opacity="0.08" />
                        <rect x="20" y="30" width="30" height="4" rx="2" fill="currentColor" opacity="0.3" />
                        <rect x="20" y="40" width="20" height="4" rx="2" fill="currentColor" opacity="0.25" />
                        <rect x="20" y="50" width="35" height="4" rx="2" fill="currentColor" opacity="0.28" />
                        <circle cx="85" cy="45" r="12" fill="currentColor" opacity="0.2" />
                        <path d="M70 70 L90 70 L80 85 Z" fill="currentColor" opacity="0.15" />
                    </svg>
                </div>
            </header>

            <section className={styles.grid}>
                <article className={styles.card + ' reveal delay-1'}>
                    <div className={styles.cardHeader}>
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3l-1 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3l-1-2H8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                          <div className={styles.cardTitle}>Applications web sur mesure</div>
                          <div className={styles.cardSubtitle}>React, Vue, Angular, Next.js</div>
                        </div>
                    </div>
                    <p className={styles.cardText}>Interfaces modernes, performantes et scalables. Architecture front-end solide et maintenable pour vos équipes.</p>
                </article>
                <article className={styles.card + ' reveal delay-2'}>
                    <div className={styles.cardHeader}>
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M6 10h4M6 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          <circle cx="17" cy="12" r="2" fill="currentColor"/>
                        </svg>
                        <div>
                          <div className={styles.cardTitle}>API & Microservices</div>
                          <div className={styles.cardSubtitle}>Node.js, Python, Go</div>
                        </div>
                    </div>
                    <p className={styles.cardText}>Architecture backend robuste, endpoints REST ou GraphQL, documentation Swagger et tests automatisés.</p>
                </article>
                <article className={styles.card + ' reveal delay-3'}>
                    <div className={styles.cardHeader}>
                        <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="6" y="12" width="3" height="6" rx="1" fill="currentColor"/>
                          <rect x="11" y="8" width="3" height="10" rx="1" fill="currentColor"/>
                          <rect x="16" y="4" width="3" height="14" rx="1" fill="currentColor"/>
                        </svg>
                        <div>
                          <div className={styles.cardTitle}>Dashboards & Analytics</div>
                          <div className={styles.cardSubtitle}>Visualisation en temps réel</div>
                        </div>
                    </div>
                    <p className={styles.cardText}>Tableaux de bord interactifs avec graphiques, filtres et exports. Intégration avec vos sources de données.</p>
                </article>
            </section>

            <EmailForm
                subjectDefault="Demande d'information - Software as a Service"
                bodyDefault="Bonjour,\n\nJe souhaite en savoir plus sur vos services de développement logiciel sur mesure. Pourriez-vous me contacter pour discuter de mon projet ?\n\nMerci d'avance,\nCordialement,"
                logoSrc="/victordigitkom-2.png"
            />

            <div className={styles.featureList}>
                <span className={styles.feature}>CI/CD</span>
                <span className={styles.feature}>Cloud (AWS, Azure, GCP)</span>
                <span className={styles.feature}>Sécurité & conformité</span>
                <span className={styles.feature}>Maintenance & évolution</span>
            </div>

            <footer className={styles.footer}>
                <p>Besoin d'un logiciel adapté à votre activité ? <strong>Contactez-nous</strong> pour un devis.</p>
            </footer>
        </div>
    );
}
