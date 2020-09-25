import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { outsidePhotos } from "./OutsidePhotos";

const CarouselOutside = () => {
    return (
        <Carousel pause='hover' interval={null}>
            <Carousel.Item>
                <img
                src={outsidePhotos[0].src}
                alt="Outside1"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[1].src}
                alt="Outside2"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[2].src}
                alt="Outside3"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[3].src}
                alt="Outside4"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[4].src}
                alt="Outside5"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[5].src}
                alt="Outside6"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[6].src}
                alt="Outside7"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[7].src}
                alt="Outside8"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[8].src}
                alt="Outside9"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[9].src}
                alt="Outside10"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[10].src}
                alt="Outside11"
                />                
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={outsidePhotos[11].src}
                alt="Outside12"
                />                
            </Carousel.Item>           
        </Carousel>
    )
}

export default CarouselOutside
