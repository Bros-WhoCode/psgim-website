import React, {useEffect, useRef, useState} from 'react';

import '../styles/Carousel.css';

import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';

const Carousel = () => {

    const sliderData = [
        {
            image : Image1
        },
        {
            image : Image2
        }
    ]

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

        const intervalId = setInterval(nextSlide, 5000);

        return () => {
            clearInterval(intervalId);
        }

    });

    return (
        <div className="carousel-container">
            <div className="carousel-slides">
                {sliderData.map((child, index) => {
                    return(
                        <div key={index} className={`carousel-slide ${activeIndex === index ? 'carousel-slide-active' : ''}`}>
                            <div className={`carousel-images ${index % 2 === 0 ? 'opposite' : ''}`}>

                                {[...Array(4).fill()].map((_, index) => {
                                    return (
                                        <div key={index} className="carousel-image-part">
                                            <div style={{backgroundImage: `url(${child.image})`}} className="carousel-image-part-inner"></div>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                    );

                })}
            </div>
        </div>
    );

}

export default Carousel;