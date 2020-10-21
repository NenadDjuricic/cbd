import React,{useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from "gatsby-image"
import stil from "../sass/progres.scss"

const query = graphql`
query{
  third:file(relativePath: { eq: "cannabis-test.png" }){
    childImageSharp {
      fluid(maxWidth:200, maxHeight: 200, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  second:file(relativePath: { eq: "marijuana.png" }){
    childImageSharp {
      fluid(maxWidth:200, maxHeight: 200, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  first:file(relativePath: { eq: "legal.png" }){
    childImageSharp {
      fluid(maxWidth:200, maxHeight:200, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`



const Progress = ({done,props,text}) => {
	const response = useStaticQuery(query);
	const [style, setStyle] = useState();
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            <div className="col-12 col-md-4 service">
            <Img className="imgPos" fluid={response.first.childImageSharp.fluid} alt="progress marijuana"></Img>
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}% Legalno
			</div>
            
		</div>
        </div>
       
        <div className="col-12 col-md-4  service">
		<Img className="imgPos" fluid={response.second.childImageSharp.fluid} alt="progress legal"></Img>
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}% Organski
			</div>
		</div>
        </div>
        <div className="col-12 col-md-4  service">
		<Img className="imgPos" fluid={response.third.childImageSharp.fluid} alt="progress marijuana"></Img>
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}% Testirano
			</div>
		</div>
        </div>
        </div>
        </div>
	)
}
	

export default Progress
