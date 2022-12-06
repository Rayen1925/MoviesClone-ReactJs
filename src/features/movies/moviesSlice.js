import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTrandingMovies,getPopularMovies, getTopRatedMovies, getmoviebyid } from "./moviesAPI";

const initialState = {
  trending : [],
  popular : [],
  toprated : [],
  singlemovie : null
};


export const gettrending = createAsyncThunk(
  "movies/trending",
  async () => {
    const response = await getTrandingMovies();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const getpopular = createAsyncThunk("movies/popular", async () => {
  const response = await getPopularMovies();
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const gettoprated = createAsyncThunk("movies/toprated", async () => {
  const response = await getTopRatedMovies();
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const getbyid = createAsyncThunk("movies/byid", async (id) => {
  const response = await getmoviebyid(id);
  // The value we return becomes the `fulfilled` action payload
  return response;
});


export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},

  extraReducers: {
    [gettrending.pending]: (state, action) => {},
    [gettrending.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.trending = action.payload.data.results;
    },
    [gettrending.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [getpopular.pending]: (state, action) => {},
    [getpopular.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.popular = action.payload.data.results;
    },
    [getpopular.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [gettoprated.pending]: (state, action) => {},
    [gettoprated.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.toprated = action.payload.data.results;
    },
    [gettoprated.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [getbyid.pending]: (state, action) => {},
    [getbyid.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.singlemovie = action.payload.data;
    },
    [getbyid.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const {} = moviesSlice.actions;


export const selecttrending = (state) => state.movies.trending;
export const selectpopular = (state) => state.movies.popular;
export const selecttoprated= (state) => state.movies.toprated;
export const selectsinglemovie= (state) => state.movies.singlemovie;



export default moviesSlice.reducer;
