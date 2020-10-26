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
				<div key={photo.key}>
					<img src={photo.src} alt={photo.src} />
				</div>
			))}
		</Carousel>
	);
};

export default CarouselOutside;
