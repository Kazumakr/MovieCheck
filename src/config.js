let date = new Date();
let formatted_date =
	date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + date.getDate();

const API_URL = "https://api.themoviedb.org/3/";
// const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
const NOW_PLAYING_URL = `${API_URL}movie/now_playing?api_key=${API_KEY}&certification_country=CA`;

const COMING_URL = `${API_URL}discover/movie?api_key=${API_KEY}&primary_release_date.gte=2021-12-01&primary_release_date.lte=${formatted_date}`;

const TOP_RATE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&certification_country=CA&certification=R&sort_by=vote_average.desc`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w500";

export {
	SEARCH_BASE_URL,
	POPULAR_BASE_URL,
	NOW_PLAYING_URL,
	TOP_RATE_URL,
	COMING_URL,
	API_URL,
	API_KEY,
	IMAGE_BASE_URL,
	BACKDROP_SIZE,
	POSTER_SIZE,
};
