import React from "react";
import { email } from "../../config";

export default function Contact() {
  return (
    <section id="contact" className="mt-16">
      <h2>Reach Me</h2>
      <p>
        <a href="tel://12369795203">+1 (236) 979 5203</a>
      </p>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </section>
  );
}
