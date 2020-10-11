import React from 'react'
import Product from '../Products/Product'
import Title from '../Tittle'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../../sass/istaknutiProizvodi.module.scss'
import { useStaticQuery, graphql } from "gatsby"
const getProducts = graphql`
query{
    kozmetika:allContentfulProizvod(filter:{kategorija:{eq:"Set"}}){
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
                src
              }
            }
          }
        }
      }
      kozmetika2:allContentfulProizvod(filter:{kategorija:{eq:"Krema"}}){
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
                src
              }
            }
          }
        }
      }
}
`
const IstaknutiProizvodi = () => {
    const response = useStaticQuery(getProducts)
    const proizvodi = response.istaknutiProizvodi.edges;
    
    return (
        <div> <section className={styles.tours}>
         <Title title="Istaknuti proizvodi" subtitle="Najprodavaniji"/>
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
    )
}

export default IstaknutiProizvodi