import React, { useState, useEffect, useContext } from "react";
import {	
	useStripe,
	useElements,
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,	
} from "@stripe/react-stripe-js";
import { PaymentContext } from "../../Context/PaymentContext";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import "./StripeNew.css";
import { useTranslation } from "react-i18next";
import moment from "moment";

export default function CheckoutForm() {
	const { t } = useTranslation();

	const {
		succeeded,
		setSucceeded,
		payingRemainder,
		outstandingPayment,
	} = useContext(PaymentContext);

	const [error, setError] = useState(null);

	const [processing, setProcessing] = useState("");

	const [disabled, setDisabled] = useState(true);

	const [clientSecret, setClientSecret] = useState("");

	const stripe = useStripe();

	const elements = useElements();

	const { bookingDetails } = useContext(BookingLogicContext);

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads

		setSucceeded(false);

		let payment = payingRemainder
			? outstandingPayment
			: bookingDetails.prepayment;

		window

			.fetch(
				process.env.REACT_APP_LOCATION === "development"
					? "http://localhost:4000/api/payments/create-payment-intent"
					: "https://bodensdorf-server.herokuapp.com/api/payments/create-payment-intent",
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

	const cardStyle = {
		style: {
			base: {
				color: "#32325d",

				fontFamily: "Arial, sans-serif",

				fontSmoothing: "antialiased",

				fontSize: "16px",

				"::placeholder": {},
			},

			invalid: {
				color: "#fa755a",

				iconColor: "#fa755a",
			},
		},
	};

	const handleChange = async (event) => {
		// Listen for changes in the CardElement

		// and display any errors as the customer types their card details

		setDisabled(event.empty);

		setError(event.error ? event.error.message : "");
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();

		setProcessing(true);

		setSucceeded(false);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardNumberElement),
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
		<form className="payment-form" onSubmit={handleSubmit}>
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

			<CardNumberElement
				className="card-element"
				options={cardStyle}
				onChange={handleChange}
			/>
			<div id="bottomRowPaymentForm">
			<CardExpiryElement
				className="card-element"
				options={cardStyle}
				onChange={handleChange}
			/>
			<CardCvcElement
				className="card-element"
				options={cardStyle}
				onChange={handleChange}
			/>
			</div>			

			<button disabled={processing || disabled || succeeded} id="submit">
				<span id="button-text">
					{processing ? (
						<div className="spinner" id="spinner"></div>
					) : (
						`${t("payment1")}`
					)}
				</span>
			</button>

			{/* Show any error that happens when processing the payment */}

			{error && (
				<div className="card-error" role="alert">
					{error}
				</div>
			)}

			{/* Show a success message upon completion */}

			<p className={succeeded ? "result-message" : "result-message hidden"}>
				Payment succeeded, see the result in your
				<a href={`https://dashboard.stripe.com/test/payments`}>
					{" "}
					Stripe dashboard.
				</a>{" "}
				Refresh the page to pay again.
			</p>
		</form>
	);
}
