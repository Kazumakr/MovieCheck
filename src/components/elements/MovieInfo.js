import React from "react";
import PropTypes from "prop-types";

import NoImage_movie from "../images/NoImage_movie.png";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import MovieThumb from "./MovieThumb";

import { StyledMovieInfo } from "../styles/StyledMovieInfo";

const MovieInfo = ({ movie }) => (
	<StyledMovieInfo backdrop={movie.backdrop_path}>
		<div className="movieinfo-content">
			<div className="movieinfo-thumb">
				<MovieThumb
					image={
						movie.poster_path
							? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
							: NoImage_movie
					}
					clickable={false}
				/>
			</div>
			<div className="movieinfo-text">
				<h1>{movie.title}</h1>
				<h3>PLOT</h3>
				<p>{movie.overview}</p>

				<div className="rating-director">
					<div>
						<h3>IMDB RATING</h3>
						<div className="score">{movie.vote_average}</div>
					</div>
					<div>
						<h3>RATE COUNT</h3>
						<div>{movie.vote_count}</div>
					</div>
					<div className="director">
						<h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
						{movie.directors.map((element) => (
							<p key={element.credit_id}>{element.name}</p>
						))}
					</div>
					<div>
						<h3>RELEASE DATE</h3>
						<p>{movie.release_date}</p>
					</div>
					<div>
						<h3>LANGUAGE</h3>
						<p>{movie.original_language}</p>
					</div>
				</div>
			</div>
		</div>
	</StyledMovieInfo>
);

MovieInfo.propTypes = {
	movie: PropTypes.object,
};
export default MovieInfo;
