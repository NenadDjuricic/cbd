import React,{useState} from 'react'
import stil from '../sass/progres.scss'
import img5 from "../images/cannabis-test.png"
import img4 from "../images/marijuana.png"
import img3 from "../images/legal.png"
const Progress = ({done,props,text}) => {
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
            <div className="col-4 service">
            <img className={`img-fluid `} src={img3}></img>
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}% Legalno
			</div>
            
		</div>
        </div>
       
        <div className="col-4 service">
		<img className={`img-fluid `} src={img4}></img>
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}% Organski
			</div>
		</div>
        </div>
        <div className="col-4 service">
		<img className={`img-fluid `} src={img5}></img>
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
