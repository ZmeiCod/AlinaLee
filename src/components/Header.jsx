import React from "react";
import Mobile from "./Mobile";
import Socials from "./Socials";
import Logo from "../assets/header/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="w-max-[200px]">
          <img src={Logo} alt="" />
        </Link>
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-neutral-500 hover:text-neutral-950 transition"
          >
            Главная
          </Link>

          <Link
            to={"/about"}
            className="text-neutral-500 hover:text-neutral-950 transition"
          >
            История
          </Link>

          <Link
            to={"/portfolio"}
            className="text-neutral-500 hover:text-neutral-950 transition"
          >
            Галерея
          </Link>

          <Link
            to={"/contact"}
            className="text-neutral-500 hover:text-neutral-950 transition"
          >
            Контакты
          </Link>
        </nav>
      </div>
      <Socials />
      <Mobile />
    </header>
  );
}
