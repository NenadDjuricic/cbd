import React from 'react'
import styles from "../../sass/blogCard.module.scss"
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
const BlogCard = ({blog}) => {
    const {slug,naslov,image,vreme} = blog
    return (
        <article className={styles.blog}>
            <div className={styles.imgContainer}>
                <Image fluid={image.fluid} className={styles.img} alt="jedna vest"/>
                <AniLink fade className={styles.link} to={`/blog/${slug}`}>
                    Vise
                </AniLink>
                <h6 className={styles.date}> {vreme}</h6>
                <div className={styles.footer}>
                    <h5>
                        {naslov}
                    </h5>
                </div>
            </div>
        </article>
    )
}

export default BlogCard
