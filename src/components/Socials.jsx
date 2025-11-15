import React from "react";
import { CursorContext } from "../hooks/cursorContext";
import { ImInstagram, ImTelegram } from "react-icons/im";


export default function Socials() {
  const { mouseEnterHandler, mouseLeaveHandler } = React.useContext(CursorContext)

  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4" onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}>
        <li>
          <a href="http://instagram.com/" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://telegram.org/" target="_blank">
            <ImTelegram />
          </a>
        </li>
      </ul>
    </div>
  );
}
