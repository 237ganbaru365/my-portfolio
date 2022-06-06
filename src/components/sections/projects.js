import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
  console.log(projects);

  return (
    <section id="projects" className="mt-16">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, i) => {
          const { frontmatter } = project;
          const { external, title, tech, github, cover, description } =
            frontmatter;
          const image = getImage(cover);

          return (
            <li key={i}>
              <div className="project-content">
                <div>
                  <p>Personal Project</p>

                  <h3>
                    <a href={external}>{title}</a>
                  </h3>

                  <div>{description}</div>

                  <ul>
                    {tech.map((techItem, i) => (
                      <li key={i}>{techItem}</li>
                    ))}
                  </ul>

                  <div>
                    <a href={github}>Github</a>
                    <a href={external}>Site Link</a>
                  </div>
                </div>
              </div>
              <div className="project-image">
                <a href={external ? external : github ? github : "#"}>
                  <GatsbyImage image={image} alt={title} className="img" />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
