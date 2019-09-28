import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar.js";
import CardCont from "./Components/CardCont.js";
import CardDetail from "./Components/CardDetail.js";
import ErrorPage from "./Components/ErrorPage.js";
import Scrolltotop from "./Components/Scrolltotop.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<Scrolltotop>
					<div>
						<Navbar />
						<Switch>
							<Route exact path="/" component={CardCont} />
							<Route exact path="/CardDetail/:id" component={CardDetail} />
							<Route component={ErrorPage} />
						</Switch>
					</div>
				</Scrolltotop>
			</Router>
		);
	}
}

export default App;
