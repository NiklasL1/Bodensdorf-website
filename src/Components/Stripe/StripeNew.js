import React, { useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
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

const promise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

export default function StripeNew({ show, handleClose }) {
	const { t } = useTranslation();

	const { succeeded, setSucceeded } = useContext(PaymentContext);
	const { create } = useContext(BookingsContext);
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
	}, [
		totalBookingCost,
		prepaymentCost,
		restpaymentCost,
		extraPerson,
		data,
	]);

	useEffect(() => {
		if (succeeded) {
			create(bookingDetails);
			setSucceeded(false);
			Swal.fire({
				title: `${t("bAlert5")}`,
				icon: "success",
			});
			handleClose();
		}
	}, [succeeded]);

	return (
		<Modal show={show} onHide={handleClose} centered className="StripeNew">
			<Modal.Header closeButton>
				<Modal.Title>title</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Elements stripe={promise}>
					<CheckoutForm />
				</Elements>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					button
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
