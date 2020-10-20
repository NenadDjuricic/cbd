import React from 'react'
import Title from "../Tittle"
import styles from "../../sass/contact.module.scss"
export const Contact = () => {
    return (
        <section className={styles.contact}>
      <Title title="Kontaktirajte" subtitle="nas" />
      <div className={styles.center}>
        <form action="https://formspree.io/crystalweedsrbija@gmail.com" method="POST" className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Ime i prezime"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="Vaš email"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Odgovorićemo Vam u najbrzem mogućem roku :)"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Pošalji"
              className={styles.submit}
            />
          </div>
        </form>
        <h6 className="d-inline">Telefon:</h6><p className="d-inline">065/66-338-721</p>
        <br></br>
        <h6 className="d-inline">Uvoznik i zastupnik Crystalweed za Srbiju:</h6><p className="d-inline">Hidra Line DOO</p>
      </div>
    </section>
    )
}
export default Contact