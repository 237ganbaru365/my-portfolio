import React from "react";
import { Link } from "gatsby";

import { navLinks } from "../config";

export default function Navbar() {
  const { menu, button } = navLinks;
  return (
    <header>
      <nav className="h-16 min-w-full flex items-center justify-between fixed top-0 left-0 backdrop-filter backdrop-blur bg-white bg-opacity-80 shadow-sm z-50 px-8 lg:px-16">
        <div className="hover:text-gray-500">
          <Link to="/">Logo to Home</Link>
        </div>
        <div className="flex items-center">
          <ul className="flex mr-2">
            {menu.map(({ name, url }, key) => {
              return (
                <li key={key} className="mr-5 hover:text-gray-500">
                  <Link to={url}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="bg-gray-600 text-white py-2 px-4 hover:bg-gray-500 rounded-lg">
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
