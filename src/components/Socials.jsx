import React from "react";
import { ImInstagram, ImTelegram } from "react-icons/im";

export default function Socials() {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
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
