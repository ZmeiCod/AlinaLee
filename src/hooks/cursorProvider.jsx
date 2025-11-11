import React from "react";
import { CursorContext } from "./cursorContext";

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = React.useState('default');

  const cursorVariants = {
    default: {
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 75, // Одинарный радиус для центрирования
      y: cursorPos.y - 75, // Одинарный радиус для центрирования
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  React.useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const mouseEnterHandler = () => setCursorBG('text');
  const mouseLeaveHandler = () => setCursorBG('default');

  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
