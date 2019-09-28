import React, { Component } from 'react';
import Card from "./Card.js";
import products from "../library.js";
import './CardCont.css';

class CardCont extends Component {
	constructor() {
		super();
		this.state = {
			product: products
		}
	}

	render() {
		return (
			<div className="CardCont container">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<h1 className="title">Products</h1>
						</div>
						<div className="row">

							{this.state.product.map(element => {
								return (
									<Card title={element.title} img={require(`../img/${element.id}.jpg`)} price={element.price} id={element.id} key={element.id} stars={element.stars} />
								)
							})}

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardCont;