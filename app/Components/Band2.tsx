import styles from "./Band2.module.css";
import { useEffect } from "react";
import Link from "next/link";
export default function Band2({isMoving}: {isMoving?: boolean}) {
    useEffect(() => {
    let counter = 0;
    let stop = isMoving===false;

    const elem = document.getElementById("band2cnt");
    if (!elem) return;
    elem.style.transform = "translateX(0%)";
    async function animate() {
        console.log("Starting animation");
      while (!stop) {
        if (!elem) return;
        elem.style.transform = `translateX(${counter}%)`;
        counter+=0.2;

        if (counter >= 120) {
          counter = -200;
        }

        // Wait 10ms between updates
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }

    animate();

    // Cleanup when component unmounts
    return () => {
      stop = true;
    };
  }, []);
    return (
        <ul className={styles.ulband2}>
            <div className={styles.ulband2} id="band2cnt">
                <li className={styles.ulband2cnt}><Link href={"/identity"}>🎨 Identité visuelle</Link></li>
                <li className={styles.ulband2cnt}><Link href={"/sas"}>💻 Solution Software</Link></li>
                <li className={styles.ulband2cnt}><Link href={"/production"}>🎬 Production visuelle</Link></li>
                <li className={styles.ulband2cnt}><Link href={"/sponsor"}>🤝 Sponsor</Link></li>
                <li className={styles.ulband2cnt}><Link href={"/gestion"}>📱 Gestion réseaux sociaux</Link></li>

            </div>
        </ul>
    );
}
