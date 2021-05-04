import React, { useState, useContext, useEffect } from "react";
import EditBooking from "./EditBooking";
import UserInfo from "./UserInfo";
import { BookingsContext } from "../../Context/BookingsContext";
import { UsersContext } from "../../Context/UsersContext";
import "./Bookings.css";
import Button from "react-bootstrap/Button";
import { LogContext } from "../../Context/LogContext";
import Image from "react-bootstrap/Image";

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
	name,
}) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	const { update } = useContext(BookingsContext);
	const { list, getUsers } = useContext(UsersContext);
	const { logThis } = useContext(LogContext);
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
		name: name,
	});

	// const handleChange = (event) => {
	// 	event.persist();
	// 	const { name, value } = event.target;
	// 	setValue((prevState) => {
	// 		return { ...prevState, [name]: value };
	// 	});
	// };

	// const handleKeypress = (event) => {
	// 	if (event.key === "Enter") {
	// 		logThis(event.key);
	// 		saveChanges();
	// 	}
	// };

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
				<td className="tableCell">
					{value.airBnB ? <Image src="/img/Airbnb_logo_small.png" rounded /> : <Image src="/img/web_logo.jpg" rounded />}					
				</td>
				{thisUser ? (
					<td className="tableCell clickable" onDoubleClick={handleShow2}>
						{`${thisUser.fName} ${thisUser.lName}`}
					</td>
				) : (
					<td className="tableCell">{`${value.name}`}</td>
				)}
				<td className="tableCell">{`${value.arriveStr}`}</td>
				<td className="tableCell">{`${value.departStr}`}</td>
				<td className="tableCell">
					{`${(value.departEpoch - value.arriveEpoch) / 86400000}`}
				</td>
				<td className="tableCell">{value.people}</td>
				<td className="tableCell">
					{JSON.stringify(value.totalPrice).replace(".", ",")}
				</td>
				<td className="tableCell">
					{JSON.stringify(value.prepayment).replace(".", ",")}
				</td>
				<td className="tableCell">
					{JSON.stringify(value.amtOwed).replace(".", ",")}
				</td>
				{/* <td>
				<input 
					className="resizedTextbox notClickabl
					name="amtOwed"
					type="text"
					readOnly="readonly"
					value={value.amtOwed}
				></input>
			</td>								 */}
				<td className="d-flex justify-content-center">
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
