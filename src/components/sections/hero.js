import React from "react";
import { socialMedia } from "../../config";

export default function Hero() {
  return (
    <section className="h-screen mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-60 lg:px-8 xl:mt-60">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Hi, my name is
        </h1>
        <h2 className="mt-3 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Fumina Yoshimura.
        </h2>
        <h3 className="mt-3 text-gray-800">
          A front-end developer based in Vancouver.
        </h3>
      </div>
      <ul className="mt-6 flex justify-center text-gray-800 lg:justify-start">
        {socialMedia.map((socialMediaItem, key) => (
          <li key={key} className="mr-5 justify-self-center">
            <a href={socialMediaItem.url} target="_blank" rel="noreferrer">
              {socialMediaItem.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
