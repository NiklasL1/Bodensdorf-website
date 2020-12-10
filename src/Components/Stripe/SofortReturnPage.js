import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import SofortReturnPageInside from "./SofortReturnPageInside";
import { Elements } from "@stripe/react-stripe-js";
import { MailContext } from "../../Context/MailContext";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { PaymentContext } from "../../Context/PaymentContext";

const promise = loadStripe(
	process.env.REACT_APP_LOCATION === "development"
		? process.env.REACT_APP_PUBLISHABLE_KEY
		: "pk_test_51HJwTAKuLkk2F1U9lLls6bJYPxdFMeU0awqk5wcd3dcfkXr6QjjtdUPRM0hYD1gfkF5sZ6auf8vQbZsmotbAbqOo00i7iH5Fh9"
);

const SofortReturnPage = () => {
	const [promiseLoaded, setPromiseLoaded] = useState(false);

	const { setEmail, setMessage } = useContext(MailContext);

	const { setBookingDetails, bookingDetails } = useContext(BookingLogicContext);

	const { setThisBooking, thisBooking } = useContext(PaymentContext);

	console.log(promise);

	// useEffect(() => {
	// 	setEmail(JSON.parse(localStorage.getItem("data")).email);
	// 	setMessage(JSON.parse(localStorage.getItem("message")));
	// 	console.log("setting stuff ahead of time");
	// 	if (JSON.parse(localStorage.getItem("message")) === "bookingRestPaid") {
	// 		setThisBooking(JSON.parse(localStorage.getItem("booking")));
	// 		console.log("this is a restpayment",JSON.parse(localStorage.getItem("message")), JSON.parse(localStorage.getItem("email")), JSON.parse(localStorage.getItem("booking")),
	// 			thisBooking
	// 		);
	// 	} else {
	// 		setBookingDetails(JSON.parse(localStorage.getItem("booking")));
	// 		console.log("this is a restpayment",JSON.parse(localStorage.getItem("message")), JSON.parse(localStorage.getItem("email")), JSON.parse(localStorage.getItem("booking")),
	// 			bookingDetails
	// 		);
	// 	}
	// }, []);

	useEffect(() => {
		if (promise) {
			setPromiseLoaded(true);
		}
	}, [promise]);

	return (
		<Elements stripe={promise}>
			{promiseLoaded ? <SofortReturnPageInside /> : "loading"}
		</Elements>
	);
};

export default SofortReturnPage;
