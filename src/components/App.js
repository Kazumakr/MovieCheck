import React from "react";
import { Router } from "@reach/router";

import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";
import { InitialStyle } from "./styles/InitialStyle";
import NavBar from "./elements/NavBar";
import NowPlaying from "./NowPlaying";
import TopRate from "./TopRate";
import Coming from "./Coming";
import Footer from "./elements/Footer";

const App = () => (
	<>
		<Header />
		<NavBar />
		<Router>
			<Home path="/" />
			<NowPlaying path="/nowplaying" />
			<TopRate path="/toprate" />
			<Coming path="/coming" />
			<Movie path="/:movieId" />
			<NotFound default />
		</Router>
		<Footer />
		<InitialStyle />
	</>
);

export default App;
