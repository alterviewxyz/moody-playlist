module.exports = {
  siteMetadata: {
    title: "Moody Home",
    description: "Moody Website",
    author: "Moody Author",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    // "gatsby-plugin-react-helmet",
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "category",
        ],
        queryLimit: 1000,
      },
    },
    // "gatsby-transformer-sharp",
    // "gatsby-plugin-sharp",
    // "gatsby-plugin-offline",
  ],
}