import React, { useState, useContext, useEffect } from "react";
import { BookingsContext } from "../../Context/BookingsContext";
import { UsersContext } from "../../Context/UsersContext";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./Bookings.css";
import Swal from "sweetalert2";

const AddToList = ({ handleClose, show }) => {
	const { create, bookingsList } = useContext(BookingsContext);
	const { list } = useContext(UsersContext);

	const [overlapAdd, setOverlapAdd] = useState(false);
	const [tooShortAdd, setTooShortAdd] = useState(false);

	const sortedList = list.sort((a, b) => a.lName - b.lName);

	const [formState, setFormState] = useState({
		userID: "",
		arriveStr: "",
		departStr: "",
		arriveEpoch: "",
		departEpoch: "",
		airBnB: "",
		totalPrice: "",
		prepayment: "",
		amtPaid: "",
		amtOwed: "",
		people: "2",
	});

	useEffect(() => {
		if (show && formState.userID === "") {
			setFormState((prevState) => {
				return { ...prevState, userID: sortedList[0]._id };
			});
		}
		if (show && formState.airBnB === "") {
			setFormState((prevState) => {
				return { ...prevState, airBnB: "false" };
			});
		}
	}, [show]);

	const checkOverlap = () => {
		bookingsList.forEach((element) => {
			if (
				(formState.arriveEpoch >= element.arriveEpoch &&
					formState.arriveEpoch <= element.departEpoch - 86400000) ||
				(formState.departEpoch >= element.arriveEpoch + 86400000 &&
					formState.departEpoch <= element.departEpoch)
			) {
				setOverlapAdd(true);
				// console.log("overlap")
			}
			if (
				formState.arriveEpoch <= element.arriveEpoch &&
				formState.departEpoch >= element.departEpoch
			) {
				setOverlapAdd(true);
				// console.log("overlap")
			}
			if (formState.departEpoch - formState.arriveEpoch < 345600000) {
				setTooShortAdd(true);
				// console.log("too short")
			}
		});
	};

	useEffect(() => {
		setOverlapAdd(false);
		setTooShortAdd(false);
		checkOverlap();
	}, [formState.arriveEpoch, formState.departEpoch]);

	let pattern = new RegExp(
		"^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$"
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (formState.arriveStr === "") {
			Swal.fire({
				icon: "warning",
				title: "Anreise Datum ist nicht angegeben",
			});
		} else if (formState.departStr === "") {
			Swal.fire({
				icon: "warning",
				title: "Abreise Datum ist nicht angegeben",
			});
		} else if (
			!pattern.test(
				moment(formState.arriveStr, "DD-MM-YYYY").format("YYYY-MM-DD")
			)
		) {
			Swal.fire({
				icon: "warning",
				title: "Anreise Datum ist nicht gültig",
			});
		} else if (
			!pattern.test(
				moment(formState.departStr, "DD-MM-YYYY").format("YYYY-MM-DD")
			)
		) {
			Swal.fire({
				icon: "warning",
				title: "Abreise Datum ist nicht gültig",
			});
		} else if (formState.totalPrice === "") {
			Swal.fire({
				icon: "warning",
				title: "Gesamtpreis ist nicht angegeben",
			});
		} else if (formState.prepayment === "") {
			Swal.fire({
				icon: "warning",
				title: "Anzahlung ist nicht angegeben",
			});
		} else if (formState.amtPaid === "") {
			Swal.fire({
				icon: "warning",
				title: "Bereits bezahlt ist nicht angegeben",
			});
		} else if (formState.amtOwed === "") {
			Swal.fire({
				icon: "warning",
				title: "Ausstehender Betrag ist nicht angegeben",
			});
		} else if (tooShortAdd) {
			Swal.fire({
				icon: "warning",
				title:
					"Anreise Datum muss mindistens vier Tage nach Abreise Datum sein",
			});
		} else if (overlapAdd) {
			Swal.fire({
				icon: "error",
				title: "Datum is bereits bezetzt!",
			});
		} else {
			create(formState);
			handleClose();
			Swal.fire({
				icon: "success",
				title: "Buchung erstellt!",
			});
		}
	};

	const handleChange = (event) => {
		event.persist();
		const { id, value } = event.target;
		setFormState((prevState) => {
			return { ...prevState, [id]: value };
		});
	};

	const handleUser = (event) => {
		event.persist();
		setFormState((prevState) => {
			return { ...prevState, userID: event.target.value };
		});
	};

	useEffect(() => {
		if (formState.arriveStr) {
			setFormState((prevState) => {
				return {
					...prevState,
					arriveEpoch: moment(formState.arriveStr, "DD-MM-YYYY").valueOf(),
				};
			});
		}
	}, [formState.arriveStr]);

	useEffect(() => {
		if (formState.departStr) {
			setFormState((prevState) => {
				return {
					...prevState,
					departEpoch: moment(formState.departStr, "DD-MM-YYYY").valueOf(),
				};
			});
		}
	}, [formState.departStr]);

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Neue Buchung</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label column md="12">
							Gast
						</Form.Label>
						<Col md="12">
							<Form.Control
								as="select"
								// id="arriveStr"
								onChange={handleUser}
							>
								<option disabled selected>
									--- Gast auswählen ---
								</option>
								{sortedList.map((user) => (
									<option key={user._id} value={user._id}>
										{user.fName} {user.lName}
									</option>
								))}
							</Form.Control>
						</Col>
						<Form.Label column md="12">
							Anreise (Datum)
						</Form.Label>
						<Col md="12">
							<Form.Control
								type="text"
								placeholder="TT-MM-JJJJ"
								id="arriveStr"
								value={formState.arriveStr}
								onChange={handleChange}
							/>
						</Col>
						<Form.Label column md="12">
							Abreise (Datum)
						</Form.Label>
						<Col md="12">
							<Form.Control
								type="text"
								placeholder="TT-MM-JJJJ"
								id="departStr"
								value={formState.departStr}
								onChange={handleChange}
							/>
						</Col>
						<Form.Label column md="12">
							Airbnb
						</Form.Label>
						<Col md="12">
							<Form.Control
								as="select"
								id="airBnB"
								value={formState.airBnB}
								onChange={handleChange}
							>
								<option>false</option>
								<option>true</option>
							</Form.Control>
						</Col>
						<Form.Label column md="12">
							Gesamtpreiß
						</Form.Label>
						<Col md="12">
							<Form.Control
								type="number"
								id="totalPrice"
								value={formState.totalPrice}
								onChange={handleChange}
							/>
						</Col>
						<Form.Label column md="12">
							Anzahlung
						</Form.Label>
						<Col md="12">
							<Form.Control
								type="number"
								id="prepayment"
								value={formState.prepayment}
								onChange={handleChange}
							/>
						</Col>
						<Form.Label column md="12">
							Bereits bezahlt
						</Form.Label>
						<Col md="12">
							<Form.Control
								type="number"
								id="amtPaid"
								value={formState.amtPaid}
								onChange={handleChange}
							/>
						</Col>
						<Form.Label column md="12">
							Ausstehender Betrag
						</Form.Label>
						<Col md="12">
							<Form.Control
								type="number"
								id="amtOwed"
								value={formState.amtOwed}
								onChange={handleChange}
							/>
						</Col>
						<Form.Label column md="12">
							Personen
						</Form.Label>
						<Col md="12">
							<Form.Control
								as="select"
								id="people"
								value={formState.people}
								onChange={handleChange}
							>
								<option>2</option>
								<option>3</option>
							</Form.Control>
						</Col>
						<Form.Label column md="12">
							Anreise (Epoche)
						</Form.Label>
						<Col md="12">
							<Form.Control
								readOnly="readonly"
								type="text"
								placeholder="Read only"
								id="arriveEpoch"
								value={formState.arriveEpoch}
								onChange={handleChange}
							/>
						</Col>
						<Form.Label column md="12">
							Abreise (Epoche)
						</Form.Label>
						<Col md="12">
							<Form.Control
								readOnly="readonly"
								type="text"
								placeholder="Read only"
								id="departEpoch"
								value={formState.departEpoch}
								onChange={handleChange}
							/>
						</Col>
					</Form.Group>
					<Button className="alignButton" variant="primary" type="submit">
						Erstellen
					</Button>
				</Form>
			</Modal.Body>
			{/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            close button
            </Button>            
        </Modal.Footer> */}
		</Modal>
	);
};

export default AddToList;
