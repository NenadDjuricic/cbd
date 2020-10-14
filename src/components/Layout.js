import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import UpperNav from './UpperNav'
import "bootstrap/dist/css/bootstrap.min.css"
import '../sass/global.scss';
const Layout = ({children}) => {
    return (
        <main>
        <UpperNav />
        <Navbar />
        {children}
        <Footer />
        </main>
    )
}

export default Layout
