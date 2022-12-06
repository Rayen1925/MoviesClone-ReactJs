import axios from "axios";

const axiosrequest = axios.create({
    baseURL : "https://api.themoviedb.org/3",
   /*  headers:{
        "Access-Control-Allow-Origin" : "*"
    } */
})

export default axiosrequest;