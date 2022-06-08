import React from "react";
import { socialMedia } from "../../config";
import Icon from "../icons/Icon";

export default function Hero() {
  return (
    <section id="top" className="h-screen FlexAlign">
      <div className="container">
        <div className="mb-6">
          <p className="text-gray-500 mb-5 font-mono">Hi, I am</p>
          <h1 className="mb-5">Fumina Yoshimura.</h1>
          <h1 className="mb-5 text-gray-500">I build things for the web.</h1>
          <p className="text-gray-800">
            A front-end developer based in Vancouver.
          </p>
        </div>
        <ul className="text-gray-800 FlexJustify justify-start">
          {socialMedia.map((socialMediaItem, key) => (
            <li
              key={key}
              className="mr-5 justify-self-center text-gray-800 Hover"
            >
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
