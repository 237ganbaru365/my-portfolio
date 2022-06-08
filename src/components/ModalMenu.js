import React, { useState } from "react";
import { Link } from "gatsby";
import { navLinks } from "../config";
import Hamberger from "./icons/Hamberger";

function ModalMenu() {
  const { menu, button } = navLinks;
  const [isOpen, setIsOpen] = useState(false);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamberger menuHandler={menuHandler} isOpen={isOpen} />
      {isOpen && (
        <div className="bg-gray-300 fixed top-0 right-0 w-2/3 h-screen FlexCenter font-mono">
          <div className="w-full my-0 mx-auto text-center p-8">
            <ul className="mb-8">
              {menu.map(({ name, url }, key) => {
                return (
                  <li key={key} className="Hover mb-2 text-2xl text-gray-700">
                    <Link to={url}>{name}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="w-2/5 mx-auto text-gray-800 py-2 px-4 rounded-md border-2 border-gray-800 hover:bg-gray-700 transition transform hover:text-gray-200">
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
        </div>
      )}
    </>
  );
}

export default ModalMenu;
