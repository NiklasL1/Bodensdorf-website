import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import BookingButton from "./BookingButton";
import Table from "react-bootstrap/Table";

const BookingModal = ({ handleClose, show }) => {
	const {
		totalBookingCost,
		arrayOfDates,
		showDates,
		prepaymentCost,
		restpaymentCost,
		startDate,
	} = useContext(BookingLogicContext);

	const { t } = useTranslation();

	const logit = () => {
		console.log("restpayment:", restpaymentCost);
		console.log("total:", totalBookingCost);
		console.log("prepay:", prepaymentCost);
	};

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title onClick={logit}>{t("bookMoTitle")}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* <div>
					{t("bookMo1")}{" "}
					{arrayOfDates ? showDates(`${t("bookMoDateFunc")}`) : null}
				</div>
				<div>
					{arrayOfDates ? arrayOfDates.length : null} {t("bookMo2")}{" "}
					{arrayOfDates ? arrayOfDates.length - 1 : null} {t("bookMo3")}
				</div>
				<div>
					{t("bookMo4")} {arrayOfDates ? totalBookingCost : null}€
				</div>
				{totalBookingCost === prepaymentCost ? (
					<div>
						{t("bookMo5")} {arrayOfDates ? Math.round(prepaymentCost) : null}€
						<br />
						{t("bookMo30")}
					</div>
				) : (
					<>
						<div>
							{t("bookMo5")} {arrayOfDates ? Math.round(prepaymentCost) : null}€
						</div>
						<div>
							{t("bookMo6")}
							{t("bookMoDateFunc") === "DE"
								? moment(
										moment(startDate, "YYYY-MM-DD").valueOf() - 2592000000
								  ).format("DD/MM/YYYY")
								: moment(
										moment(startDate, "YYYY-MM-DD").valueOf() - 2592000000
								  ).format("MM/DD/YYYY")}
							{t("bookMo6a")}
							{arrayOfDates ? Math.round(restpaymentCost) : null}€
						</div>
					</>
				)} */}

				<Table striped bordered className="noBotMarg">
					<tbody>
						<tr>
							<td className="alignVert">{t("bookMo1")}</td>
							<td className="alignVert">
								{arrayOfDates ? showDates(`${t("bookMoDateFunc")}`) : null}
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
							<td className="alignVert">{t("bookMo4")}</td>
							<td className="alignVert">{arrayOfDates ? totalBookingCost : null}€</td>
						</tr>
						{totalBookingCost === prepaymentCost ? (
							<>
								<tr>
									<td className="alignVert">{t("bookMo5")}</td>
									<td className="alignVert">{arrayOfDates ? Math.round(prepaymentCost) : null}€</td>
								</tr>
								<tr>
									<td className="alignVert" colSpan="2">{t("bookMo30")}</td>
								</tr>
							</>
						) : (
							<>
								<tr>
									<td className="alignVert">{t("bookMo5")}</td>
									<td className="alignVert">{arrayOfDates ? Math.round(prepaymentCost) : null}€</td>
								</tr>
								<tr>
									<td className="alignVert">
										{t("bookMo6")}
										{t("bookMoDateFunc") === "DE"
											? moment(
													moment(startDate, "YYYY-MM-DD").valueOf() - 2592000000
											  ).format("DD/MM/YYYY")
											: moment(
													moment(startDate, "YYYY-MM-DD").valueOf() - 2592000000
											  ).format("MM/DD/YYYY")}
										{t("bookMo6a")}
									</td>
									<td className="alignVert">{arrayOfDates ? Math.round(restpaymentCost) : null}€</td>
								</tr>
							</>
						)}
					</tbody>
				</Table>
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
