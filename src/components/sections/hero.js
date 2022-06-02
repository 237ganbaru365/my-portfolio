import React from "react";
import { socialMedia } from "../../config";

export default function Hero() {
  return (
    <section style={{ width: "100%", height: "100vh" }}>
      <div>
        <h1>Hi, my name is</h1>
        <h2>Fumina Yoshimura.</h2>
        <h3>A front-end developer based in Vancouver.</h3>
      </div>
      <ul>
        {socialMedia.map((socialMediaItem, key) => (
          <li key={key}>
            <a href={socialMediaItem.url} target="_blank">
              {socialMediaItem.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
