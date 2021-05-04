import React, { useContext } from "react";
import Booking from "./Booking";
import { BookingsContext } from "../../Context/BookingsContext";
import Table from "react-bootstrap/Table";
import "./Bookings.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Bookings = ({ handleShow }) => {
	const { bookingsList, loading } = useContext(BookingsContext);

	const sortedList = bookingsList.sort((a, b) => b.arriveEpoch - a.arriveEpoch);

	const renderData = (data) => {
		return (
			<div>
				<Table
					striped
					bordered
					hover
					// responsive="md"
					size="sm"
					// className="resizeTable"
				>
					<thead>
						<tr>
							{/* <th>arrive epoch</th>
						<th>depart epoch</th> */}
							<th className="resizedTextbox">Airbnb</th>
							<th className="resizedTextbox">Name</th>
							<th className="resizedTextbox">Anreise</th>
							<th className="resizedTextbox">Abreise</th>
							<th className="resizedTextbox">Nächte</th>
							<th className="resizedTextbox">Personen</th>
							<th className="resizedTextbox">Gesamtpreis</th>
							<th className="resizedTextbox">Anzahlung</th>
							<th className="resizedTextbox">Ausstehend</th>
							{/* <th>Amount Owed:</th> */}
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<Booking key={item._id} {...item} />
						))}
					</tbody>
				</Table>
			</div>
		);
	};

	return (
		<>
			{/* {showBookings} */}
			{loading ? (
				"loading..."
			) : sortedList ? (
				<>
					<span id="managementTop">
						<h2>{sortedList.length} Buchungen</h2>
						<div>
							<Button
								variant="success"
								size="lg"
								onClick={handleShow}
								id="addButton"
							>
								<i className="fa fa-plus fa-lg" aria-hidden="true"></i>
							</Button>
							<Link to="/">
								<Button variant="primary" size="lg">
									Home
								</Button>
							</Link>
						</div>
					</span>
					{renderData(sortedList)}
				</>
			) : (
				"Something went wrong"
			)}
		</>
	);
};

export default Bookings;
