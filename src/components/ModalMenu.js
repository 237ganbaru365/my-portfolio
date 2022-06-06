import React from "react";
import { Link } from "gatsby";

import { navLinks } from "../config";

function ModalMenu() {
  const { menu, button } = navLinks;
  return (
    <section className="bg-gray-300 absolute top-0 right-0 w-2/3 h-screen FlexCenter z-30">
      <div className="w-full my-0 mx-auto text-center p-8">
        <ul className="mb-8">
          {menu.map(({ name, url }, key) => {
            return (
              <li key={key} className="Hover mb-2">
                <Link to={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="w-2/5 mx-auto bg-gray-600 text-white py-2 px-4  rounded-md Hover">
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
    </section>
  );
}

export default ModalMenu;
