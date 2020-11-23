import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js/pure";
import SofortReturnPageInside from "./SofortReturnPageInside";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	process.env.REACT_APP_LOCATION === "development"
		? process.env.REACT_APP_PUBLISHABLE_KEY
		: "pk_test_51HJwTAKuLkk2F1U9lLls6bJYPxdFMeU0awqk5wcd3dcfkXr6QjjtdUPRM0hYD1gfkF5sZ6auf8vQbZsmotbAbqOo00i7iH5Fh9"
);

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
