import React from "react";
import { Link } from "react-router-dom";
import WomanImg from "../assets/home/woman.png";

export default function Home() {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div className="h-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
          <h1 className="h1">
            Фотограф <br /> & Монтажер
          </h1>
          <p className="text-[26px] lg:text-[36px] font-black mb-4 lg:mb-12">
            Владивосток
          </p>
          <Link to={"/about"} className="btn mb-[30px]">
            Моя историия
          </Link>
        </div>
        <div className="flex justify-end max-h-96 lg:max-h-max">
          <div className="relative lg:-right-20 outline-hidden">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
