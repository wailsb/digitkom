import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { Activity, useEffect, useState } from "react";
export default function ToggleTheme() {
    const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
      setIsDark(true);
    } else if (savedTheme === "light") {
      html.classList.add("light");
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      // default: match system
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.add("dark");
        html.classList.remove("light");
        setIsDark(true);
      } else {
        html.classList.add("light");
        html.classList.remove("dark");
        setIsDark(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <li className="font-black cursor-pointer" onClick={toggleTheme}>
      <Activity mode={isDark?"visible":"hidden"}><CiDark size={22}/></Activity>
      <Activity mode={!isDark?"visible":"hidden"}><CiLight size={22}/></Activity>
    </li>
  );
}