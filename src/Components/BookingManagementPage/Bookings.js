import React, { useContext } from "react";
import Booking from "./Booking";
import { BookingsContext } from "../../Context/BookingsContext";
import Table from "react-bootstrap/Table";
import "./Bookings.css";

const Bookings = () => {
	const { bookingsList, loading } = useContext(BookingsContext);

	const sortedList = bookingsList.sort((a, b) => a.arriveEpoch > b.arriveEpoch);

	const renderData = (data) => {
		return (
			<div>
				<Table
					striped
					bordered
					hover
					responsive="md"
					size="sm"
					className="resizeTable"
				>
					<thead>
						<tr>
							{/* <th>arrive epoch</th>
						<th>depart epoch</th> */}
							<th className="resizedTextbox">Airbnb</th>
							<th className="resizedTextbox">Name</th>
							<th className="resizedTextbox">Anreise</th>
							<th className="resizedTextbox">Abreise</th>
							<th className="resizedTextbox">Personen</th>
							<th className="resizedTextbox">Gesamtpreiß</th>
							<th className="resizedTextbox">Anzahlung</th>
							<th className="resizedTextbox">Bisher bezahlt</th>
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
					<h2>{sortedList.length} Buchungen</h2>
					{renderData(sortedList)}
				</>
			) : (
				"Something went wrong"
			)}
		</>
	);
};

export default Bookings;
