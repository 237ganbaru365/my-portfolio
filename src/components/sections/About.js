import React from "react";
import { StaticImage } from "gatsby-plugin-image"; // this is for image in any component not pages
import { skills } from "../../config";
import Icon from "../icons/Icon";

export default function About() {
  return (
    <section id="about" className="pt-20">
      <h2>Who is she?</h2>
      <div className="md:flex md:justify-between">
        <div className="mb-8 md:w-4/5 md:mr-16 lg:w-2/3">
          <div className="mb-8">
            <p>
              I am a front-end developer who is motivated to make an impact on
              the user digital experience.
            </p>
            <p>
              Experienced Web Developer working in the design and marketing
              industry in Japan. Skilled in Production Management, Web Design,
              Web Marketing, Web development and Adobe Creative Cloud.
            </p>
            <p>
              Strong engineering professional who has problem-solving skills and
              a deep understanding of web development.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="w-full grid grid-cols-2 gap-4 text-md font-mono lg:w-1/2">
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
        <div className="relative h-full">
          <div className="FlexCenter ImgHover md:flex-1 md:max-w-sm md:items-start">
            <StaticImage
              src="../../images/me.jpg"
              alt="profile"
              imgClassName="rounded-md"
              width={600}
              quality={95}
              // transformOptions={{ grayscale: true }}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          </div>
          <div className="w-full h-full border-4 rounded-md border-gray-300 absolute top-4 left-4 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
