import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { BookingsContext } from "../../Context/BookingsContext";
import { PaymentContext } from "../../Context/PaymentContext";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const BookingButton = ({ handleClose }) => {
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
	} = useContext(BookingLogicContext);
	const { data } = useContext(AuthContext);

	let startEpoch = moment(startDate, "YYYY-MM-DD").valueOf();
	let endEpoch = moment(endDate, "YYYY-MM-DD").valueOf();
	let peopleNum = extraPerson ? 3 : 2;

	const [value, setValue] = useState({
		userID: data._id,
		airBnB: false,
		totalPrice: Math.round(totalBookingCost),
		prepayment: Math.round(prepaymentCost),
		amtPaid: Math.round(prepaymentCost),
		amtOwed: Math.round(restpaymentCost),
		arriveStr: moment(startEpoch).format("DD/MM/YYYY"),
		departStr: moment(endEpoch).format("DD/MM/YYYY"),
		arriveEpoch: startEpoch,
		departEpoch: endEpoch,
		people: peopleNum,
	});

	// const handleClick = (event) => {
	//     if(available) {
	//         create(event, value)
	//         Swal.fire("sie haben gebucht!")
	//     } else if (!available) {
	//         Swal.fire("unverfügbar!")
	//     }
	// }

	useEffect(() => {
		if (succeeded) {
			create(value);
			setSucceeded(false);
			Swal.fire({
				title: `${t("bAlert5")}`,
				icon: "success",
			});
			handleClose();
		}
	}, [succeeded]);

	useEffect(() => {
		setValue({
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
	}, [
		totalBookingCost,
		prepaymentCost,
		restpaymentCost,
		extraPerson,
		data._id,
	]);

	return (
		<div>
			<Button
				variant="success"
				size="lg"
				//    onClick={handleClick}
			>
				{t("bookMo7")}
			</Button>
		</div>
	);
};

export default BookingButton;
