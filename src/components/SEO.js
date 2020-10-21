import React from 'react'
import {Helmet} from "react-helmet"
import {graphql, useStaticQuery} from 'gatsby'

const getData= graphql`
query{
    site{
      siteMetadata{
        siteDescription:description
        keywords
        siteTitle:title
        url
        author
        image
      }
    }
}
`
const SEO = ({title,description}) => {
    const {site} = useStaticQuery(getData);
    const {siteDescription,siteTitle,keywords,url,image,author} = site.siteMetadata
    return (
        <Helmet htmlAttributes={{lang: 'rs'}} title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description || siteDescription} />
            <meta name="image" content={image} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content="sr_RS" />
            <meta property="og:url" content={url} />
            <link rel="canonical" href={url} />
        </Helmet>
    )
}

export default SEO
