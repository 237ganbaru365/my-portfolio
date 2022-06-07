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
  // console.log(projects);

  return (
    <section id="projects" className="pt-20">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, i) => {
          const { node } = project;
          const { frontmatter } = node;
          const { external, title, tech, github, description, featuredImage } =
            frontmatter;
          const image = getImage(featuredImage.childImageSharp);

          return (
            <li key={i} className="mb-24 w-full">
              <div>
                <h4>Personal Project</h4>
                <h3 className="mb-4">
                  <a href={external}>{title}</a>
                </h3>
                <ul className="flex flex-wrap mb-4 text-sm text-gray-800">
                  {tech.map((techItem, i) => (
                    <li
                      key={i}
                      className="mr-4 bg-slate-100 p-2 rounded-md mb-2"
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>
                <div className="mb-4 rounded-sm md:w-3/4">
                  <a href={external ? external : github ? github : "#"}>
                    <GatsbyImage image={image} alt={title} />
                  </a>
                </div>
                <div className="mb-4">{description}</div>

                <div className="FlexAlign mb-4">
                  <a href={github} className="mr-2 Hover">
                    <Icon name={"GitHub"} />
                  </a>
                  <a href={external} className="Hover">
                    <Icon name={"External"} />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
