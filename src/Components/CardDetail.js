import React, { Component } from 'react';
import products from "../library";
import Banner from "./Banner.js";
import './CardDetail.css';

class CardDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: products[(this.props.match.params.id) - 1]
		}
	}

	render() {
		const stars = [];

		for (var i = 0; i < this.state.info.stars; i++) {
			stars.push(<i className="fa fa-star"></i>);
		}

		return (
			<div>

				<div className="CardDetail container">
					<div className="row">
						<div className="col-md-12 margin-topp text-center">
							<Banner title={this.state.info.title} />
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-6 text-center">
							<img className="hoverc img-responsive" src={require(`../img/${this.state.info.id}.jpg`)} alt="img" />
						</div>
						<div className="col-md-6 col-sm-6 info-cont">
							<h2 className="price text-center">{this.state.info.price}</h2>
							<h2 className="title">{this.state.info.title}</h2>
							<p className="text-center stars">{stars}</p>
							<p>{this.state.info.desc}</p>
							<button className="button btn btn-block home">Add to card</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardDetail;