import React from "react";
// import { StaticImage } from "gatsby-plugin-image"; // this is for image in any component not pages
import { skills } from "../../config";

export default function About() {
  return (
    <section id="about" className="mt-16">
      <h2>About Me</h2>
      <div>
        <div>
          <p>Hello! My name is Fumina. this is first text</p>
          <p>this is second text</p>
          <p>this is third text</p>
        </div>
        <ul>
          {skills.map((skill, key) => (
            <li key={key}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* <StaticImage /> */}
        {/* you need add own img later */}
      </div>
    </section>
  );
}
