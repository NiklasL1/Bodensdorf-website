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
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1368.7268922221613!2d13.967321118998216!3d46.67704414336644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47707de6ff57607d%3A0x87d0c2be5af84194!2sSankt-Urban-Weg%206%2C%209551%20Tsch%C3%B6ran%2C%20Austria!5e0!3m2!1sen!2sde!4v1598275980770!5m2!1sen!2sde"
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
