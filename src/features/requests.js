const API_KEY = "d58cff031c8b9cc6728ea09a29831382";
export const posterpath = "https://image.tmdb.org/t/p/w500";

export  const requests = {
  fetchbyid: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=d58cff031c8b9cc6728ea09a29831382&language=en-US`,
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=f434ec6d6829d4e972e871735fa7ccfa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
};


