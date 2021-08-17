import React, {useEffect, useState} from 'react';

import CountUp from 'react-countup';

import '../styles/Carousel.css';

import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
// import Image3 from '../assets/c1.jpg';
// import Image4 from '../assets/c2.jpg';
// import Image5 from '../assets/c3.jpg';

const CarouselElement = ({index}) => {

    switch(index) {
        case 0:
            return (
                <div className="carousel-rankings-wrapper carousel-wrapper">
                    <div className="carousel-rankings-title carousel-title font-head">
                        <p>Rankings</p><p>PSGIM</p>
                    </div>
                    <div className="carousel-rankings">
                        <div className="carousel-rank">
                            <CountUp start={1} end={40} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="font-head">
                                        <span ref={countUpRef} /><sup>th</sup>
                                    </div>
                                )}
                            </CountUp>
                            <p>India Today</p>
                        </div>
                        <div className="carousel-rank">
                            <CountUp start={1} end={46} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="font-head">
                                        <span ref={countUpRef} /><sup>th</sup>
                                    </div>
                                )}
                            </CountUp>
                            <p>NIRF - MHRD</p>
                        </div>
                        <div className="carousel-rank">
                            <CountUp start={1} end={41} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="font-head">
                                        <span ref={countUpRef} /><sup>th</sup>
                                    </div>
                                )}
                            </CountUp>
                            <p>Business Today</p>
                        </div>
                    </div>
                </div>
            );

        case 1:
            return (
                <div className="carousel-discover-wrapper carousel-wrapper">
                    <div className="carousel-discover-title carousel-title font-head">
                        <p>Discover</p><p>PSGIM</p>
                    </div>
                    <div className="carousel-discover-content">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rem quisquam quis ea illum similique fugit enim dignissimos tempore et ipsam, laboriosam nemo quasi dolor laudantium quae nostrum sit asperiores esse! Mollitia delectus ipsam aperiam officia voluptatem, esse ex repudiandae est assumenda optio doloremque ea atque, fugit iusto qui nesciunt.</p>
                    </div>
                </div>
            );

        default:
            return (<></>);
    }

}

const Carousel = () => {

    // const sliderData = [Image1, Image2, Image3, Image4];
    const sliderData = [Image1, Image2];
    const length = sliderData.length;
    const [activeIndex, setActiveIndex] = useState(0);

    const [prgIndex, setPrgIndex] = useState(0);
    const [isOverlay, setIsOverlay] = useState(false);
    
    const programs = [
        {
            title : "MBA FULL TIME",
            content : "MBA FT (Waste Management and Social Entrepreneurship) is a two-year program designed by the Ministry of Human Resource Development, affiliated to Anna University, Chennai and approved by AICTE, New Delhi."
        },
        {
            title : "MBA WASTE MANAGEMENT",
            content : "MBA FT is a two-year program affiliated to Anna University, Chennai, and approved by AICTE, New Delhi. This flagship programme of PSGIM equips students to navigate the business world and prepare them to be industry-ready professionals and entrepreneurs"
        },
        {
            title : "PhD",
            content : "MBA PT is a three-year program, affiliated to Anna University, Chennai, and approved by AICTE, New Delhi. This program allows working professionals to gain powerful business/functional Insights, hone managerial and leadership skills and helps accelerate career goals. "
        },
        {
            title : "MBA PART TIME",
            content : "PSG Institute of Management offers full time PhD programs that are affiliated to Anna University, Chennai. The Doctoral Scholars selected by the University enrol as full time or part time research scholars at PSG Institute of Management. "
        }
    ]

    const nextSlide = () => {

        let nextIndex = activeIndex + 1;

        if(nextIndex >= length){
            nextIndex = 0;
        }

        setActiveIndex(nextIndex);

    }

    const nextProgram = (index) => {
        setPrgIndex(index);
        setIsOverlay(true);
    }

    const exitOverlay = () => {
        setIsOverlay(false);
    }

    useEffect(() => {

        const intervalId = setInterval(nextSlide, 5500);

        return () => {
            clearInterval(intervalId);
        }

    });

    return (
        <>
            <div onClick={() => {}} className="carousel-container">

                <div onMouseLeave={exitOverlay} onMouseEnter={() => {if(isOverlay){nextProgram(prgIndex)}}} className={`carousel-programs ${isOverlay ? 'carousel-programs-active' : ''}`}>
                    <div className="carousel-programs-slides">
                            {programs.map((child, index) => (
                                <div className={`carousel-programs-slide ${prgIndex === index ? 'carousel-programs-slide-active' : ''}`}>
                                    <div className="caro-programs-slide-content">
                                        <h2 className="font-head">{child.title}</h2>
                                        <p>{child.content}</p>
                                        <button className="font-head">Know more</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className={`carousel-slides ${isOverlay ? 'carousel-slides-hidden' : ''}`}>

                    {sliderData.map((child, index) => {

                        return(

                            <div key={index} className={`carousel-slide ${activeIndex === index ? 'carousel-slide-active' : ''}`}>
                                <div className={`carousel-images ${index % 2 === 0 ? 'opposite' : ''}`}>

                                    {[...Array(4).fill()].map((_, index) => {
                                        return (
                                            <div key={index} className="carousel-image-part">
                                                <div style={{backgroundImage: `url(${child})`}} className="carousel-image-part-inner"></div>
                                            </div>
                                        );
                                    })}

                                </div>
                                <div className="carousel-content-container">
                                    <CarouselElement index={index}/>
                                </div>
                            </div>

                        );

                    })}

                </div>
            </div>

            <div onMouseLeave={exitOverlay} className="home-menu">
            <div className="home-menu-bg-wrapper">
                <div className="home-menu-title font-head">What are you looking for?</div>
                <div className="home-menu-wrapper">
                    <div className="home-menu-programs font-head"><p onMouseEnter={() => {nextProgram(0)}}>MBA FT</p></div>
                    <span></span>
                    <div className="home-menu-programs font-head"><p onMouseEnter={() => {nextProgram(1)}}>MBWM</p></div>
                    <span></span>
                    <div className="home-menu-programs font-head"><p onMouseEnter={() => {nextProgram(2)}}>PhD</p></div>
                    <span></span>
                    <div className="home-menu-programs font-head"><p onMouseEnter={() => {nextProgram(3)}}>PSGIAS Programs</p></div>
                </div>
            </div>
            </div>
        </>
    );

}

export default Carousel;