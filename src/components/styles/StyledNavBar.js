import styled from "styled-components";

export const StyledNavBar = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 70px;
	background: #353535;
	color: #fff;

	.nav-content {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 20px;
		width: 100%;
		/* display: flex;
		justify-content: space-between; */

		p {
			font-family: "Abel", sans-serif;
			font-size: 22px;
			float: left;
			color: #fff;
			padding-right: 10px;
			text-decoration: none;
			margin-right: 40px;

			@media screen and (max-width: 768px) {
				font-size: 16px;
			}
		}
	}
`;
