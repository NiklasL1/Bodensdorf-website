import React, { useEffect, useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import CheckoutFormIban from "./CheckoutFormIban";
import CheckoutFormSofort from "./CheckoutFormSofort";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./StripeNew.css";
import { PaymentContext } from "../../Context/PaymentContext";
import { BookingsContext } from "../../Context/BookingsContext";
import moment from "moment";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

// Make sure to call loadStripe outside of a component’s render to avoid

// recreating the Stripe object on every render.

// loadStripe is initialized with your real test publishable API key.

const promise = loadStripe(
	process.env.REACT_APP_LOCATION === "development"
		? process.env.REACT_APP_PUBLISHABLE_KEY
		: "pk_test_51HJwTAKuLkk2F1U9lLls6bJYPxdFMeU0awqk5wcd3dcfkXr6QjjtdUPRM0hYD1gfkF5sZ6auf8vQbZsmotbAbqOo00i7iH5Fh9"
);

export default function StripeNew() {
	const { t } = useTranslation();

	const [paymentMethod, setPaymentMethod] = useState("creditCard");

	const handleChange = (e) => {
		setPaymentMethod(e.target.value);
	};

	const {
		succeeded,
		setSucceeded,
		showStripe,
		handleCloseStripe,
		payingRemainder,
		outstandingPayment,
		thisBooking,
	} = useContext(PaymentContext);

	const { create, update } = useContext(BookingsContext);
	const {
		totalBookingCost,
		prepaymentCost,
		restpaymentCost,
		startDate,
		endDate,
		extraPerson,
		bookingDetails,
		setBookingDetails,
	} = useContext(BookingLogicContext);
	const { data } = useContext(AuthContext);

	let startEpoch = moment(startDate, "YYYY-MM-DD").valueOf();
	let endEpoch = moment(endDate, "YYYY-MM-DD").valueOf();
	let peopleNum = extraPerson ? 3 : 2;

	useEffect(() => {
		if (data) {
			setBookingDetails({
				userID: data._id,
				airBnB: false,
				totalPrice: Math.round(totalBookingCost),
				prepayment: Math.round(prepaymentCost),
				amtPaid: Math.round(prepaymentCost),
				amtOwed: Math.round(restpaymentCost),
				arriveStr: moment(startEpoch).format("DD-MM-YYYY"),
				departStr: moment(endEpoch).format("DD-MM-YYYY"),
				arriveEpoch: startEpoch,
				departEpoch: endEpoch,
				people: peopleNum,
			});
		}
	}, [totalBookingCost, prepaymentCost, restpaymentCost, extraPerson, data]);

	useEffect(() => {
		if (succeeded && !payingRemainder) {
			create(bookingDetails);
			setSucceeded(false);
			Swal.fire({
				title: `${t("bAlert5")}`,
				icon: "success",
			});
			handleCloseStripe();
		}

		if (succeeded && payingRemainder) {
			update(thisBooking._id, thisBooking);
			setSucceeded(false);
			Swal.fire({
				title: `${t("bAlert5a")}`,
				icon: "success",
			});
			handleCloseStripe();
		}
	}, [succeeded]);

	return (
		<Modal
			show={showStripe}
			onHide={handleCloseStripe}
			centered
			className="StripeNew"
		>
			{/* <Modal.Header closeButton>
				<Modal.Title>title</Modal.Title>
			</Modal.Header> */}
			<Modal.Body>
				<select
					value={paymentMethod}
					onChange={handleChange}
					id="selectPaymentMethod"
				>
					<option value="creditCard">{t("payment5")}</option>
					<option value="SEPA">{t("payment6")}</option>
					<option value="sofort">Sofortüberweisung</option>
				</select>
				<Elements stripe={promise}>
					{paymentMethod === "creditCard" ? <CheckoutForm /> : undefined}
					{paymentMethod === "SEPA" ? <CheckoutFormIban /> : undefined}
					{paymentMethod === "sofort" ? <CheckoutFormSofort /> : undefined}
				</Elements>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={handleCloseStripe}>
					{t("bookMo8")}
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
