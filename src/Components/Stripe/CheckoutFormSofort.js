import React, { useState, useEffect, useContext } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentContext } from "../../Context/PaymentContext";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { AuthContext } from "../../Context/AuthContext";
import { useTranslation } from "react-i18next";
import moment from "moment";

export default function CheckoutFormSofort() {
	const stripe = useStripe();
	const elements = useElements();

	const { t } = useTranslation();

	const {
		succeeded,
		setSucceeded,
		payingRemainder,
		outstandingPayment,
		thisBooking,
	} = useContext(PaymentContext);

	const [error, setError] = useState(null);

	const [processing, setProcessing] = useState(false);

	const [clientSecret, setClientSecret] = useState("");

	const { bookingDetails } = useContext(BookingLogicContext);

	const { data } = useContext(AuthContext);

	const [userData, setUserData] = useState({
		name: `${data.fName} ${data.lName}`,
		email: data.email,
	});

	const handleChange = (event) => {
		event.persist();
		const { name, value } = event.target;
		setUserData((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	let timeStart = payingRemainder
		? moment(thisBooking.arriveStr, "DD-MM-YYYY").format("DD.MM.YYYY")
		: moment(bookingDetails.arriveStr, "DD-MM-YYYY").format("DD.MM.YYYY");

	let timeEnd = payingRemainder
		? moment(thisBooking.departStr, "DD-MM-YYYY").format("DD.MM.YYYY")
		: moment(bookingDetails.departStr, "DD-MM-YYYY").format("DD.MM.YYYY");

	let paymentType = payingRemainder
		? "Restzahlung vor Ankunft"
		: "Zahlung bei Buchung";

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads

		setSucceeded(false);

		let payment = payingRemainder
			? outstandingPayment
			: bookingDetails.prepayment;

		window

			.fetch(
				process.env.REACT_APP_LOCATION === "development"
					? "http://localhost:4000/api/payments/create-sofort-payment-intent"
					: "https://bodensdorf-server.herokuapp.com/api/payments/create-sofort-payment-intent",
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

		const payload = await stripe.confirmSofortPayment(clientSecret, {
			payment_method: {
				sofort: {
					country: "DE",
				},
				billing_details: {
					name: accountholderName.value,
					email: email.value,
				},
			},
			return_url:
				process.env.REACT_APP_LOCATION === "development"
					? "http://localhost:3000"
					: "https://ferienwohnung-ossiachersee.herokuapp.com",
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

	// const logit = () => {
	// 	console.log("from new booking", bookingDetails);
	// 	console.log("from paying balance", thisBooking);
	// 	console.log("from", timeStart, "to", timeEnd);
	// };

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
						)}{" "}
						-{" "}
						{moment(bookingDetails.departStr, "DD/MM/YYYY").format(
							"DD.MM.YYYY"
						)}{" "}
					</h3>
				</>
			)}
			<form className="paymentForm" onSubmit={handleSubmit}>
				<div className="form-row inline">
					<div className="col">
						<label>
							Name
							<input
								name="name"
								value={userData.name}
								required
								className="ibanOtherInput"
								onChange={handleChange}
							/>
						</label>
					</div>

					<div className="col">
						<label>
							Email Address
							<input
								name="email"
								type="email"
								value={userData.email}
								required
								className="ibanOtherInput"
								onChange={handleChange}
							/>
						</label>
					</div>
				</div>
			</form>

			<button
				disabled={processing || succeeded || !stripe}
				id="submit"
				type="submit"
			>
				<span id="button-text">
					{processing ? (
						<div className="spinner" id="spinner"></div>
					) : (
						`${t("payment1")}`
					)}
				</span>
			</button>

			{error && (
				<div className="card-error" role="alert">
					{error}
				</div>
			)}
		</>
	);
}
