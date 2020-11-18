import React, { createContext, useState, useEffect } from "react";

export const BookingsContext = createContext();

const initialList = [];

const BookingsContextProvider = ({ children }) => {
	const [bookingsList, setBookingsList] = useState(initialList);
	const [loading, setLoading] = useState(true);

	// create with userID
	const createWithID = (userID, values) => {
		fetch(
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/bookings/${userID}`
				: `${process.env.REACT_APP_PROD_API}/api/bookings/${userID}`,
			{
				method: "post",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...values }),
			}
		)
			.then((res) => res.json())
			.then((res) => setBookingsList((prevState) => [...prevState, res]))
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	// create
	const create = (values) => {
		fetch(
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/bookings/`
				: `${process.env.REACT_APP_PROD_API}/api/bookings/`,
			{
				method: "post",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...values }),
			}
		)
			.then((res) => res.json())
			.then((res) => setBookingsList((prevState) => [...prevState, res]))
			.catch((error) => {
				console.error("Error:", error);
			});
	};
	// read

	const getData = async () => {
		const url =
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/bookings/`
				: `${process.env.REACT_APP_PROD_API}/api/bookings/`;
		const response = await fetch(url);
		const data = await response.json();
		setBookingsList(data);
		setLoading(false);
	};

	const getDataPerUser = async (userID) => {
		const url =
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/bookings/${userID}`
				: `${process.env.REACT_APP_PROD_API}/api/bookings/${userID}`;
		const response = await fetch(url);
		const data = await response.json();
		setBookingsList(data);
		setLoading(false);
	};

	useEffect(() => {
		getData();
		// fetch("http://localhost:4000/api/bookings")
		// 	.then((res) => res.json())
		// 	.then((res) => setState(res));
	}, []);

	//update
	const update = (_id, values) => {
		fetch(
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/bookings/${_id}`
				: `${process.env.REACT_APP_PROD_API}/api/bookings/${_id}`,
			{
				method: "put",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...values }),
				// body: { ...values },
			}
		)
			.then((res) => res.json())
			.then((res) => {
				const updatedState = bookingsList.map((item) => {
					if (item._id !== _id) return item;
					return res;
				});
				setBookingsList(updatedState);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	//delete
	const deleteItem = (_id) => {
		fetch(
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/bookings/${_id}`
				: `${process.env.REACT_APP_PROD_API}/api/bookings/${_id}`,
			{
				method: "delete",
			}
		)
			.then(() =>
				setBookingsList(bookingsList.filter((item) => item._id !== _id))
			)
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<BookingsContext.Provider
			value={{ bookingsList, loading, create, update, deleteItem }}
		>
			{children}
		</BookingsContext.Provider>
	);
};
export default BookingsContextProvider;
