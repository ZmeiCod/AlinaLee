import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { transition } from "../hooks/transitions";
import WomanImg from "../assets/contact/woman.png";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
      className="section"
      id="contact"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition}
            className="hidden lg:flex bg-pink-100 absolute bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>

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

          <motion.div className="lg:flex-1">
            <img
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ transition: transition, duration: 1.5 }}
              src={WomanImg}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
