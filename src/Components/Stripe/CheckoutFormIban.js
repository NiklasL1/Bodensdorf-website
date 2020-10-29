import React, { useState, useEffect, useContext } from "react";
import { useStripe, useElements, IbanElement } from "@stripe/react-stripe-js";
import { PaymentContext } from "../../Context/PaymentContext";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { useTranslation } from "react-i18next";
import moment from "moment";
import IbanForm from "./IbanForm";

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();

	const { t } = useTranslation();

	const {
		succeeded,
		setSucceeded,
		payingRemainder,
		outstandingPayment,
	} = useContext(PaymentContext);

	const [error, setError] = useState(null);

	const [processing, setProcessing] = useState(false);	

	const [clientSecret, setClientSecret] = useState("");

	const { bookingDetails } = useContext(BookingLogicContext);

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads

		// setSucceeded(false);

		let payment = payingRemainder
			? outstandingPayment
			: bookingDetails.prepayment;

		window

			.fetch(
				process.env.REACT_APP_LOCATION === "development"
					? "http://localhost:4000/api/payments/create-iban-payment-intent"
					: "https://bodensdorf-server.herokuapp.com/api/payments/create-iban-payment-intent",
				{
					method: "POST",

					headers: {
						"Content-Type": "application/json",
					},

					body: JSON.stringify({ price: payment }),
				}
			)

			.then((res) => {
				return res.json();
			})

			.then((data) => {
				setClientSecret(data.clientSecret);
			});
	}, []);

	// const handleChange = async (event) => {
	// 	// Listen for changes in the CardElement

	// 	// and display any errors as the customer types their card details

	// 	setDisabled(event.empty);

	// 	setError(event.error ? event.error.message : "");
	// };

	const handleSubmit = async (ev) => {
		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		const accountholderName = ev.target["name"];
		const email = ev.target.email;

		ev.preventDefault();

		setProcessing(true);

		setSucceeded(false);

		const payload = await stripe.confirmSepaDebitPayment(clientSecret, {
			payment_method: {
				sepa_debit: elements.getElement(IbanElement),
				billing_details: {
					name: accountholderName.value,
					email: email.value,
				},
			},
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);

			setProcessing(false);
		} else {
			setError(null);

			setProcessing(false);

			setSucceeded(true);

			// console.log("succeeded", succeeded);
		}
	};

	return (
		<>
			{payingRemainder ? (
				<h2> {outstandingPayment}€ </h2>
			) : (
				<>
					<h2> {bookingDetails.prepayment}€ </h2>
					<h3>
						{" "}
						{moment(bookingDetails.arriveStr, "DD/MM/YYYY").format(
							"DD.MM.YYYY"
						)}
						-{" "}
						{moment(bookingDetails.departStr, "DD/MM/YYYY").format(
							"DD.MM.YYYY"
						)}{" "}
					</h3>
				</>
			)}
			<IbanForm
				onSubmit={handleSubmit}
				// handleChange={handleChange}
                disabled={!stripe}
                processing={processing}
                succeeded={succeeded}
			/>

			{error && (
				<div className="card-error" role="alert">
					{error}
				</div>
			)}
		</>
	);
}
