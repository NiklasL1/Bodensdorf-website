import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { insidePhotosNew } from "./InsidePhotosNew";

const CarouselInside = () => {
	return (
		<Carousel
			showThumbs={false}
			infiniteLoop={true}
			useKeyboardArrows={true}
			swipeable={true}
			emulateTouch={true}
			showStatus={false}
			dynamicHeight={true}
		>
			{insidePhotosNew.map((photo) => (
				<div>
					<img src={photo.src} alt={photo.src} />
				</div>
			))}
		</Carousel>
	);
};

export default CarouselInside;
