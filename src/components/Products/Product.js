import React from 'react'
import Image from 'gatsby-image'
import styles from "../../sass/product.module.scss"
import {FaCannabis} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Product = ({proizvod}) => {
  const {ime,slug,images,kategorija} = proizvod
  let glavnaSlika = images[0].fluid

    return (
        <article className={styles.tour}>
          <div className={styles.imgContainer}>
            <Image fluid={glavnaSlika} className={styles.img} alt="jedan proizvod" />
            <AniLink fade className={styles.link} to={`/proizvodi/${slug}`}>Detaljnije</AniLink>
          </div>
<div className={styles.footer}>
  <h3>{ime}</h3>
  
  <div className={styles.info}>
    
    <h4 className={styles.country}>
      <FaCannabis className={styles.icon}/> {kategorija}</h4>
      <div className={styles.details}>
    <h6>Premium</h6>
      </div>
  </div>
 
</div>



        </article>
    )
}

export default Product
