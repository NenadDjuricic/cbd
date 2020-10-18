import React from 'react'
import Title from "../Tittle"
import styles from "../../sass/contact.module.scss"
export const Contact = () => {
    return (
        <section className={styles.contact}>
      <Title title="Kontaktirajte" subtitle="nas" />
      <div className={styles.center}>
        <form action="https://formspree.io/nenaddjuricic93@gmail.com" method="POST" className={styles.form}>
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
      </div>
    </section>
    )
}
export default Contact