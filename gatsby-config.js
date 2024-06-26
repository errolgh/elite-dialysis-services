/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Elite Dialysis Service LTD`,
    description: `Elite Dialysis Center, located in 55 Manchester Avenue, Lot 8 Fearon's Place, May Pen, Jamaica, is a dialysis center that specializes in Hemodialysis, an essential lifeline treatment for patients with end-stage renal disease (ESRD)`,
    author: `Spectral Web Designs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -30
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hands-and-box.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap`,
          },
          {
            name: `dmsDisplay`,
            file: `https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap`,
          },
          {
            name: `Oswald`,
            file: `https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap`,
          },
        ],
      },
    },
  ],
}
