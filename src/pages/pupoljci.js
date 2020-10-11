import React from 'react'
import Product from '../components/Products/Product'
import styles from "../sass/pupoljci.module.scss"
import Layout from "../components/Layout"
import Title from "../components/Tittle"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {graphql } from "gatsby"
export const getProducts = graphql`
query{
    pupoljci:allContentfulProizvod(filter:{kategorija:{eq:"Pupoljci"}}){
      edges{
        node{
          ime
          slug 
          contentful_id
          kategorija
          opis{
            opis
          }
         images{
            fluid{
                ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const pupoljci = ({data}) => {
    const proizvodi = data.pupoljci.edges;
    console.log(proizvodi);
    return (
        <Layout>
        <div> 
        <Title title="Nasi" subtitle="Pupoljci" />
        <section className={styles.tours}>
        <div className={styles.center}>
        {proizvodi.map(({node})=> {
           return <Product key={node.contentful_id} proizvod={node} />
         } )}
         </div>
        <AniLink fade to="/products" className="btn-primary">
          Svi proizvodi
        </AniLink>
      </section> 
        </div>
        </Layout>
    )
}

export default pupoljci
