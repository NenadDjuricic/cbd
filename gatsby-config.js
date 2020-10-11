require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "Crystalweed Srbija",
    description:"Najbolji proizvodi od cistog cbd-a, cbd kreme, cbd cajevi. Prirodna medicina, zategnite lice i osecajte se srecno i ispunjeno uz najbolje CBD proizvode.",
    author: "Nenad Djuricic",
    image:"/CbdProducts.jpeg",
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options:{
      name:'images',
      path: `${__dirname}/src/images`,
    },
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
 