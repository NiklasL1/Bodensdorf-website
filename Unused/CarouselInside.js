import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { insidePhotos } from "./InsidePhotos";

const CarouselInside = () => {
    return (
        <Carousel pause='hover' interval={null}>
            <Carousel.Item>
                <img
                src={insidePhotos[0].src}
                alt="Inside1"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[1].src}
                alt="Inside2"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[2].src}
                alt="Inside3"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[3].src}
                alt="Inside4"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[4].src}
                alt="Inside5"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[5].src}
                alt="Inside6"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[6].src}
                alt="Inside7"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[7].src}
                alt="Inside8"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[8].src}
                alt="Inside9"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[9].src}
                alt="Inside10"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[10].src}
                alt="Inside11"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={insidePhotos[11].src}
                alt="Inside12"
                />                
            </Carousel.Item>           
        </Carousel>
    )
}

export default CarouselInside
