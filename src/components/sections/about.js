import React from "react";
import { StaticImage } from "gatsby-plugin-image"; // this is for image in any component not pages
import { skills } from "../../config";
import Icon from "../icons/Icon";

export default function About() {
  return (
    <section id="about" className="pt-20">
      <h2>Who is she?</h2>
      <div className="md:flex md:justify-between">
        <div className="mb-8 md:w-1/2 md:mr-16">
          <div className="mb-8">
            <p>
              Hello! My name is Fumina. this is first text t is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English.
            </p>
            <p>
              this is second text is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="w-1/2 grid grid-cols-2 gap-4 text-xs font-mono">
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
              width={500}
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
