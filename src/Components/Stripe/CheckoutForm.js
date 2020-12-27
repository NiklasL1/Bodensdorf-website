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
import { AuthContext } from "../../Context/AuthContext";
import "./StripeNew.css";
import { useTranslation } from "react-i18next";
import moment from "moment";

export default function CheckoutForm() {
	const { t } = useTranslation();
	const { data } = useContext(AuthContext);

	const {
		succeeded,
		setSucceeded,
		payingRemainder,
		outstandingPayment,
		thisBooking,
	} = useContext(PaymentContext);

	const [error, setError] = useState(null);

	const [processing, setProcessing] = useState("");

	const [disabled, setDisabled] = useState(true);

	const [disabled2, setDisabled2] = useState(true);

	const [disabled3, setDisabled3] = useState(true);

	const [clientSecret, setClientSecret] = useState("");

	const stripe = useStripe();

	const elements = useElements();

	const { bookingDetails, chooseFullPay } = useContext(BookingLogicContext);

	let timeStart = payingRemainder
		? moment(thisBooking.arriveStr, "DD-MM-YYYY").format("DD.MM.YYYY")
		: moment(bookingDetails.arriveStr, "DD-MM-YYYY").format("DD.MM.YYYY");

	let timeEnd = payingRemainder
		? moment(thisBooking.departStr, "DD-MM-YYYY").format("DD.MM.YYYY")
		: moment(bookingDetails.departStr, "DD-MM-YYYY").format("DD.MM.YYYY");

	let paymentType = payingRemainder
		? "Restzahlung vor Ankunft"
		: chooseFullPay
		? "Gesamtbetrag freiwilling gezahlt bei Buchung"
		: (moment(timeStart, "DD.MM.YYY").valueOf() - Date.now()) <= 2592000000
		? "Gesamtbetrag gezahlt da innerhalb 30 Tage"
		: "Anzahlung bei Buchung";

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads

		setSucceeded(false);

		let payment = payingRemainder
			? outstandingPayment
			: bookingDetails.prepayment;

		window

			.fetch(
				process.env.REACT_APP_LOCATION === "development"
					? `${process.env.REACT_APP_DEV_API}/api/payments/create-payment-intent`
					: `${process.env.REACT_APP_PROD_API}/api/payments/create-payment-intent`,
				{
					method: "POST",

					headers: {
						"Content-Type": "application/json",
					},

					body: JSON.stringify({
						price: payment,
						bookingStart: timeStart,
						bookingEnd: timeEnd,
						bookingType: paymentType,
					}),
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
		setDisabled(event.empty);

		setError(event.error ? event.error.message : "");
	};

	const handleChange2 = async (event) => {
		setDisabled2(event.empty);

		setError(event.error ? event.error.message : "");
	};

	const handleChange3 = async (event) => {
		setDisabled3(event.empty);

		setError(event.error ? event.error.message : "");
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();

		setProcessing(true);

		setSucceeded(false);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardNumberElement),
				billing_details: {
					name: `${data.fName} ${data.lName}`,
					email: data.email,
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
		<form className="payment-form" onSubmit={handleSubmit}>
			<CardNumberElement
				className="card-element"
				options={cardStyle}
				onChange={handleChange}
			/>
			<div id="bottomRowPaymentForm">
				<CardExpiryElement
					className="card-element"
					options={cardStyle}
					onChange={handleChange2}
				/>
				<CardCvcElement
					className="card-element"
					options={cardStyle}
					onChange={handleChange3}
				/>
			</div>

			<button
				disabled={processing || disabled || disabled2 || disabled3 || succeeded}
				id="submit"
			>
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
