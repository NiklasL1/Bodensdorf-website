import React, { useState, useEffect, useContext } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentContext } from "../../Context/PaymentContext";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { AuthContext } from "../../Context/AuthContext";
import { MailContext } from "../../Context/MailContext";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { LogContext } from "../../Context/LogContext";

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

	const { bookingDetails, chooseFullPay } = useContext(BookingLogicContext);

	const { data } = useContext(AuthContext);

	const { message } = useContext(MailContext);

	const { logThis } = useContext(LogContext);

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

		let bookingData = payingRemainder ? thisBooking : bookingDetails;

		window

			.fetch(
				process.env.REACT_APP_LOCATION === "development"
					? `${process.env.REACT_APP_DEV_API}/api/payments/create-sofort-payment-intent`
					: `${process.env.REACT_APP_PROD_API}/api/payments/create-sofort-payment-intent`,
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
						bookingData: JSON.stringify(bookingData),
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

		localStorage.setItem("message", JSON.stringify(message));
		localStorage.setItem("data", JSON.stringify(data));
		localStorage.setItem("payment", JSON.stringify("sofort"));
		localStorage.setItem("payingRemainder", JSON.stringify(payingRemainder));

		if (payingRemainder) {
			localStorage.setItem("booking", JSON.stringify(thisBooking));
		} else if (!payingRemainder) {
			localStorage.setItem("booking", JSON.stringify(bookingDetails));
		}

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
					? `${process.env.REACT_APP_DEV_URL}/return`
					: `${process.env.REACT_APP_PROD_URL}/return`,
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);

			setProcessing(false);

			logThis("error", payload.error.message);
		} else {
			setError(null);

			setProcessing(false);

			setSucceeded(true);

			logThis("succeeded", succeeded);
		}
	};

	return (
		<>
			<form className="paymentForm" onSubmit={handleSubmit}>
				<div className="form-row inline">
					<div className="col">
						<label className="boldIt">
							Name
							<br />
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
						<label className="boldIt">
							{t("user5")}
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
			</form>

			{error && (
				<div className="card-error" role="alert">
					{error}
				</div>
			)}
		</>
	);
}
