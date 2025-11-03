"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Band1 from "./Components/Band1";
import Navmain from "./Components/Navmain";
import Band2 from "./Components/Band2";
import styles from "./page.module.css";

export default function Home() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  const pageRootRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const band2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function screenSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    // theme handling
    const storedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedTheme || (systemDark ? "dark" : "light");

    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);

    // set initial size
    setSize(screenSize());
    setMounted(true);

    const handleResize = () => {
      setSize(screenSize());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={pageRootRef} className={styles.pageContainer}>
      <Navmain />
      
      {/*size.width && size.width > 768 && (
      <div className="band1Container">
        <Band1 />
      </div>
      )*/}

      <main ref={mainRef} className={styles.main}>
        <div className={styles.hero}>
          {/* Hero Title with creative typography */}
          <div className={styles.heroContent}>
            {/*mounted && size.width <= 768 ? (
              <h1 className={`${styles.heroTitle} ${styles.mobile}`}>
                <span className={styles.word1}>Marque.</span>
                <br />
                <span className={styles.word2}>Design.</span>
                <br />
                <span className={styles.word3}>Production.</span>
                <br />
                <span className={styles.word4}>Marketing.</span>
                <br />
                <span className={styles.word5}>Sponsor.</span>
                <br />
                <span className={styles.word6}>&lt;Software/&gt;</span>
                <br />
                <span className={styles.word7}>Et Plus Encore</span>
              </h1>
            ) : (
              <h1 className={styles.heroTitle}>
                <span className={styles.word1}>Marque.</span>
                <span className={styles.word2}>Design.</span>
                <br />
                <span className={styles.word3}>Production.</span>
                <span className={styles.word4}>Marketing.</span>
                <br />
                <span className={styles.word5}>Sponsor.</span>
                <span className={styles.word6}>&lt;Software/&gt;</span>
                <br />
                <span className={styles.word7}>Et Plus Encore</span>
              </h1>
            )*/}
            <video autoPlay loop muted playsInline className="w-full ">
              <source src="/main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <Link href="/about" className={styles.primaryBtn}>
                Découvrir DigitKom
              </Link>
              <Link href="/gestion" className={styles.secondaryBtn}>
                Nos Services
              </Link>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className={styles.decorativeCircle1}></div>
          <div className={styles.decorativeCircle2}></div>
          <div className={styles.decorativeCircle3}></div>
        </div>

        {/* Services Quick Links */}
        <section className={styles.servicesGrid}>
          <Link href="/identity" className={`${styles.serviceCard} ${styles.delay1}`}>
            <div className={styles.serviceIcon}>🎨</div>
            <h3>Identité Visuelle</h3>
            <p>Créez une marque forte et mémorable</p>
          </Link>

          <Link href="/sas" className={`${styles.serviceCard} ${styles.delay2}`}>
            <div className={styles.serviceIcon}>💻</div>
            <h3>Solutions Software</h3>
            <p>Applications sur mesure et performantes</p>
          </Link>

          <Link href="/production" className={`${styles.serviceCard} ${styles.delay3}`}>
            <div className={styles.serviceIcon}>🎬</div>
            <h3>Production</h3>
            <p>Contenu audiovisuel de qualité</p>
          </Link>

          <Link href="/gestion" className={`${styles.serviceCard} ${styles.delay1}`}>
            <div className={styles.serviceIcon}>📱</div>
            <h3>Gestion Digitale</h3>
            <p>Automatisation et optimisation</p>
          </Link>

          <Link href="/sponsor" className={`${styles.serviceCard} ${styles.delay2}`}>
            <div className={styles.serviceIcon}>🤝</div>
            <h3>Sponsoring</h3>
            <p>Partenariats stratégiques</p>
          </Link>

          <Link href="/about" className={`${styles.serviceCard} ${styles.delay3}`}>
            <div className={styles.serviceIcon}>✨</div>
            <h3>À Propos</h3>
            <p>Découvrez notre équipe</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
