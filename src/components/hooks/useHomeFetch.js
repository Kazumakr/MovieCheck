import { useState, useEffect } from "react";

export const useHomeFetch = (apiurl) => {
	const [state, setState] = useState({ movies: [] });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchMovies = async (endpoint) => {
		setError(false);
		setLoading(true);

		const isLoadMore = endpoint.search("page");

		try {
			const result = await (await fetch(endpoint)).json();
			setState((prev) => ({
				...prev,
				movies:
					isLoadMore !== -1
						? [...prev.movies, ...result.results]
						: [...result.results],
				heroImage: prev.heroImage || result.results[0],
				currentPage: result.page,
				totalPages: result.total_pages,
			}));
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchMovies(apiurl);
	}, [apiurl]);

	return [{ state, loading, error }, fetchMovies];
};
