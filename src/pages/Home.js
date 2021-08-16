import React from 'react'

import Carousel from '../components/Carousel';
import '../styles/Home.css'
const Home = () => {
    return (
        <React.Fragment>
        <div className="home-container">
            <Carousel></Carousel>
            <div className="legacy-container">
                <div className="legacy-title">
                    Our Legacy
                </div>
                <div className="legacy-wrapper">
                        <div className="legacy-content">
                          &emsp;&emsp;&emsp;PSG Institute of Management is a proud member of the PSG and Sons’ Charity- a unique educational trust. 
                        </div>
                        <div className="legacy-quote">
                            “Let there be charity, so that other people can share my family’s prosperity”
                        </div>
                        <div className="legacy-content">
                            were the inspiring words from Shri P. S. Govindaswamy Naidu who laid the foundation for one of the most respected charitable trusts in the country.  
                        </div>
                        <div className="legacy-content">
                            &emsp;&emsp;&emsp;PSG Institute of Management was started as the Department of Management Sciences under the PSG College of Technology in the year 1964 to cater to the ever growing need of management graduates in this region which witnessed an industrial and entrepreneurial leap of faith that continues till today. The Department was granted the 'autonomous status' by the University of Madras and the University Grants Commission (UGC) in 1978 and metamorphosed into a full-fledged institute known as the PSG Institute of Management in 1994.
                        </div>   
                        
                </div>
                <button className="legacy-knowmore">
                    Know More
                </button>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home
