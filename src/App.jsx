import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import { CursorContext } from "./hooks/cursorContext.js";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const { cursorVariants, cursorBG } = React.useContext(CursorContext);

  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
      <motion.div
        variants={cursorVariants}
        animate={
          cursorBG
        }
        className="w-8 h-8 bg-black fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </>
  );
}
