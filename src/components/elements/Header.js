import React from "react";
import { Link } from "@reach/router";

import { StyledHeader, StyledLogo } from "../styles/StyledHeader";

const Header = () => (
	<StyledHeader>
		<div className="header-content">
			<Link to="/" style={{ textDecoration: "none" }}>
				<StyledLogo>MovieCheck</StyledLogo>
			</Link>
		</div>
	</StyledHeader>
);

export default Header;
