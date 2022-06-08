import React from "react";
import { Link } from "gatsby";
import { navLinks } from "../config";
import ModalMenu from "./ModalMenu";

export default function Navbar() {
  const { menu, button } = navLinks;
  return (
    <header className="text-gray-900">
      <nav className="NavBase">
        <Link to="/" className="Hover Logo FlexCenter"></Link>
        <div className="hidden md:FlexAlign font-mono">
          <ul className="flex mr-2">
            {menu.map(({ name, url }, key) => {
              return (
                <li key={key} className="mr-5 Hover">
                  <Link to={url}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <div className=" text-gray-800 py-2 px-4 rounded-md border-2 border-gray-800 Hover hover:bg-gray-800 hover:text-gray-300">
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
        <ModalMenu />
      </nav>
    </header>
  );
}
