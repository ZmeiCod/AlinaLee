import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WomanImg from "../assets/home/woman.png";
import { transition } from "../hooks/transitions";
import { CursorContext } from "../hooks/cursorContext";

export default function Home() {
  const { mouseEnterHandler, mouseLeaveHandler } = React.useContext(CursorContext)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="section"
      id="home"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={transition}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="h-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
        >
          <h1 className="h1">
            Фотограф <br /> & Монтажер
          </h1>
          <p className="text-[26px] lg:text-[36px] font-black mb-4 lg:mb-12">
            Владивосток
          </p>
          <Link to={"/about"} className="btn mb-[30px]">
            Моя историия
          </Link>
        </motion.div>
        <div className="flex justify-end max-h-96 lg:max-h-max">
          <div className="relative lg:-right-20 outline-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition}
              src={WomanImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
