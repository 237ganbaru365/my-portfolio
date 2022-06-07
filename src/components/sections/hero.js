import React from "react";
import { socialMedia } from "../../config";
import Icon from "../icons/Icon";

export default function Hero() {
  return (
    <section className="h-screen FlexAlign">
      <div className="container">
        <div className="sm:text-center lg:text-left">
          <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Hi, my name is
          </p>
          <h1 className="mt-3 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            Fumina Yoshimura.
          </h1>
          <p className="mt-3 text-gray-800">
            A front-end developer based in Vancouver.
          </p>
        </div>
        <ul className="mt-6 FlexJustify text-gray-800 lg:justify-start">
          {socialMedia.map((socialMediaItem, key) => (
            <li key={key} className="mr-5 justify-self-center text-gray-800">
              <a
                href={socialMediaItem.url}
                target="_blank"
                rel="noreferrer"
                className="text-2xl"
              >
                <Icon name={socialMediaItem.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
