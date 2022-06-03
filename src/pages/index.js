import * as React from "react";

import Layout from "../components/Layout";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

//Contact

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
