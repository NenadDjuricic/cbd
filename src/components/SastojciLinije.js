import React from 'react'
import {Link} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
const SastojciLinije = () => {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-12 align-text-bottom mt-5">
            <h6>Beauty BIO linija sadrzi:</h6>
            <ul className="list-group">
            <li className="list-group-item">&#8270; Energizirajuca krema za telo sa CBD-om</li>
            <AniLink fade to="/proizvodi/krema-za-lice-protiv-starenja" duration={0.5} className="text-body hoverEfekat text-decoration-none"><li className="list-group-item">&#8270; Krema za lice protiv starenja sa CBD-om</li></AniLink>
            <AniLink fade to="/proizvodi/hidratantna-organska-krema" duration={0.5} className="hoverEfekat text-decoration-none text-body"><li className="list-group-item">&#8270; Hidratantna krema za ruke sa CBD-om</li></AniLink>
            <AniLink fade to="/proizvodi/balzam-za-usne" duration={0.5} className="hoverEfekat text-decoration-none text-body"><li className="list-group-item">&#8270; CBD balzam za usne</li></AniLink>
            <li className="list-group-item">&#8270; Kupovinom kompleta dobijate Beauty by Crystalweed® poklon kutiju</li>
            </ul>

        </div>
    )
}

export default SastojciLinije
