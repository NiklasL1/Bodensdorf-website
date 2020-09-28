import React, { useState, useContext, useEffect } from "react";
import EditBooking from "./EditBooking";
import UserInfo from "./UserInfo";
import { BookingsContext } from "../../Context/BookingsContext";
import { UsersContext } from "../../Context/UsersContext";
import "./Bookings.css";
import Button from "react-bootstrap/Button";

const Booking = ({
	_id,
	airBnB,
	totalPrice,
	prepayment,
	amtPaid,
	amtOwed,
	arriveStr,
	departStr,
	arriveEpoch,
	departEpoch,
	people,
	userID,
}) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	const { update } = useContext(BookingsContext);
	const { list, getUsers } = useContext(UsersContext);
	const [value, setValue] = useState({
		userID: userID,
		airBnB: airBnB,
		totalPrice: totalPrice,
		prepayment: prepayment,
		amtPaid: amtPaid,
		amtOwed: amtOwed,
		arriveStr: arriveStr,
		departStr: departStr,
		arriveEpoch: arriveEpoch,
		departEpoch: departEpoch,
		people: people,
	});

	const handleChange = (event) => {
		event.persist();
		const { name, value } = event.target;
		setValue((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	const handleKeypress = (event) => {
		if (event.key === "Enter") {
			console.log(event.key);
			saveChanges();
		}
	};

	const saveChanges = () => {
		update(_id, value);
	};

	useEffect(() => {
		// getUserByID(value.userID)
		getUsers();
	}, []);

	const thisUser = list ? list.find((user) => user._id === value.userID) : null;

	return (
		<>
			<EditBooking
				handleClose={handleClose}
				show={show}
				_id={_id}
				value={value}
				setValue={setValue}
				thisUser={thisUser}
			/>
			<tr id="row">
				<UserInfo
					handleClose2={handleClose2}
					show2={show2}
					thisUser={thisUser}
				/>
				{/* <td>
				<input 
					className="resizedTextbox"
					onChange={handleChange}
					onKeyPress={handleKeypress}
					name="arriveEpoch"
					type="text"
					readOnly="readonly"
					value={value.arriveEpoch}
				></input>
			</td>
			<td>
				<input 
					className="resizedTextbox"
					onChange={handleChange}
					onKeyPress={handleKeypress}
					name="departEpoch"
					type="text"
					readOnly="readonly"
					value={value.departEpoch}
				></input>
			</td> */}
				<td className="col-1">
					<input
						className="resizedTextbox"
						onChange={handleChange}
						onKeyPress={handleKeypress}
						name="airBnB"
						type="text"
						readOnly="readonly"
						value={value.airBnB}
					></input>
				</td>
				<td onClick={handleShow2}>
					<input
						className="resizedTextbox"
						onChange={handleChange}
						onKeyPress={handleKeypress}
						name="name"
						type="text"
						readOnly="readonly"
						value={thisUser ? `${thisUser.fName} ${thisUser.lName}` : undefined}
					></input>
				</td>
				<td className="resizeTableCell">
					<input
						className="resizedTextbox"
						onChange={handleChange}
						onKeyPress={handleKeypress}
						name="arriveStr"
						type="text"
						readOnly="readonly"
						value={value.arriveStr}
					></input>
				</td>
				<td className="resizeTableCell">
					<input
						className="resizedTextbox"
						onChange={handleChange}
						onKeyPress={handleKeypress}
						name="departStr"
						type="text"
						readOnly="readonly"
						value={value.departStr}
					></input>
				</td>
				<td className="resizeTableCell">
					<input
						className="resizedTextbox"
						onChange={handleChange}
						onKeyPress={handleKeypress}
						name="people"
						type="text"
						readOnly="readonly"
						value={value.people}
					></input>
				</td>
				<td className="resizeTableCell">
					<input
						className="resizedTextbox"
						onChange={handleChange}
						onKeyPress={handleKeypress}
						name="totalPrice"
						type="text"
						readOnly="readonly"
						value={value.totalPrice}
					></input>
				</td>
				<td className="resizeTableCell">
					<input
						className="resizedTextbox"
						onChange={handleChange}
						onKeyPress={handleKeypress}
						name="prepayment"
						type="text"
						readOnly="readonly"
						value={value.prepayment}
					></input>
				</td>
				<td className="resizeTableCell">
					<input
						className="resizedTextbox"
						onChange={handleChange}
						onKeyPress={handleKeypress}
						name="amtPaid"
						type="text"
						readOnly="readonly"
						value={value.amtPaid}
					></input>
				</td>
				{/* <td>
				<input 
					className="resizedTextbox"
					onChange={handleChange}
					onKeyPress={handleKeypress}
					name="amtOwed"
					type="text"
					readOnly="readonly"
					value={value.amtOwed}
				></input>
			</td>								 */}
				<td className="d-flex justify-content-center resizeTableCell">
					<Button variant="primary" onClick={handleShow}>
						<i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
					</Button>
					{/* <button onClick={saveChanges}>Save changes</button> */}
					{/* <DeleteBooking _id={_id} /> */}
				</td>
			</tr>
		</>
	);
};

export default Booking;
