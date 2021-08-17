import React from 'react'
import Carousel from '../components/Carousel';
import Placements from '../components/Placements';
import Alumni from "../components/Alumni";
import '../styles/Home.css'
const Home = () => {
    return (
        <React.Fragment>
        <div className="home-container">
            <Carousel></Carousel>
            <div className="legacy-container">
                <div className="legacy-title font-head">
                    Our Legacy
                </div>
                <div className="legacy-wrapper">
                        <div className="legacy-content">
                          &emsp;&emsp;&emsp;PSG Institute of Management is a proud member of the PSG and Sons’ Charity- a unique educational trust. 
                        </div>
                        <div className="legacy-quote font-head">
                            “Let there be charity, so that other people can share my family’s prosperity”
                        </div>
                        <div className="legacy-content">
                            were the inspiring words from Shri P. S. Govindaswamy Naidu who laid the foundation for one of the most respected charitable trusts in the country.  
                        </div>
                        <div className="legacy-content">
                            &emsp;&emsp;&emsp;PSG Institute of Management was started as the Department of Management Sciences under the PSG College of Technology in the year 1964 to cater to the ever growing need of management graduates in this region which witnessed an industrial and entrepreneurial leap of faith that continues till today. The Department was granted the 'autonomous status' by the University of Madras and the University Grants Commission (UGC) in 1978 and metamorphosed into a full-fledged institute known as the PSG Institute of Management in 1994.
                        </div>   
                </div>
                <button className="legacy-knowmore font-head">
                    Know More
                </button>
            </div>

            <Alumni/>
            <Placements/>

            <footer className="footer-container">
                <div className="footer-title font-head">
                    Contact Us
                </div>
                <div className="footer-wrapper">
                    <div className="footer-map"></div>
                    <div className="footer-content">
                        <h4 className="font-head">PHONE</h4>
                        <p>0422-430 4400</p>
                        <p>0422-430 4407</p>
                        <p>admissions@psgim.ac.in</p>
                        <p className="footer-hr"></p>
                        <h4 className="font-head">ADDRESS</h4>
                        <p>PSG Institute of Management</p>
                        <p>Avinashi Road</p>
                        <p>Peelamedu</p>
                        <p>Coimbatore - 641 004</p>
                    </div>
                    <div className="footer-form">
                        <h4 className="font-head">GET IN TOUCH</h4>
                        <form action="">
                            <input type="text" id="footer-form-name" placeholder="Enter Name"/>
                            <div className="footer-form-div">
                                <input type="email" id="footer-form-email" placeholder="Enter Email"/>
                                <input type="text" id="footer-form-name" placeholder="Enter Phone number"/>
                            </div>
                            <textarea name="" id="" cols="30" rows="5" placeholder="Enter queries here."></textarea>
                            <button type="submit" id="footer=form-btn" className="font-head">Post</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
        </React.Fragment>
    )
}

export default Home
