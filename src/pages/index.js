import React from "react";

import Layout from "../components/Layout";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Cursor from "../utils/Cursor";

const IndexPage = () => {
  return (
    <Layout>
      <Cursor />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
