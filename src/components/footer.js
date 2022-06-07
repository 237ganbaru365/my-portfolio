import React from "react";

export default function Footer() {
  return (
    <footer className="h-full w-full flex items-center z-30 relative py-10 backdrop-filter backdrop-blur bg-gray-100 bg-opacity-80 text-gray-900">
      <div className="text-center mx-auto my-0">
        <small>&copy; Fumina Yoshimura 2022 / All Rights Reserved</small>
        <br />
        <small>This website is created with Gatsby and TailwindCSS</small>
      </div>
    </footer>
  );
}
