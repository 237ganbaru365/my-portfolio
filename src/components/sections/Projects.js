import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Icon from "../icons/Icon";

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          node {
            frontmatter {
              description
              external
              github
              tech
              title
              featuredImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allMdx.edges;

  return (
    <section id="projects" className="pt-20">
      <h2>Works</h2>
      <ul className="md:flex md:overflow-x-scroll">
        {projects.map((project, i) => {
          const { node } = project;
          const { frontmatter } = node;
          const { external, title, tech, github, description, featuredImage } =
            frontmatter;

          const image = getImage(featuredImage.childImageSharp);

          return (
            <li
              key={i}
              className="mb-10 bg-gray-300 bg-opacity-30 p-4 rounded-md md:mb-0 md:flex-none md:w-2/3 md:mr-8 md:p-8"
            >
              <h4 className="font-mono">Personal Project</h4>
              <h3 className="mb-4">
                <a href={external}>{title}</a>
              </h3>
              <ul className="flex flex-wrap mb-4 text-sm text-gray-800">
                {tech.map((techItem, i) => (
                  <li
                    key={i}
                    className="mr-4 bg-white p-2 rounded-md mb-2 font-mono"
                  >
                    {techItem}
                  </li>
                ))}
              </ul>
              <div className="mb-4 ImgHover">
                <a href={external ? external : github ? github : "#"}>
                  <GatsbyImage
                    image={image}
                    alt={title}
                    height={200}
                    imgClassName="rounded-md"
                  />
                </a>
              </div>
              <div className="mb-4">
                <p>{description}</p>
              </div>

              <div className="FlexAlign mb-4">
                <a href={github} className="mr-2 Hover text-2xl">
                  <Icon name={"GitHub"} />
                </a>
                <a href={external} className="Hover text-2xl">
                  <Icon name={"External"} />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
