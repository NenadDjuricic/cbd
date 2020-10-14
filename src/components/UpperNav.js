import React from 'react'
import styles from '../sass/UpperNav.module.scss'
import social from '../constants/social-icons'


const UpperNav = () => {
    return (
        <div style={{borderBottom:'1px solid #3fd0d4'}} className="container-fluid d-lg-flex d-md-none d-sm-none d-none justify-content-center">
    <div className="row align-content-center" style={{height:'30px'}}>
      
        <p className="text-monospace my-auto" href="#"><small>Od 24.10. naše proizvode možete kupiti u svim ekskluzivnim Lilly drogerijama.
           </small></p>
      
      
    <div className={`${styles.customUpper} ${styles.navSocialLinks}`}>
          {social.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                {item.icon}
              </a>
            )
          })}
        </div>
        
        </div>
  </div>
    )
}

export default UpperNav
