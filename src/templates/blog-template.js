import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../sass/single-blog.module.scss"
import {Link} from "gatsby"
import SEO from "../components/SEO"
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
           <SEO title="Crystalweed Srbija | Novosti" description="Crystalweed je kompanija koja se bavi prodajom legalnih proizvoda na bazi CBD-a" ></SEO>
        <section className={styles.blog}>
          <div className={styles.center}>
            <h1>{naslov}</h1>
            <h4>Objavljeno : {vreme}</h4>
            {kratakTekst.kratakTekst}
  <article className={styles.post}>
      {documentToReactComponents(json,options)}
  </article>
            <Link fade to="/novosti" className="btn-primary">
              Sve novosti
            </Link>
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
