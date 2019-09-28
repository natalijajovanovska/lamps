import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<nav className="nav menu">
					<div className="container">
						<div className="row">
							<div className="col-md-10 col-md-offset-1">
								<div className="navbar-header">
									<Link to="/" className="navbar-brand display-none">
										<img src="https://cdn.shopify.com/s/files/1/1824/4681/t/3/assets/h2_logo.png?0" alt="Logo" />
									</Link>
								</div>
								
									<ul className="nav navbar-nav navbar-right">
										<li ><Link to="/" className="home">Home</Link></li>
									</ul>
								
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;