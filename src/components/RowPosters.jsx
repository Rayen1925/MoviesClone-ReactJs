import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getpopular, gettoprated, gettrending, selectpopular, selecttoprated, selecttrending } from '../features/movies/moviesSlice';
import MoviePoster from './MoviePoster';
import '../assets/css/rowposters.css'
import { Pagination } from 'antd';
//import axios from 'axios';



function RowPosters({ category, title }) {

    const numEachPage = 5
    const dispatch = useDispatch();

    const trending = useSelector(selecttrending)
    const popular = useSelector(selectpopular)
    const toprated = useSelector(selecttoprated)

    const [movies, setmovies] = useState([]);

    const [minValue, setminValue] = useState(0);
    const [maxValue, setmaxValue] = useState(5);

    useEffect(() => {
        dispatch(gettrending());
        dispatch(getpopular())
        dispatch(gettoprated())
    }, []);

    useEffect(() => {
        
        switch (category) {
            case 'trending': setmovies(trending); break;
            case 'popular': ; setmovies(popular); break;
            case 'toprated': ; setmovies(toprated); break;

            default: break;
        }
    }, [trending, popular, toprated]);

    const handleChange = (value) => {
        setmaxValue(value * numEachPage)
        setminValue((value - 1) * numEachPage)
    };

    return (
        <div style={{padding:"20px"}}>
           { movies && <><h3>{title}</h3>
            <div style={{ display: "flex", flexDirection: "column" }} >
                <div style={{ display: "flex" }} >
                    {movies &&
                        movies.length > 0 &&
                        movies.slice(minValue, maxValue).map(m => (
                            <MoviePoster movie={m} />
                        ))}
                </div>

                <Pagination
                style={{margin:"10px"}}
                    defaultCurrent={1}
                    defaultPageSize={numEachPage}
                    onChange={handleChange}
                    total={movies.length} 
                />
            </div></>}

        
        </div>
    )
}


export default RowPosters