import React from "react";
import Footer from "./Footer";

import Head from "./Head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
