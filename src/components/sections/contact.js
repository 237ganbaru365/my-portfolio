import React from "react";
import { email, socialMedia } from "../../config";
import Icon from "../icons/Icon";

export default function Contact() {
  return (
    <section id="contact" className="text-center">
      <h2>Reach Me</h2>
      <p className="Hover">
        <a href="tel://12369795203">+1 (236) 979 5203</a>
      </p>
      <p className="Hover mb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <ul className="FlexJustify text-gray-800">
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
    </section>
  );
}
