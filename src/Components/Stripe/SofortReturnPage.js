import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import SofortReturnPageInside from "./SofortReturnPageInside";
import { Elements } from "@stripe/react-stripe-js";
import { LogContext } from "../../Context/LogContext";

const promise = loadStripe(
	process.env.REACT_APP_LOCATION === "development"
		? process.env.REACT_APP_PUBLISHABLE_KEY_DEV
		: process.env.REACT_APP_PUBLISHABLE_KEY_PROD
);

const SofortReturnPage = () => {
	const { logThis } = useContext(LogContext);

	const [promiseLoaded, setPromiseLoaded] = useState(false);

	logThis(promise);

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
