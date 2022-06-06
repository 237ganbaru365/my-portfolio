import React from "react";
import { Link } from "gatsby";
import { navLinks } from "../config";
import ModalMenu from "./ModalMenu";

export default function Navbar() {
  const { menu, button } = navLinks;
  return (
    <header className="text-gray-900">
      <nav className="NavBase">
        <div className="Hover">
          <Link to="/">Logo to Home</Link>
        </div>
        <div className="hidden md:FlexAlign">
          <ul className="flex mr-2">
            {menu.map(({ name, url }, key) => {
              return (
                <li key={key} className="mr-5 Hover">
                  <Link to={url}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="bg-gray-600 text-white py-2 px-4  rounded-md Hover">
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
