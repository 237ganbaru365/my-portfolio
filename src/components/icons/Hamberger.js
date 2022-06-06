import React from "react";

function Hamberger({ menuHandler, isOpen }) {
  return (
    <button
      onClick={menuHandler}
      className="relative md:hidden h-5 w-6 cursor-pointer z-50"
    >
      <span
        className={`${
          isOpen ? "rotate-45 top-2 w-7 transition duration-300" : "top-0 w-8"
        } h-0.5 inline-block transition-all absolute right-0 bg-gray-800`}
      ></span>
      <span
        className={`${
          isOpen ? "hidden" : "top-2 w-7"
        } h-0.5 inline-block transition-all absolute right-0 bg-gray-800`}
      ></span>
      <span
        className={`${
          isOpen ? " -rotate-45 top-2 w-7 transition duration-300" : "top-4 w-6"
        } h-0.5 inline-block transition-all absolute right-0 bg-gray-800`}
      ></span>
    </button>
  );
}

export default Hamberger;
