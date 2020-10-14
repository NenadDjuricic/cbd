import React from 'react'
import style from '../sass/services.module.scss'
import servicess from '../constants/services'

const services = () => {
    return (
        <div className={`container`}>
            {
                servicess.map((item,index)=>{
                    return <article key={index} className={`d-inline-block col-sm-12 col-md-4 col-lg-4 ${style.service}`}>
                        <img className="img-fluid" src={item.icon} alt="services"></img>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </article>
                })
            }
        </div>
    )
}

export default services
