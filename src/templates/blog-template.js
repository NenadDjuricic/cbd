import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../sass/single-blog.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Helmet } from 'react-helmet'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const Blog = ({data}) => {
    const {naslov,
    vreme,
  kratakTekst,
  velikiTekst:{json}} = data.post
 const options ={
     renderNode:{
         "embedded-asset-block":(node)=>{
             return <div className="rick">
             <img width="400"  src={node.data.target.fields.file["en-US"].url} alt="blog"></img>
             </div>
         }
     }
 }
    return (
        <Layout>
          <Helmet htmlAttributes={{lang: "rs"}} title="Crystalweed Srbija | Novosti">
       <meta name="description" content={kratakTekst.kratakTekst} />
       <meta name="keywords" content={data.site.siteMetadata.keywords} />
       <meta property="og:title" content={naslov} />
       <meta property="og:type" content="website" />
       <meta property="og:description" content={data.site.siteMetadata.description} />
       <meta property="og:image" content={data.site.siteMetadata.image} />
       <meta property="og:locale" content="sr_RS" />
       <meta property="og:url" content={data.site.siteMetadata.url} />
       <link rel="canonical" href={data.site.siteMetadata.url} />
     </Helmet>
        <section className={styles.blog}>
          <div className={styles.center}>
            <h1>{naslov}</h1>
            <h4>Objavljeno : {vreme}</h4>
            {kratakTekst.kratakTekst}
  <article className={styles.post}>
      {documentToReactComponents(json,options)}
  </article>
            <AniLink fade to="/novosti" className="btn-primary">
              Sve novosti
            </AniLink>
          </div>
        </section>
      </Layout>
    )
}
export const query = graphql`
query getPost($slug: String!){
    post:contentfulBlogPost(slug:{eq: $slug}){
      naslov
      vreme(formatString: "MMMM Do YYYY", locale: "sr")
      kratakTekst{
        kratakTekst
      }
      velikiTekst{
        json
      }
    }
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
export default Blog
