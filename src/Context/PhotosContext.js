import React, { createContext, useContext, useState } from "react";
import { ImgContext } from "./ImgContext";

export const PhotosContext = createContext();

const PhotosContextProvider = ({ children }) => {
	const { imgSize, imgType } = useContext(ImgContext);

	const [showSlidesGrid1, setShowSlidesGrid1] = useState(false);

	const insidePhotosNew = [
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I01 balkon-fruehstueck.${imgType}`,
			key: "I01",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I02 wohnung-balkon.${imgType}`,
			key: "I02",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I03 see-vom-balkon.${imgType}`,
			key: "I03",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I04 balkon-abendstimmung.${imgType}`,
			key: "I04",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I05 balkon-abendstimmung-2.${imgType}`,
			key: "I05",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I06 wohnzimmer-abendstimmung.${imgType}`,
			key: "I06",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I07 wohnzimmer-abendstimmung-2.${imgType}`,
			key: "I07",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I08 wohnung-wohnzimmer.${imgType}`,
			key: "I08",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I09 wohnung-wohnzimmer-2.${imgType}`,
			key: "I09",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I10 wohnung-blick-aus-fenster.${imgType}`,
			key: "I10",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I11 wohnung-wohnzimmer-3.${imgType}`,
			key: "I11",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I12 wohnung-schlafniche.${imgType}`,
			key: "I12",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I13 balkon-und-blick.${imgType}`,
			key: "I13",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I14 wohnung-kueche.${imgType}`,
			key: "I14",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I15 wohnung-kueche-2.${imgType}`,
			key: "I15",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I16 kueche-und-kaffee.${imgType}`,
			key: "I16",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I17 blick-ins-schlafzimmer.${imgType}`,
			key: "I17",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I18 wohnung-schlafzimmer.${imgType}`,
			key: "I18",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I19 wohnung-badezimmer.${imgType}`,
			key: "I19",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-innen-new/I20 wohnung-badezimmer-2.${imgType}`,
			key: "I20",
		},
	];

	const outsidePhotosNew = [
		{
			src: `/img/${imgType}-${imgSize}/gallery-aussen-new/O01 privat-strand.${imgType}`,
			key: "O01",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-aussen-new/O02 strand.${imgType}`,
			key: "O02",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-aussen-new/O03 balkon.${imgType}`,
			key: "O03",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-aussen-new/O04 see-und-haus.${imgType}`,
			key: "O04",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-aussen-new/O05 ossiachersee.${imgType}`,
			key: "O05",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-aussen-new/O06 strand-und-see.${imgType}`,
			key: "O06",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-aussen-new/O07 strand-see-boote.${imgType}`,
			key: "O07",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-aussen-new/O08 boote-see-bucht.${imgType}`,
			key: "O08",
		},
		{
			src: `/img/${imgType}-${imgSize}/gallery-aussen-new/O09 berge.${imgType}`,
			key: "O09",
		},
	];

	return (
		<PhotosContext.Provider value={{ insidePhotosNew, outsidePhotosNew, showSlidesGrid1, setShowSlidesGrid1 }}>
			{children}
		</PhotosContext.Provider>
	);
};

export default PhotosContextProvider;
