import React from 'react'
import style from '../sass/services.module.scss'
import servicesAbouts from '../constants/servicesAbouts'

const servicesAbout = () => {
    return (
        <div className={`container`}>
            {
                servicesAbouts.map((item,index)=>{
                    return <article key={index} className={`d-inline-block col-sm-12 col-md-4 col-lg-4 ${style.service}`}>
                        <img className="img-fluid" src={item.icon}></img>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </article>
                })
            }
        </div>
    )
}

export default servicesAbout