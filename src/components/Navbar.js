import React,{useState} from 'react'
import Link from 'gatsby-link'
import styles from '../sass/navbar.module.scss'
import links from '../constants/links'
import logo from '../images/logo2.png'
import { FaAlignRight } from "react-icons/fa"; 
import { Dropdown } from 'react-bootstrap';
const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
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
                <Dropdown.Item><Link  to="/kozmetika" >Kozmetika</Link></Dropdown.Item>
                <Dropdown.Item><Link  to="/cajevi">Čajevi</Link></Dropdown.Item>
                <Dropdown.Item ><Link  to="/ulja" >Ulja</Link></Dropdown.Item>
                <Dropdown.Item ><Link  to="/pupoljci">Pupoljci</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></li>:
              <li key={index}>
                <Link  to={item.path} >{item.text}</Link>
                
              </li>
          
            )
          })}
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
