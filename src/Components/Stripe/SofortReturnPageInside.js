import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useStripe } from "@stripe/react-stripe-js";
import { BookingsContext } from "../../Context/BookingsContext";
import { MailContext } from "../../Context/MailContext";
import { useHistory } from "react-router-dom";

const SofortReturnPageInside = () => {
	const { t } = useTranslation();

	const stripe = useStripe();
	let history = useHistory();

	const { create, update } = useContext(BookingsContext);

	const { sendEmail } = useContext(MailContext);

	const getPaymentIntent = async () => {
		const url = new URL(window.location);
		const clientSecret = url.searchParams.get("payment_intent_client_secret");
		let bookingData = JSON.parse(localStorage.getItem("booking"));
		let payingRemainder = JSON.parse(localStorage.getItem("payingRemainder"));
		const { paymentIntent, error } = await stripe.retrievePaymentIntent(
			clientSecret
		);
		// console.log(paymentIntent);
		// console.log(bookingData)
		if (error) {
			// Handle error here
			console.log("failed");
			Swal.fire({
				title: `${t("paymentFail")}payment failed`,
				icon: "error",
			});
		} else if (
			paymentIntent &&
			(paymentIntent.status === "succeeded" ||
				paymentIntent.status === "processing")
		) {
			// Handle successful payment here
			// console.log("succeeded on booking");
			if (payingRemainder === false) {
				create(bookingData);
				sendEmail()
				// setSucceeded(false);
				Swal.fire({
					title: `${t("bAlert5")}`,
					icon: "success",
				});
			}

			if (payingRemainder === true) {
				// console.log("succeeded on restpayment");
				update(bookingData._id, bookingData);
				sendEmail()
				// setSucceeded(false);
				Swal.fire({
					title: `${t("bAlert5a")}`,
					icon: "success",
				});
			}
		}
		localStorage.clear();

		setTimeout(() => {
			history.push("/");
		}, 1000);
	};

	useEffect(() => {
		if (stripe) {
			getPaymentIntent();
		}
	}, [stripe]);

	return <div>{t("sofortRedirect")}</div>;
};

export default SofortReturnPageInside;
