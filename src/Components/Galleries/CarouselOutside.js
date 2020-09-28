import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { outsidePhotos } from "./OutsidePhotos";
import { outsidePhotosNew } from "./OutsidePhotosNew";

const CarouselOutside = () => {
	return (
		<Carousel
			showThumbs={false}
			infiniteLoop={true}
			useKeyboardArrows={true}
			swipeable={true}
			emulateTouch={true}
			showStatus={false}
		>
			{outsidePhotosNew.map((photo) => (
				<div>
					<img src={photo.src} alt={photo.src} />
				</div>
			))}
		</Carousel>
		// <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} swipeable={true} emulateTouch={true} showStatus={false}>
		//         <div>
		//             <img
		//             src={outsidePhotos[2].src}
		//             alt="outside3"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[3].src}
		//             alt="outside4"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[4].src}
		//             alt="outside5"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[5].src}
		//             alt="outside6"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[6].src}
		//             alt="outside7"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[7].src}
		//             alt="outside8"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[8].src}
		//             alt="outside9"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[9].src}
		//             alt="outside10"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[10].src}
		//             alt="outside11"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[11].src}
		//             alt="outside12"
		//             />
		//         </div>
		//         <div>
		//             <img
		//             src={outsidePhotos[1].src}
		//             alt="outside2"
		//             />
		//         </div>
		//         {/* <div>
		//             <img
		//             src={outsidePhotos[0].src}
		//             alt="outside1"
		//             />
		//              <p className="legend">Legend 3</p>
		//         </div> */}
		//     </Carousel>
	);
};

export default CarouselOutside;
