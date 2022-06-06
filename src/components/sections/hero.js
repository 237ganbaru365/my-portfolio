import React from "react";
import { socialMedia } from "../../config";
import Icon from "../icons/Icon";

export default function Hero() {
  return (
    <section className="h-screen FlexAlign relative -z-10">
      <div className="container">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Hi, my name is
          </h1>
          <h2 className="mt-3 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            Fumina Yoshimura.
          </h2>
          <h3 className="mt-3 text-gray-800">
            A front-end developer based in Vancouver.
          </h3>
        </div>
        <ul className="mt-6 FlexJustify text-gray-800 lg:justify-start">
          {socialMedia.map((socialMediaItem, key) => (
            <li
              key={key}
              className="mr-5 justify-self-center text-gray-800 Hover"
            >
              <a href={socialMediaItem.url} target="_blank" rel="noreferrer">
                <Icon name={socialMediaItem.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
