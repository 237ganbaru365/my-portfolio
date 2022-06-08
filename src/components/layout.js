import React from "react";
import Footer from "./Footer";

import Head from "./Head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      <main className="max-w-[90%] mx-auto mb-16 relative md:max-w-[80%]">
        {children}
      </main>
      <Footer />
    </>
  );
}
