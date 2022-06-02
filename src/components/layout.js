import React from "react";
import Footer from "./footer";

import Head from "./head";
import Navbar from "./navbar";

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
