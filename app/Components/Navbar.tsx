"use client";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { Activity, useEffect, useState } from "react";
import ToggleTheme from "./ToggleTheme";
export default function Navbar({focusOn}: {focusOn?: Number}) {
  const [width, setWidth] = useState<number>(0);
  const [visibility, setVisibility] = useState<string>("hidden");
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function toggleMenu() {
    setVisibility(visibility === "hidden" ? "visible" : "hidden");
  }
  return (
    <nav className={`flex ${width < 768 ? "flex-col" : "flex-row"} justify-center items-center p-4 shadow-md`}>
      <div className="flex items-center w-full">
        <Link href="/">
          <Image src="/victordigitkom-2.png" alt="logo" width={100} height={100} />
        </Link>
        {width < 768 && (
          <>
            <div className="grow"></div>
            <CiMenuBurger onClick={toggleMenu} className="ml-4 md:hidden" size={30} />
          </>
        )}
      </div>
      <Activity mode={visibility ? "hidden" : "visible"}>
        <ul className={"mainul" + (width < 768 ? "" : " space-x-4")}>
          <li className={(focusOn === 1 ? "active" : " navlinks")}><Link href="/gestion">Gestion des réseaux sociaux</Link></li>
          <li className={(focusOn === 2 ? "active" : " navlinks")}><Link href="/sas">Solutions logicielles</Link></li>
          <li className={(focusOn === 3 ? "active" : " navlinks")}><Link href="/identity">Identité visuelle</Link></li>
          <li className={(focusOn === 4 ? "active" : " navlinks")}><Link href="/production">Production visuelle</Link></li>
          <li className={(focusOn === 5 ? "active" : " navlinks")}><Link href="/sponsor">Sponsor</Link></li>
        </ul>
        <ul className={`flex ${width < 768 ? "flex-col" : "flex-row space-x-4 px-4"} justify-center items-center`}>
          <li className={(focusOn === 6 ? "active" : " navlinks")}><Link href="/about">À propos</Link></li>
          <ToggleTheme />
        </ul>
      </Activity>
      
    </nav>
  );
}
