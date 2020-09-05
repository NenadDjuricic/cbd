import React from 'react'
import styles from '../sass/banner.module.scss'
const Banner = ({title,info,subInfo,children}) => {
    return (
        <div className={styles.banner}>
            <h1>{title}</h1>
            <p>{info}</p>
            <p>{subInfo}</p>
            {children}
        </div>
    )
}

export default Banner
