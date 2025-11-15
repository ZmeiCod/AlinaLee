import React from "react";
import { CursorContext } from "./cursorContext";

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = React.useState('default');
  const [isMobile, setIsMobile] = React.useState(false);

  const cursorVariants = {
    default: {
      backgroundColor: "#0e1112",
      x: cursorPos.x - 20,
      y: cursorPos.y - 20,
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 75,
      y: cursorPos.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      // Прозрачный и по нулям
      width: "0",
      height: "0",
      x: 0,
      y: 0,
      backgroundColor: "transparent",
    }
  };

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  React.useEffect(() => {
    if (!isMobile) {
      const move = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", move);

      return () => {
        window.removeEventListener("mousemove", move);
      };
    }
  }, [isMobile]);

  const mouseEnterHandler = () => {
    if (!isMobile) {
      setCursorBG('text');
    }
  };

  const mouseLeaveHandler = () => {
    if (!isMobile) {
      setCursorBG('default');
    }
  };

  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
 