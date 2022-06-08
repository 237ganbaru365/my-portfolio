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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fumina Yoshimura Portfolio Site`,
        short_name: `Fumina Web`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
