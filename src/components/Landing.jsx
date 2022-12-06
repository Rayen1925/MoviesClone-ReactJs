import React, { useEffect, useState } from 'react'

import RowPosters from './RowPosters';

function Landing() {


    return (
        <>
            <section id="hero" class="d-flex align-items-center">
                <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
                    <h1>Luca</h1>
                    <h2>Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.</h2>
                    <a href="#about" class="btn-get-started scrollto">watch</a>
                </div>
            </section>

            <RowPosters title="Trending" category="trending" />
            <RowPosters title="Popular" category="popular" />
            <RowPosters title="Top Rated" category="toprated" />
        </>

    )
}

export default Landing