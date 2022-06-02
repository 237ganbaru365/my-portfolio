import React from "react";
import { Link } from "gatsby";

import { navLinks } from "../config";

export default function Navbar() {
  const { menu, button } = navLinks;
  return (
    <header>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "80%",
          margin: " 0 auto",
        }}
      >
        <div style={{ flex: 8 }}>
          <Link to="/">Logo to Home</Link>
        </div>
        <div style={{ flex: 4, display: "flex", alignItems: "center" }}>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              flex: 9,
              justifyContent: "space-around",
            }}
          >
            {menu.map(({ name, url }, key) => {
              return (
                <li key={key}>
                  <Link to={url}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <div>
            {button.useFileName ? (
              <a
                className="cta-btn"
                href={`/${button.fileName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {button.name}
              </a>
            ) : (
              <Link to={button.url}>{button.name}</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
