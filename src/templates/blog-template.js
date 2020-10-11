import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../sass/single-blog.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const Blog = ({data}) => {
    const {naslov,
    vreme,
  kratakTekst:kratakTekst,
  velikiTekst:{json}} = data.post
  console.log(json)
 const options ={
     renderNode:{
         "embedded-asset-block":(node)=>{
             return <div className="rick">
             <img width="400" data-aos="fade-in" src={node.data.target.fields.file["en-US"].url}></img>
             </div>
         }
     }
 }
    return (
        <Layout>
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
  }
`
export default Blog
