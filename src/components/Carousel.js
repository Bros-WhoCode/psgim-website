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
            title : "MBA FULL TIME 1",
            content : "MBA FT (Waste Management and Social Entrepreneurship) is a two-year program designed by the Ministry of Human Resource Development, affiliated to Anna University, Chennai and approved by AICTE, New Delhi."
        },
        {
            title : "MBA FULL TIME 2",
            content : "MBA FT (Waste Management and Social Entrepreneurship) is a two-year program designed by the Ministry of Human Resource Development, affiliated to Anna University, Chennai and approved by AICTE, New Delhi."
        },
        {
            title : "MBA FULL TIME 3",
            content : "MBA FT (Waste Management and Social Entrepreneurship) is a two-year program designed by the Ministry of Human Resource Development, affiliated to Anna University, Chennai and approved by AICTE, New Delhi."
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

                <div className={`carousel-programs ${isOverlay ? 'carousel-programs-active' : ''}`}>
                    <div className="carousel-programs-slides">
                            {programs.map((child, index) => (
                                <div className={`carousel-programs-slide ${prgIndex === index ? 'carousel-programs-slide-active' : ''}`}>
                                    <div className="caro-programs-slide-content">
                                        <h2>{child.title}</h2>
                                        <p>{child.content}</p>
                                        <button>Know more</button>
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

            <div className="home-menu">
            <div className="home-menu-bg-wrapper">
                <div className="home-menu-title">What are you looking for?</div>
                <div className="home-menu-wrapper">
                    <div className="home-menu-programs"><p onMouseEnter={() => {nextProgram(0)}} onMouseLeave={exitOverlay}>MBA FT</p></div>
                    <span></span>
                    <div className="home-menu-programs"><p onMouseEnter={() => {nextProgram(1)}} onMouseLeave={exitOverlay}>MBWM</p></div>
                    <span></span>
                    <div className="home-menu-programs"><p onMouseEnter={() => {nextProgram(2)}} onMouseLeave={exitOverlay}>PhD</p></div>
                    <span></span>
                    <div className="home-menu-programs"><p onMouseEnter={() => {nextProgram(3)}} onMouseLeave={exitOverlay}>PSGIAS Programs</p></div>
                </div>
            </div>
            </div>
        </>
    );

}

export default Carousel;