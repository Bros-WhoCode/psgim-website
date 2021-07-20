import React from 'react'

import Carousel from '../components/Carousel';
import welcomeImg from '../assets/km3.jpg';
import '../styles/Home.css'
import LegacyLogo from '../assets/legacylogo.png';
import DNALogo from '../assets/dnalogo.png';
import MissionLogo from '../assets/missionlogo.png';
import MilestoneLogo from '../assets/milestonelogo.png';
const Home = () => {
    return (
        <React.Fragment>
        <div className="home-container">
            <Carousel></Carousel>
            <div className="home-menu">
                <div className="home-menu-bg-wrapper">
                    <div className="home-menu-title">What are you looking for?</div>
                    <div className="home-menu-wrapper">
                        <p>MBA FT</p>
                        <span></span>
                        <p>MBWM</p>
                        <span></span>
                        <p>PhD</p>
                        <span></span>
                        <p>PSGIAS Programs</p>
                    </div>
                </div>
            </div>
            <div className="home-welcome-container">
                <div className="home-welcome-content-wrapper">
                    <div className="home-welcome-title">
                        <p>Welcome to PSGIM</p>
                    </div>
                    <div className="home-welcome-content">
                        <p>PSG Institute of Management is a proud member of the PSG and Sons’ Charity-  a unique educational trust. 
                        </p>
                        <p>
                            Nine years before an independent India emerged, this thought-seed was planted to further the cause of education and the first polytechnic was started under the aegis of the trust. That was the beginning and the acorn today is a magnificent oak tree of excellence in education and training.

                        </p>
                    </div>
                </div>
                <div className="home-welcome-img">
                    <img src={welcomeImg} alt="Welcome to PSGIM" />
                </div>
            </div>
            <div className="wwr-container">
                <div className="wwr-title">
                    Who We Are
                </div>
                <div className="wwr-wrapper">
                     <div className="wwr-content">
                         <img src={LegacyLogo} alt="" className="wwr-logo" />
                         <p className="wwr-para">Our Legacy</p>
                     </div>
                     <div className="wwr-content">
                         <img src={DNALogo} alt="" className="wwr-logo" />
                         <p className="wwr-para">Our DNA</p>
                     </div>
                     <div className="wwr-content">
                         <img src={MissionLogo} alt="" className="wwr-logo" />
                         <p className="wwr-para">Our Vision, Mission and Values</p>
                     </div>
                     <div className="wwr-content">
                         <img src={MilestoneLogo} alt="" className="wwr-logo" />
                         <p className="wwr-para">Our Keys and Milestones</p>
                     </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home
