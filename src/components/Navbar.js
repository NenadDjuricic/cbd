import React,{useState} from 'react'
import {Link} from 'gatsby'
import styles from '../sass/navbar.module.scss'
import links from '../constants/links'
import logo from '../images/logo2.png'
import { FaAlignRight } from "react-icons/fa"; 
import { Dropdown } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  console.log(isOpen)
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
        <img src={logo} alt="backroads logo" className={`${styles.Custom}`}/>
          <button
            type="button"
            className={styles.logoBtn}
            onClick={toggleNav}
            ><FaAlignRight className={styles.logoIcon}/>
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `align-items-center ${styles.navLinks} `
          }
        >
          
          {links.map((item, index) => {
            return (
              index === 3 ? <li className="noDisplayLi" key={index}> <Link to={item.path}><img src={logo} className={`img-fluid ${styles.logoCustom}`} alt={item.alt}/></Link> </li>:
              index === 4 ? <li className={`displayLi ${styles.navLinks}`} key={index}><Dropdown className={styles.btn}>
              <Dropdown.Toggle variant="custom" >
                {item.text}
              </Dropdown.Toggle>
            
              <Dropdown.Menu>
                <Dropdown.Item><AniLink fade to="/kozmetika" duration={0.5}>Kozmetika</AniLink></Dropdown.Item>
                <Dropdown.Item><AniLink fade to="/cajevi">Cajevi</AniLink></Dropdown.Item>
                <Dropdown.Item ><AniLink fade to="/ulja">Ulja</AniLink></Dropdown.Item>
                <Dropdown.Item ><AniLink fade to="/pupoljci">Pupoljci</AniLink></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></li>:
              <li key={index}>
                <AniLink fade to={item.path} duration={0.5}>{item.text}</AniLink>
                
              </li>
          
            )
          })}
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
