import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import { PaymentContext } from "../../Context/PaymentContext";

const BookingButton = ({ handleClose }) => {
	const { t } = useTranslation();

	const { handleShowStripe } = useContext(PaymentContext);

	const handleClick = () => {
		handleClose();
		handleShowStripe();
	};

	return (
		<div>
			<Button variant="success" size="lg" onClick={handleClick}>
				{t("bookMo7")}
			</Button>
		</div>
	);
};

export default BookingButton;
