import React from 'react'
import '../sass/global.scss';
const SimpleHero = ({children}) => {
    return (
        <header className="defaultHero">
            {children}
        </header>
    )
}

export default SimpleHero
