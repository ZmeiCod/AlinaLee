import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WomanImg from "../assets/about/woman.png";
import { transition } from "../hooks/transitions";
import { CursorContext } from "../hooks/cursorContext";

export default function About() {
  const { mouseEnterHandler, mouseLeaveHandler } = React.useContext(CursorContext)

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
      className="section"
      id="about"
    >
      <div  className="container mx-auto h-full relative">
        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-0 overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              src={WomanImg}
              alt="Фотограф"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
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
            <Link to={"/portfolio"} className="btn">
              Мои работы
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
