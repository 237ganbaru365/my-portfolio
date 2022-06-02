import * as React from "react";

import Layout from "../components/layout";
import About from "../components/sections/about";
import Hero from "../components/sections/hero";

//Projects
//Contact

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;
