import React, { useState } from "react";
import ModalMenu from "../ModalMenu";

function Hamberger() {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex justify-items-end md:hidden">
      <div className={`FlexAlign justify-between z-50`}>
        <button
          onClick={menuHandler}
          className="relative md:hidden h-5 w-6 cursor-pointer"
        >
          <span
            className={`${
              isOpen
                ? "rotate-45 top-2 w-7 transition duration-300"
                : "top-0 w-8"
            } h-0.5 inline-block transition-all absolute right-0 bg-gray-800`}
          ></span>
          <span
            className={`${
              isOpen ? "hidden" : "top-2 w-7"
            } h-0.5 inline-block transition-all absolute right-0 bg-gray-800`}
          ></span>
          <span
            className={`${
              isOpen
                ? " -rotate-45 top-2 w-7 transition duration-300"
                : "top-4 w-6"
            } h-0.5 inline-block transition-all absolute right-0 bg-gray-800`}
          ></span>
        </button>
      </div>
      {isOpen && <ModalMenu />}
    </section>
  );
}

export default Hamberger;
