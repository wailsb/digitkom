"use client";
import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";
import ToggleTheme from "./ToggleTheme";

export default function Navbar({ focusOn }: { focusOn?: number }) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flex flex-col md:flex-row justify-center items-center p-4 shadow-md transition-all duration-300">
      {/* === Logo + Burger === */}
      <div className="flex items-center w-full md:w-auto justify-between md:justify-center">
        <Link href="/">
          <Image src="/victordigitkom-2.png" alt="logo" width={100} height={100} />
        </Link>

        {/* Burger only on mobile */}
        {isMobile && (
          <CiMenuBurger
            onClick={toggleMenu}
            className="md:hidden cursor-pointer"
            size={30}
          />
        )}
      </div>

      {/* === Navigation Links === */}
      <div
        className={`flex-col md:flex md:flex-row md:items-center justify-center gap-4 transition-all duration-300 ${
          isMobile
            ? menuOpen
              ? "flex visible mt-4"
              : "hidden"
            : "flex visible"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-4 text-center">
          <li className={focusOn === 1 ? "active" : "navlinks"}>
            <Link href="/gestion">Gestion des réseaux sociaux</Link>
          </li>
          <li className={focusOn === 2 ? "active" : "navlinks"}>
            <Link href="/sas">Solutions logicielles</Link>
          </li>
          <li className={focusOn === 3 ? "active" : "navlinks"}>
            <Link href="/identity">Identité visuelle</Link>
          </li>
          <li className={focusOn === 4 ? "active" : "navlinks"}>
            <Link href="/production">Production visuelle</Link>
          </li>
          <li className={focusOn === 5 ? "active" : "navlinks"}>
            <Link href="/sponsor">Sponsor</Link>
          </li>
        </ul>

        <ul className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <li className={focusOn === 6 ? "active" : "navlinks"}>
            <Link href="/about">À propos</Link>
          </li>
          <ToggleTheme />
        </ul>
      </div>
    </nav>
  );
}
