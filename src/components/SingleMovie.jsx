import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import '../assets/css/moviesingle.css'
import { getbyid, selectsinglemovie } from '../features/movies/moviesSlice'

function SingleMovie() {

    const route = useParams()

    const dispatch= useDispatch()

    const movie = useSelector(selectsinglemovie)

    useEffect(() => {
        dispatch(getbyid(route.id))
    }, []);
    return (
        <>
        {movie && <div style={{padding:100}}>
            <div className="movie-card">
                <div className="containero">
                    <a href="#"><img style={{height:"250px"}} src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="cover" className="cover" /></a>
                        <div className="heroo" style={{ background: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`}}>
                        <div className="details">
                            <div className="title1">The Hobbit <span>PG-13</span></div>
                            <div className="title2">The Battle of the Five Armies</div>
                            <fieldset className="rating">
                                <input type="radio" id="star5" name="rating" defaultValue={5} /><label className="full" htmlFor="star5" title="Awesome - 5 stars" />
                                <input type="radio" id="star4half" name="rating" defaultValue="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars" />
                                <input type="radio" id="star4" name="rating" defaultValue={4} defaultChecked /><label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
                                <input type="radio" id="star3half" name="rating" defaultValue="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars" />
                                <input type="radio" id="star3" name="rating" defaultValue={3} /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
                                <input type="radio" id="star2half" name="rating" defaultValue="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars" />
                                <input type="radio" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
                                <input type="radio" id="star1half" name="rating" defaultValue="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars" />
                                <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
                                <input type="radio" id="starhalf" name="rating" defaultValue="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars" />
                            </fieldset>
                            <span className="likes">109 likes</span>
                        </div> {/* end details */}
                    </div> {/* end hero */}
                    <div className="description">
                        <div className="column1">
                            <span className="tag">action</span>
                            <span className="tag">fantasy</span>
                            <span className="tag">adventure</span>
                        </div> {/* end column1 */}
                        <div className="column2">
                            <p>Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the Grey, Bilbo finds himself joining a company of thirteen dwarves led by the legendary warrior, Thorin Oakenshield. Their journey will take them into the Wild; through... <a href="#">read more</a></p>
                            <div className="avatars">
                                <a href="#" data-tooltip="Person 1" data-placement="top">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
                                </a>
                                <a href="#" data-tooltip="Person 2" data-placement="top">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
                                </a>
                                <a href="#" data-tooltip="Person 3" data-placement="top">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" />
                                </a>
                            </div> {/* end avatars */}
                        </div> {/* end column2 */}
                    </div> {/* end description */}
                </div> {/* end container */}
            </div> {/* end movie-card */}

        </div>}
        </>
    )
}

export default SingleMovie
