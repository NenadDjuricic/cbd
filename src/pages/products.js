import React from "react"
import Layout from '../components/Layout'
import {graphql} from "gatsby"
import { Helmet } from 'react-helmet'
import {SviProizvodi} from "../components/Products/SviProizvodi"
const products = ({data}) => (
  <>
     <Layout>
     <Helmet htmlAttributes={{lang: "rs"}} title={"Crystalweed Srbija | Proizvodi"}>
       <meta name="description" content={data.site.siteMetadata.description} />
       <meta name="keywords" content={data.site.siteMetadata.keywords} />
       <meta property="og:title" content={data.site.siteMetadata.title} />
       <meta property="og:type" content="website" />
       <meta property="og:description" content={data.site.siteMetadata.description} />
       <meta property="og:image" content={data.site.siteMetadata.image} />
       <meta property="og:locale" content="sr_RS" />
       <meta property="og:url" content={data.site.siteMetadata.url} />
       <link rel="canonical" href={data.site.siteMetadata.url} />
     </Helmet>
   <SviProizvodi />
  </Layout>
  </>
)
export const query = graphql`
query{
  site{
    siteMetadata{
      description
      keywords
      title
      url
      author
      description
      image
    }
  }
  
}
`
export default products
