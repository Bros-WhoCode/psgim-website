import React, {useEffect, useRef, useState} from 'react';

import CountUp from 'react-countup';

import '../styles/Carousel.css';

import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
import Image3 from '../assets/c1.jpg';
import Image4 from '../assets/c2.jpg';
import Image5 from '../assets/c3.jpg';


const CarouselElement = ({index}) => {

    switch(index) {
        case 0:
            return (
                <div className="carousel-rankings-wrapper">
                    <div className="carousel-rankings-title">
                        <p>Rankings <br/>PSG IM</p>
                    </div>
                    <div className="carousel-rankings">
                        <div className="carousel-rank">
                            <CountUp start={1} end={40} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} /><sup>th</sup>
                                </div>
                            )}
                            </CountUp>
                            India Today
                        </div>
                        <div className="carousel-rank">
                        <CountUp start={1} end={42} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} /><sup>th</sup>
                                </div>
                            )}
                            </CountUp>
                            The Week
                        </div>
                        <div className="carousel-rank">
                        <CountUp start={1} end={46} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} /><sup>th</sup>
                                </div>
                            )}
                            </CountUp>
                            Business Today
                        </div>
                    </div>
                </div>
            );

        case 1:
            return (
                <div className="carousel-discover-wrapper">
                    <div className="carousel-discover-title">
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

    const sliderData = [Image1, Image2, Image3, Image4];

    const length = sliderData.length;
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {

        let nextIndex = activeIndex + 1;

        if(nextIndex >= length){
            nextIndex = 0;
        }

        setActiveIndex(nextIndex);

    }

    useEffect(() => {

        // const intervalId = setInterval(nextSlide, 5000);

        // return () => {
        //     clearInterval(intervalId);
        // }

        nextSlide();

    }, []);

    return (
        <div onClick={() => {}} className="carousel-container">
            <div className="carousel-slides">
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
                            {activeIndex === index && <div className="carousel-content-container">
                                <CarouselElement index={index}/>
                            </div>}
                        </div>
                    );

                })}
            </div>
        </div>
    );

}

export default Carousel;