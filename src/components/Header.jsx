import React from "react";
import Mobile from "./Mobile";
import Socials from "./Socials";
import Logo from "../assets/header/logo.svg";
import { Link } from "react-router-dom";
import { CursorContext } from "../hooks/cursorContext";

const navLinks = [
  { path: "/", label: "Главная" },
  { path: "/about", label: "История" },
  { path: "/portfolio", label: "Галерея" },
  { path: "/contact", label: "Контакты" },
];

export default function Header() {
  const { mouseEnterHandler, mouseLeaveHandler } = React.useContext(CursorContext)

  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="w-max-[200px] " onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}>
          <img src={Logo} alt="" />
        </Link>
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="text-neutral-500 hover:text-neutral-950 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <Socials />
      <Mobile />
    </header>
  );
}
