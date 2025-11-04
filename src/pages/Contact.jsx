import React from "react";
import WomanImg from "../assets/contact/woman.png";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <div className="hidden lg:flex bg-pink-100 absolute bottom-0 left-0 right-0 top-72 -z-10">
          </div>

          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1">Напиши мне</h1>
            <p className="mb-12">
              Я обязательно сделать тебе идеальные фото на паспорт
            </p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="outline-0 border-b border-b-black h-[60px] bg-transparent font-[Mulish] w-full pl-3 placeholder:text-[#757879]"
                />
                <input
                  type="text"
                  placeholder="Ваша почта"
                  className="outline-0 border-b border-b-black h-[60px] bg-transparent font-[Mulish] w-full pl-3 placeholder:text-[#757879]"
                />
              </div>
              <input
                type="text"
                placeholder="Расскажите о вашем требовании к фото"
                className="outline-0 border-b border-b-black h-[60px] bg-transparent font-[Mulish] w-full pl-3 placeholder:text-[#757879]"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Отправить
              </button>
            </form>
          </div>

          <div className="lg:flex-1">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
