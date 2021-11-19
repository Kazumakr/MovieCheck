import React from "react";
import { Link } from "@reach/router";

import { StyledNavBar } from "../styles/StyledNavBar";

const NavBar = () => (
	<StyledNavBar>
		<div className="nav-content">
			<Link to="/">
				<p>HOME</p>
			</Link>
			<Link to="/">
				<p>POPULAR</p>
			</Link>
			<Link to="/nowplaying">
				<p>NOW PLAYING</p>
			</Link>
			<Link to="/toprate">
				<p>TOP RATED</p>
			</Link>
			<Link to="/coming">
				<p>COMING SOON</p>
			</Link>
		</div>
	</StyledNavBar>
);

export default NavBar;
