import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Navmain.module.css";
import { useEffect, useState } from "react";
import ToggleTheme from "./ToggleTheme";
export default function Navmain() {
    const [currentTheme, setCurrentTheme] = useState("");
    function getCurrentTheme() {
        const html = document.documentElement;

        if (html.classList.contains("dark")) {

            setCurrentTheme("dark");
            return "dark";
        } else if (html.classList.contains("light")) {
            setCurrentTheme("light");
            return "light";
        } else {
            setCurrentTheme("system");
            return "system";
        }
    }
    useEffect(() => {
        getCurrentTheme();
    }, []);
    return (
        <nav className={styles.nav}>
            <div/>
            <div className={styles.logo}>
                <Image src={currentTheme === "dark" ? "/victordigitkom-4.png" : "/victordigitkom-3.png"} alt="logo" width={82} height={82} />
            </div>
            <ul className={styles.menu}>
                <div onClick={getCurrentTheme}><ToggleTheme/></div>
            </ul>
        </nav>
    );
}