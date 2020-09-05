import React from "react"
import Tittle from './Tittle'
import styles from '../sass/about.module.scss'
import {Link} from 'gatsby'
import img from '../images/pexels-aphiwat-chuangchoem-2178565.jpg'
const about = () => (
  <section className={styles.about}>
   <Tittle title="O" subtitle="nama"/>
   <div className={`${styles.aboutCenter}`}>
     <article className={styles.aboutImg}>
       <div className={styles.imgContainer}>
         <img src={img} alt="aboutSlika"></img>
        </div> 
           
      </article>
      <article className={styles.aboutInfo}>
        <h4>Posao rodjen <br></br>iz strasti</h4>
        <p>Vec vise od 5 godina u ovom sektroru pazljivo biramo materijale za svoje proizvode kako bismo garantovali maksimalnu vrednost uz najvise iskustvo.</p>
        <p>Iz tog razloga,visok kvalitet,pouzdanost i profesionalnost su karakteristike po kojima zelimo da ostanemo upamceni!</p>
      <Link to="/aboutPage"><button type="button" className="btn-primary">Vise o nama</button></Link>
      </article>
   </div>
  </section>
)

export default about
