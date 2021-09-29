import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PhotosContext } from "../../Context/PhotosContext";

const CarouselOutside = ({ showSlides }) => {
	const { outsidePhotosNew } = useContext(PhotosContext);
	return (
		<Carousel
			showThumbs={false}
			infiniteLoop={true}
			useKeyboardArrows={true}
			swipeable={true}
			emulateTouch={true}
			showStatus={false}
			dynamicHeight={false}
			renderArrowPrev={(onClickHandler, hasPrev, label) =>
				hasPrev && (
					<span
						onClick={onClickHandler}
						title={label}
						style={{
							position: "absolute",
							zIndex: 2,
							width: 50,
							height: "100%",
							top: 0,
							cursor: "pointer",
							left: 0,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<i
							className="fa fa-chevron-left fa-2x"
							aria-hidden="true"
							style={{
								textShadow:
									"-1px -1px 0 #f8f8ff, 1px -1px 0 #f8f8ff, -1px 1px 0 #f8f8ff, 1px 1px 0 #f8f8ff",
								color: "grey",
							}}
						></i>
					</span>
				)
			}
			renderArrowNext={(onClickHandler, hasNext, label) =>
				hasNext && (
					<span
						onClick={onClickHandler}
						title={label}
						style={{
							position: "absolute",
							zIndex: 2,
							width: 50,
							height: "100%",
							top: 0,
							cursor: "pointer",
							right: 0,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<i
							className="fa fa-chevron-right fa-2x"
							aria-hidden="true"
							style={{
								textShadow:
									"-1px -1px 0 #f8f8ff, 1px -1px 0 #f8f8ff, -1px 1px 0 #f8f8ff, 1px 1px 0 #f8f8ff",
								color: "grey",
							}}
						></i>
					</span>
				)
			}
		>
			{showSlides
				? outsidePhotosNew.map((photo) => (
						<div key={photo.key}>
							<img src={photo.src} alt={photo.src} />
						</div>
				  ))
				: outsidePhotosNew.slice(0, 2).map((photo) => (
						<div key={photo.key}>
							<img src={photo.src} alt={photo.src} />
						</div>
				  ))}
		</Carousel>
	);
};

export default CarouselOutside;
