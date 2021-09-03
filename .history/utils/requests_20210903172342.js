const API_KEY = process.env.API_KEY;

export default {
  ftchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${}`,
  },
};
