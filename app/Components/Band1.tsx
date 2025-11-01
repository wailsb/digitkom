import styles from "./Band1.module.css";
import { useEffect } from "react";
export default function Band1() {
    useEffect(() => {
    let counter = 0;
    let stop = false;

    const elem = document.getElementById("band1cnt");
    if (!elem) return;

    async function animate() {
        console.log("Starting animation");
      while (!stop) {
        if (!elem) return;
        elem.style.transform = `translateX(${counter}%)`;
        counter+=0.2;

        if (counter >= 100) {
          counter = -120;
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
        <ul className={styles.ulband1}>
            <div className={styles.ulband1} id="band1cnt">
                <li className={styles.ulbandcnt}>🚀 Livraison rapide et fiable</li>
                <li className={styles.ulbandcnt}>💼 Solutions personnalisées pour votre entreprise</li>
                <li className={styles.ulbandcnt}>🌐 Support client</li>
            </div>
        </ul>
    );
}
