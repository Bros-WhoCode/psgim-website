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
                <div className="home-menu-wrapper">
                    <p>MBA FT</p>
                    <p>MBWM</p>
                    <p>PhD</p>
                    <p>PSGIAS Programs</p>
                </div>
            </div>
        </div>
        <div className="home2-shadow-wrapper">
            <div className="home2-container">
                <div className="home2-head">
                    <h2>Legacy</h2>
                </div>
                <div className="home2-wrapper">
                    <div className="home2-content">
                        <p>
                            PSG Institute of Management is a proud member of the PSG and Sons’ Charity- a unique educational trust.
                        </p>
                        <p>
                            Nine years before an independent India emerged,this thought-seed was planted to further the cause of education and the first polytechnic was started under the aegis of the trust. That was the beginning and the acorn today is a magnificent oak tree of excellence in education and training.
                        </p>
                        <p className="read-more">
                            Read More
                        </p>
                    </div>
                    <div className="home2-quote">
                        
                        <p className="quote">
                            “Let there be charity, so that other people can share my family’s prosperity”
                        </p>
                        <p className="quote-tagline">
                            Shri P. S. Govindaswamy Naidu
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
