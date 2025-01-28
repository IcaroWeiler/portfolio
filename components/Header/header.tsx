"use client";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/stores/darkMode";

export default function Header() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const textOptions = [
    {
      href: "/",
      label: "About",
    },

    // {
    //   href: "/projects",
    //   label: "Projects",
    // },

    {
      href: "/techStack",
      label: "Tech Stack",
    },

    {
      href: "/contact",
      label: "Contact",
    },

    {
      href: "/license",
      label: "This website",
    },
  ];

  const iconStyle = {
    width: "30px",
    height: "25px",
    cursor: "pointer",
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/icaro-weiler/");
  };

  const openGithub = () => {
    window.open("https://github.com/IcaroWeiler");
  };

  return (
    <header className="h-[60px] mt-8 mb-16 text-white rounded p-4 opacity-50 ">
      <div className="flex items-center opacity-100 justify-between">
        <div className="flex">
          <Link href="/">
            <FaHouse
              className="icon"
              style={{ ...iconStyle, marginRight: "40px" }}
            />
          </Link>

          <div className="flex gap-10 items-center">
            {textOptions.map((o) => (
              <Link key={o.href} className="hover:underline" href={o.href}>
                <span className="subtitle">{o.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          <FaLinkedin
            className="icon"
            onClick={() => openLinkedin()}
            style={iconStyle}
          />

          <FaGithub
            className="icon"
            onClick={() => openGithub()}
            style={iconStyle}
          />

          {!darkMode ? (
            <IoMoonOutline
              onClick={() => setDarkMode(true)}
              style={iconStyle}
              className="icon"
            />
          ) : (
            <IoSunnyOutline
              onClick={() => setDarkMode(false)}
              style={iconStyle}
              className="icon"
            />
          )}
        </div>
      </div>
    </header>
  );
}
