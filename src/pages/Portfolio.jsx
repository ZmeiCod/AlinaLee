import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/portfolio/1.png";
import Image2 from "../assets/portfolio/2.png";
import Image3 from "../assets/portfolio/3.png";
import Image4 from "../assets/portfolio/4.png";

const images = [Image1, Image2, Image3, Image4];

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container mx-auto h-full flex items-center justify-center relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="h1">Галерея</h1>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Написать мне
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:gap-2">
            {images.map((image, index) => (
              <div
                className="max-w-[250px] lg:max-w-[320px] h-[160px] lg:h-[220px] bg-accent overflow-hidden"
                key={index}
              >
                <div>
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
