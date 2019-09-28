import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

const Card = (props) => {
	let stars = [];

	for (var i = 0; i < props.stars; i++) {
		stars.push(<i className="fa fa-star"></i>)
	}

	return (
		<div className="col-md-4 col-sm-6 text-center hoverc">
			<Link to={`/CardDetail/${props.id}`} className="custom-letters" >
				<img src={props.img} alt="img" className="img-responsive"/>
				<h4>{props.title}</h4>
				<p className="price">{props.price} USD</p>
				<p className="stars">{stars}</p>
			</Link>
			</div>
	);
}

export default Card;