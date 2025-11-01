"use client";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Animated from "./Components/Animated";
import Band1 from "./Components/Band1";
import Navmain from "./Components/Navmain";
import Band2 from "./Components/Band2";

export default function Home() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  // refs to measure and position band2
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

    // theme handling (preserve your existing logic)
    const storedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedTheme || (systemDark ? "dark" : "light");

    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);

    // set initial size
    setSize(screenSize());

    const handleResize = () => {
      setSize(screenSize());
    };
    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={pageRootRef} className="relative overflow-hidden h-full">
      <Navmain />
      <div className="band1Container">
        <Band1 />
      </div>

      {/* band2 positioned via JS so it always sits under main's bottom */}
      <div ref={band2Ref} className="band2Container" style={{ position: "absolute", left: 0 ,bottom: "0"}}>
        <Band2 isMoving={false} />
      </div>

      <main ref={mainRef} className="flex flex-col justify-center h-full items-center bg-background text-foreground">
        <div className="grow"/>
        <div className="flex flex-col justify-center items-center">
          {size.width <= 768 ? (
            <>
              <span className="text-3xl font-black text-wrap my-24 mx-2 p-4 text-center">
                Brand.
                <br />
                <span className="text-gray-700">Design.</span>
                Production.
                <br />
                <span className="text-orange-500">Marketing</span>
                <br />
                Sponsor<span className="text-gray-500">&lt;/Software&gt;.</span>
                <br />
                And More
              </span>
            </>
          ) : (
            <>
              <span className="text-3xl font-black text-wrap mx-2 p-4 text-center">
                Brand.
                <span className="text-gray-700">Design.</span>
                <br />
                Production.
                <span className="text-orange-500">Marketing</span>
                <br />
                Sponsor<span className="text-gray-500">&lt;/Software&gt;.</span>
                <br />
                And More
              </span>
            </>
          )}
        </div>
        <div className="grow-2"/>

      </main>
    </div>
  );
}
