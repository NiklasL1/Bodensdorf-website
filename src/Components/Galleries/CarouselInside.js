import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PhotosContext } from "../../Context/PhotosContext";

const CarouselInside = ({ showSlides }) => {
	const { insidePhotosNew } = useContext(PhotosContext);
	return (
		<>
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
								className="fa fa-arrow-left fa-2x"
								aria-hidden="true"
								style={{
									textShadow:
										"-1px -1px 0 #f8f8ff, 1px -1px 0 #f8f8ff, -1px 1px 0 #f8f8ff, 1px 1px 0 #f8f8ff",
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
								className="fa fa-arrow-right fa-2x"
								aria-hidden="true"
								style={{
									textShadow:
										"-1px -1px 0 #f8f8ff, 1px -1px 0 #f8f8ff, -1px 1px 0 #f8f8ff, 1px 1px 0 #f8f8ff",
								}}
							></i>
						</span>
					)
				}
			>
				{showSlides
					? insidePhotosNew.map((photo) => (
							<div key={photo.key}>
								<img src={photo.src} alt={photo.src} />
							</div>
					  ))
					: insidePhotosNew.slice(0, 2).map((photo) => (
							<div key={photo.key}>
								<img src={photo.src} alt={photo.src} />
							</div>
					  ))}
			</Carousel>
		</>
	);
};

export default CarouselInside;
