import React from "react";
// import { StaticImage } from "gatsby-plugin-image"; // this is for image in any component not pages
import { skills } from "../../config";
import Icon from "../icons/Icon";

export default function About() {
  return (
    <section id="about" className="text-center">
      <h2 className="text-2xl">About Me</h2>
      <div className="mt-8">
        <div>
          <p>Hello! My name is Fumina. this is first text</p>
          <p>this is second text</p>
          <p>this is third text</p>
        </div>
        <ul className="w-1/2 mx-auto mt-4 grid grid-cols-2 gap-4 text-sm">
          {skills.map((skill, key) => (
            <li key={key} className="FlexAlign">
              <Icon name={"ArrowRight"} className="mr-5" />
              {skill}
            </li>
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
