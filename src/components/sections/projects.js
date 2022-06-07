import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Icon from "../icons/Icon";

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        nodes {
          frontmatter {
            external
            github
            tech
            title
            cover
            description
          }
        }
      }
    }
  `);

  const projects = data.allMdx.nodes;

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, i) => {
          const { frontmatter } = project;
          const { external, title, tech, github, cover, description } =
            frontmatter;
          console.log(cover);
          // const image = getImage(cover);

          return (
            <li key={i} className="mb-8">
              <div className="project-image">
                <a href={external ? external : github ? github : "#"}>
                  {/* <GatsbyImage image={image} alt={title} /> */}
                </a>
              </div>
              <div className="project-content bg-slate-200 p-6 rounded-md">
                <div>
                  <h4>Personal Project</h4>
                  <h3>
                    <a href={external}>{title}</a>
                  </h3>
                  <div className="mb-4">{description}</div>
                  <ul className="flex flex-wrap mb-4 text-xs text-gray-800">
                    {tech.map((techItem, i) => (
                      <li key={i} className="mr-4">
                        {techItem}
                      </li>
                    ))}
                  </ul>

                  <div className="FlexAlign mb-4">
                    <a href={github} className="mr-2 Hover">
                      <Icon name={"GitHub"} />
                    </a>
                    <a href={external} className="Hover">
                      <Icon name={"External"} />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
