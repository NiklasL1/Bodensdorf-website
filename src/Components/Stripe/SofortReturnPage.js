import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import SofortReturnPageInside from "./SofortReturnPageInside";
import { Elements } from "@stripe/react-stripe-js";
import { MailContext } from "../../Context/MailContext";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { PaymentContext } from "../../Context/PaymentContext";

const promise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const SofortReturnPage = () => {
	const [promiseLoaded, setPromiseLoaded] = useState(false);

	console.log(promise);

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
