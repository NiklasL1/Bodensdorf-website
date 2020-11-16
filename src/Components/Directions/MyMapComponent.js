import React from "react";
// import { compose, withProps } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyDL6zIM_Jz_q4yJfZ19YiimNwX-LwHyiko&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `300px` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `300px` }} />
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props => (
//   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//     {props.isMarkerShown && (
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     )}
//   </GoogleMap>
// ));

// const MyMapComponent = () => {
//   return (
//     <iframe
//     width="600"
//     height="450"
//     frameBorder="0" styles="border:0"
//     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgnCuVh6n9mEnc2xBVNul5HUtU9snkFic&q=Space+Needle,Seattle+WA" allowFullScreen>
//   </iframe>
//   )
// }

const MyMapComponent = () => {
	return (
		
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d813.847912785249!2d13.968580596937807!3d46.67717471562584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47707de6ff57607d%3A0x208c337faf8dfa0c!2sSankt-Urban-Weg%205%2C%209551%20Tsch%C3%B6ran%2C%20Austria!5e0!3m2!1sen!2sde!4v1604235623021!5m2!1sen!2sde"
				title="St. Urban Weg 6 Tschöran"
				width="100%"
				height="100%"
				frameBorder="0"
				styles="border:0;"
				allowFullScreen=""
				aria-hidden="false"
				tabIndex="0"
			></iframe>
	
	);
};

export default MyMapComponent;
