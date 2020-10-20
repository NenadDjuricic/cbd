require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "Crystalweed Srbija",
    description:"CBD Srbija je kompanija koja se bavi prodajom legalnih proizvoda na bazi CBD-a",
    author: "Nenad Djuričić(Crystalweed.rs)",
    image:"/CbdProducts.jpeg",
    keywords: "cbd, gatsby, srbija, legalno",
    url: "https://www.crystalweed.rs"
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options:{
      name:'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              url
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
      }`,
      resolveSiteUrl: ({site}) => {
        //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
        return site.siteMetadata.url
      },
      serialize: ({ site, allSitePage }) =>
        allSitePage.nodes.map(node => {
          if(node.path.startsWith("/blog/")){
            return {
            url: `${site.siteMetadata.siteUrl}${node.path}`,
            changefreq: `never`,
            priority: 0.5,
          }
        }
        else{
          return {
            url: `${site.siteMetadata.siteUrl}${node.path}`,
            changefreq: `weekly`,
            priority: 0.7,
          }
        }
      })
    }
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.crystalweed.rs',
      sitemap: 'https://www.crystalweed.rs/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTUFUL_SPACE_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTUFUL_ACCES_TOKEN,
    },
  },
    'gatsby-plugin-sass','gatsby-plugin-styled-components',`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,'gatsby-plugin-transition-link',`gatsby-plugin-playground`,`gatsby-plugin-react-helmet`],
}
