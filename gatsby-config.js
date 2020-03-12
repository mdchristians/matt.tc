module.exports = {
  siteMetadata: {
    title: `Matt Christians`,
    description: `Frontend Software Engineer`,
    author: `@matt_christians`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [
          '.mdx', '.md',
        ],
      }
    },
    {
  	  resolve: `gatsby-theme-mdx-deck`,
  	  options: {
  	    mdx: true,
  	    contentPath: `content/decks`,
  	    basePath: `/decks`,
  	  }
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `matt-christians`,
        short_name: `matt-christians`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
