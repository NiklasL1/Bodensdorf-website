import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { BookingsContext } from "../../Context/BookingsContext";
import { useTranslation } from "react-i18next";

const UserProfile = ({ handleClose, show, data }) => {
	const { t } = useTranslation();

	const { bookingsList } = useContext(BookingsContext);
	const filteredList = bookingsList.filter(
		(booking) => booking.userID === data._id
	);

	// const showBookings = () => {
	// 	console.log("this is all the bookings", bookingsList);
	// 	console.log("these are the filtered bookings", filteredList);
	// 	filteredList.map((booking) => {
	// 		console.log(booking.arriveStr, booking.departStr);
	// 		return <input value={`${booking.arriveStr}` - `${booking.departStr}`} />;
	// 	});
	// };

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>{t("user1")}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label column md="12">
							{t("user2")}
						</Form.Label>
						<Col md="12">
							<Form.Control
								readOnly="readonly"
								type="text"
								value={data ? data.fName : null}
							/>
						</Col>
						<Form.Label column md="12">
							{t("user3")}
						</Form.Label>
						<Col md="12">
							<Form.Control
								readOnly="readonly"
								type="text"
								value={data ? data.lName : null}
							/>
						</Col>
						<Form.Label column md="12">
						{t("user4")}
						</Form.Label>
						<Col md="12">
							<Form.Control
								readOnly="readonly"
								type="text"
								value={data ? data.email : null}
							/>
						</Col>
						<Form.Label column md="12">
						{t("user5")}
						</Form.Label>
						<Col md="12">
							<Form.Control
								readOnly="readonly"
								type="text"
								value={data ? data.telNo : null}
							/>
						</Col>
					</Form.Group>
				</Form>
				<h4>{t("user6")}</h4>
				{filteredList
					? filteredList.map((booking) => {
							return (
								<div>
									<hr />
									<p>{t("user7")}{booking.arriveStr}</p>
									<p>{t("user8")}{booking.departStr}</p>
									<p>{t("user9")}{booking.people}</p>
									<p>{t("user10")}{booking.totalPrice}</p>
									<p>{t("user11")}{booking.amtPaid} </p>
									<p>{t("user12")}{booking.amtOwed}</p>
								</div>
							);
					  })
					: null}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					{t("user13")}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default UserProfile;
