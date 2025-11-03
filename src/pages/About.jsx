import React from "react";
import { Link } from "react-router-dom";
import WomanImg from "../assets/about/woman.png";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto h-full relative">
        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-0 overflow-hidden">
            <img src={WomanImg} alt="Фотограф" />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">История</h1>
            <p className="mb-12 max-w-2xl">
              Привет! Меня зовут Алина Ли, я фотограф и монтажер, живущий и
              работающий в удивительном городе Владивосток. С любовью работаю
              над созданием ярких и запоминающихся изображений, которые передают
              атмосферу и эмоции каждого момента.
              <br />
              <br />
              Моя работа — это не просто съемка, это возможность запечатлеть
              важные моменты жизни людей, их счастье и чувства. Я стремлюсь к
              тому, чтобы каждая фотография рассказывает свою уникальную
              историю, а качественный монтаж придает работе завершенность и
              гармонию.
            </p>
            <Link to={"/portfolio"} className="btn">Мои работы</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
