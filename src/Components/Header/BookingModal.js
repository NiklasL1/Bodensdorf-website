import React, { useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import BookingButton from "./BookingButton";
import Table from "react-bootstrap/Table";
// import { MailContext } from "../../Context/MailContext";

const BookingModal = ({ handleClose, show }) => {
	const {
		totalBookingCost,
		arrayOfDates,
		showDates,
		prepaymentCost,
		restpaymentCost,
		startDate,
		within30,
		chooseFullPay,
		setChooseFullPay,
	} = useContext(BookingLogicContext);

	// const { message } = useContext(MailContext);

	const { t } = useTranslation();

	const handleChange = () => {
		setChooseFullPay(!chooseFullPay);
	};

	useEffect(() => {
		if(show){
			setChooseFullPay(false)
		}
	}, [show])

	// const logit = () => {
	// 	console.log("restpayment:", restpaymentCost);
	// 	console.log("total:", totalBookingCost);
	// 	console.log("prepay:", prepaymentCost);
	// 	console.log("message:", message);
	// };

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>{t("bookMoTitle")}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Table striped bordered className="noBotMarg">
					<tbody>
						<tr>
							<td className="alignVert">{t("bookMo1")}</td>
							<td className="alignVert noWhite">
								{arrayOfDates ? showDates() : null}
							</td>
						</tr>
						<tr>
							<td className="alignVert">{t("bookMo9")}</td>
							<td className="alignVert">
								{arrayOfDates ? arrayOfDates.length : null} {t("bookMo2")}{" "}
								{arrayOfDates ? arrayOfDates.length - 1 : null} {t("bookMo3")}
							</td>
						</tr>
						<tr>
							<td className="alignVert">
								{t("bookMo4")}
								<br />
								{t("bookMo4a")}
							</td>
							<td className="alignVert">
								{arrayOfDates ? totalBookingCost : null}€
							</td>
						</tr>
						{totalBookingCost === prepaymentCost && within30 ? (
							<>
								<tr>
									<td className="alignVert">{t("bookMo5")}</td>
									<td className="alignVert">
										{arrayOfDates ? Math.round(prepaymentCost) : null}€
									</td>
								</tr>
								<tr>
									<td className="alignVert" colSpan="2">
										{t("bookMo30")}
									</td>
								</tr>
							</>
						) : (
							<>
								<tr>
									<td className="alignVert">{t("bookMo5")}</td>
									<td className="alignVert">
										{arrayOfDates ? Math.round(prepaymentCost) : null}€
									</td>
								</tr>
								{!chooseFullPay ? (
									<tr>
										<td className="alignVert">
											{t("bookMo6")}
											{moment(
												moment(startDate, "YYYY-MM-DD").valueOf() - 2592000000
											).format("DD.MM.YYYY")}{" "}
											<br />
											{t("bookMo6a")}
										</td>
										<td className="alignVert">
											{arrayOfDates ? Math.round(restpaymentCost) : null}€
										</td>
									</tr>
								) : undefined}
							</>
						)}
					</tbody>
				</Table>
				{moment(startDate, "YYYY-MM-DD").valueOf() - Date.now() > 2592000000 ? (
					<div className="flex">
						<input
							type="checkbox"
							id="payFullChoice"
							name="payFullChoice"
							checked={chooseFullPay}
							onChange={handleChange}
						/>
						<label htmlFor="payFullChoice" className="padLeft">
							{t("bookMoChoice")}
						</label>
					</div>
				) : undefined}
			</Modal.Body>
			<Modal.Footer id="bookingModalFooter">
				<BookingButton handleClose={handleClose} />
				<Button variant="outline-danger" onClick={handleClose}>
					{t("bookMo8")}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default BookingModal;
