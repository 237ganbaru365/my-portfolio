module.exports = {
  siteMetadata: {
    title: `Fumina Yoshimura`,
    description:
      "Fumina Yoshimura is a front-end developer who is motivated to make an impact on the user digital experience.",
    siteUrl: `https://yoshimurafumina.vercel.app`, // No trailing slash allowed!
    image: "/ogTest.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `project`,
        path: `${__dirname}/content/project`,
      },
    },
    `gatsby-plugin-mdx`, // Needed for dynamic images
  ],
};
