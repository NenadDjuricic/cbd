import React from 'react'
import Product from '../components/Products/Product'
import styles from "../sass/cajevi.module.scss"
import Layout from "../components/Layout"
import Title from "../components/Tittle"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {graphql } from "gatsby"
export const getProducts = graphql`
query{
    cajevi:allContentfulProizvod(filter:{kategorija:{eq:"Čaj"}}){
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

const cajevi = ({data}) => {
    const proizvodi = data.cajevi.edges;
    console.log(proizvodi);
    return (
        <Layout>
        <div> 
        <Title title="Nasi" subtitle="Cajevi" />
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

export default cajevi
