import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { insidePhotos } from "./InsidePhotos";

const CarouselInside = () => {
    return (
        <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} swipeable={true} emulateTouch={true} showStatus={false}>                
                <div>
                    <img
                    src={insidePhotos[4].src}
                    alt="Inside5"
                    />                      
                </div>
                <div>
                    <img
                    src={insidePhotos[2].src}
                    alt="Inside3"
                    />                    
                </div>
                <div>
                    <img
                    src={insidePhotos[3].src}
                    alt="Inside4"
                    />                      
                </div>                
                <div>
                    <img
                    src={insidePhotos[5].src}
                    alt="Inside6"
                    />                      
                </div>
                <div>
                    <img
                    src={insidePhotos[6].src}
                    alt="Inside7"
                    />                      
                </div>
                <div>
                    <img
                    src={insidePhotos[7].src}
                    alt="Inside8"
                    />                      
                </div>
                <div>
                    <img
                    src={insidePhotos[8].src}
                    alt="Inside9"
                    />                      
                </div>
                <div>
                    <img
                    src={insidePhotos[9].src}
                    alt="Inside10"
                    />                      
                </div>
                <div>
                    <img
                    src={insidePhotos[10].src}
                    alt="Inside11"
                    />                      
                </div>
                <div>
                    <img
                    src={insidePhotos[11].src}
                    alt="Inside12"
                    />                      
                </div>
                <div>
                    <img
                    src={insidePhotos[0].src}
                    alt="Inside1"
                    /> 
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img
                    src={insidePhotos[1].src}
                    alt="Inside2"
                    />
                </div>
            </Carousel>
    )
}

export default CarouselInside
