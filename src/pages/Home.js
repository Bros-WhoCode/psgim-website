import React from 'react'

import Carousel from '../components/Carousel';

import '../styles/Home.css'

const Home = () => {
    return (
        <>
        <div className="home-container">
            {/* <div className="home-wrapper">
              <p>Discover</p>
              <p>PSGIM.</p>
            </div> */}
            <Carousel></Carousel>
            <div className="home-menu">
              <p>MBA FT</p>
              <p>MBWM</p>
              <p>PhD</p>
              <p>PSGIAS Programs</p>
            </div>
        </div>

        <div className="home2-container">
            <div className="home2-head">
                <h2>Legacy</h2>
            </div>
            <div className="home2-wrapper">

            </div>
        </div>
        </>
    )
}

export default Home
