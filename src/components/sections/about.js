import React from "react";
// import { StaticImage } from "gatsby-plugin-image"; // this is for image in any component not pages
import { skills } from "../../config";
import Icon from "../icons/Icon";

export default function About() {
  return (
    <section id="about">
      <h2 className="text-2xl font-bold">About Me</h2>
      <div className="container">
        <div className="mb-4">
          <p>Hello! My name is Fumina. this is first text </p>
          <p>this is second text</p>
          <p>this is third text</p>
        </div>
        <ul className="w-1/2 grid grid-cols-2 gap-4 text-xs">
          {skills.map((skill, key) => (
            <li key={key} className="FlexAlign">
              <span className="mr-2 text-xs">
                <Icon name={"ArrowRight"} />{" "}
              </span>
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
