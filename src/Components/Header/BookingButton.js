import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import { PaymentContext } from "../../Context/PaymentContext";

const BookingButton = ({ handleClose }) => {
	const { t } = useTranslation();

	// const [bookingDetails, setBookingDetails] = useState({
	// 	userID: data._id,
	// 	airBnB: false,
	// 	totalPrice: Math.round(totalBookingCost),
	// 	prepayment: Math.round(prepaymentCost),
	// 	amtPaid: Math.round(prepaymentCost),
	// 	amtOwed: Math.round(restpaymentCost),
	// 	arriveStr: moment(startEpoch).format("DD/MM/YYYY"),
	// 	departStr: moment(endEpoch).format("DD/MM/YYYY"),
	// 	arriveEpoch: startEpoch,
	// 	departEpoch: endEpoch,
	// 	people: peopleNum,
	// });

	const { handleShowStripe } = useContext(PaymentContext);

	const handleClick = () => {
		handleClose()
	    handleShowStripe()
	}

	return (
		<div>
			<Button
				variant="success"
				size="lg"
				onClick={handleClick}
			>
				{t("bookMo7")}
			</Button>
		</div>
	);
};

export default BookingButton;
