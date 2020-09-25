import React, { createContext, useState, useEffect } from "react";

export const BookingsContext = createContext();

const initialList = [];

const BookingsContextProvider = ({ children }) => {
	const [list, setList] = useState(initialList);
	const [loading, setLoading] = useState(true);

	// create with userID
	const createWithID = (userID, values) => {
		// event.preventDefault();
		// http://localhost:4000/api/bookings/${userID}
		fetch(`https://bodensdorf-server.herokuapp.com/api/bookings/${userID}`, {
			method: "post",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...values }),
		})
			.then((res) => res.json())
			.then((res) => setList((prevState) => [...prevState, res]))
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	// create
	const create = (values) => {
		// event.preventDefault();
		// http://localhost:4000/api/bookings/
		fetch(`https://bodensdorf-server.herokuapp.com/api/bookings/`, {
			method: "post",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...values }),
		})
			.then((res) => res.json())
			.then((res) => setList((prevState) => [...prevState, res]))
			.catch((error) => {
				console.error("Error:", error);
			});
	};
	// read

	const getData = async () => {
		// http://localhost:4000/api/bookings/
		const url = "https://bodensdorf-server.herokuapp.com/api/bookings/";
		const response = await fetch(url);
		const data = await response.json();
		setList(data);
		setLoading(false);
	};

	const getDataPerUser = async (userID) => {
		// http://localhost:4000/api/bookings/${userID}
		const url = `https://bodensdorf-server.herokuapp.com/api/bookings/${userID}`;
		const response = await fetch(url);
		const data = await response.json();
		setList(data);
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
		// http://localhost:4000/api/bookings/${_id}
		fetch(`https://bodensdorf-server.herokuapp.com/api/bookings/${_id}`, {
			method: "put",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...values }),
		})
			.then((res) => res.json())			
			.then((res) => {
				const updatedState = list.map((item) => {
					if (item._id !== _id) return item;
					return res;
				});
				setList(updatedState);
			})			
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	//delete
	const deleteItem = (_id) => {
		// http://localhost:4000/api/bookings/${_id}
		fetch(`https://bodensdorf-server.herokuapp.com/api/bookings/${_id}`, {
			method: "delete",
		})
			.then(() => setList(list.filter((item) => item._id !== _id)))
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<BookingsContext.Provider value={{ list, loading, create, update, deleteItem }}>
			{children}
		</BookingsContext.Provider>
	);
};
export default BookingsContextProvider;
