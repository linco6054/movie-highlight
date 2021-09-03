const API_KEY = process.env.API_KEY;

export default {
  ftchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  },
  ftchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  },
  ftchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with`,
  },
  ftchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&language=en-us`,
  },
  ftchComedyMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&language=en-us`,
  },
  ftchComedyMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&language=en-us`,
  },
};
