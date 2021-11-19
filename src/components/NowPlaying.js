import React, { useState } from "react";
import {
	NOW_PLAYING_URL,
	SEARCH_BASE_URL,
	POSTER_SIZE,
	BACKDROP_SIZE,
	IMAGE_BASE_URL,
} from "../config";

import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

import { useHomeFetch } from "./hooks/useHomeFetch";
import NoImage_movie from "./images/NoImage_movie.png";

const NowPlaying = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [
		{
			state: { movies, currentPage, totalPages, heroImage },
			loading,
			error,
		},
		fetchMovies,
	] = useHomeFetch(NOW_PLAYING_URL);

	const searchMovies = (search) => {
		const endpoint = search ? SEARCH_BASE_URL + search : NOW_PLAYING_URL;

		setSearchTerm(search);
		fetchMovies(endpoint);
	};

	const LoadMoreMovies = () => {
		const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
			currentPage + 1
		}`;

		const NowPlayingEndpoint = `${NOW_PLAYING_URL}&page=${currentPage + 1}`;

		const endpoint = searchTerm ? searchEndpoint : NowPlayingEndpoint;
		fetchMovies(endpoint);
	};

	if (error) return <div>Something went wrong</div>;
	if (!movies[0]) return <Spinner />;

	return (
		<>
			{!searchTerm && (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
					title={heroImage.original_title}
					text={heroImage.overview}
				/>
			)}

			<SearchBar callback={searchMovies} />
			<Grid header="Now Playing In Theatres">
				{movies.map((movie) => (
					<MovieThumb
						key={movie.id}
						clickable
						image={
							movie.poster_path
								? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
								: NoImage_movie
						}
						movieId={movie.id}
						movieName={movie.original_title}
					/>
				))}
			</Grid>

			{loading && <Spinner />}
			{currentPage < totalPages && !loading && (
				<LoadMoreBtn text="Load More" callback={LoadMoreMovies} />
			)}
		</>
	);
};
export default NowPlaying;
