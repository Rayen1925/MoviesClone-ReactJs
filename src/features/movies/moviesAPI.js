import axios from '../axios'


import {requests} from '../requests' 

export function getTrandingMovies(){
    return axios.get(requests.fetchTrending)
    .then(res => {
        return res
    })
    .catch(err => {
        return err
    })
}

export function getPopularMovies(){
    return axios.get(requests.fetchPopular)
    .then(res => {
        return res
    })
    .catch(err => {
        return err
    })
}

export function getTopRatedMovies() {
  return axios
    .get(requests.fetchTopRated)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}




export function getmoviebyid(id) {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/"+id+"?api_key=d58cff031c8b9cc6728ea09a29831382&language=en-US"
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
