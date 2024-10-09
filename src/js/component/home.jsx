import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx"

import Jumbotron from "./jumbotron.jsx"

import Card from "./card.jsx"

import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div class="container">
				<div class="row">
					<div class="col-sm">
						<Card />
					</div>
					<div class="col-sm">
						<Card />
					</div>
					<div class="col-sm">
						<Card />
					</div>
					<div class="col-sm">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
