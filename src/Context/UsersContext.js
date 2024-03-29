import React, { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

const initialList = [];

const UsersContextProvider = ({ children }) => {
	const [list, setList] = useState(initialList);
	const [loading, setLoading] = useState(true);
	const [passwordUpdated, setPasswordUpdated] = useState(false)

	// // create
	// const create = (event, values) => {
	// 	event.preventDefault();
	// 	fetch("http://localhost:4000/api/users", {
	// 		method: "post",
	// 		headers: {
	// 			Accept: "application/json, text/plain, */*",
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({ ...values }),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => setList((prevState) => [...prevState, res]))
	// 		.catch((error) => {
	// 			console.error("Error:", error);
	// 		});
	// };

	// read
	const getUsers = async () => {
		const url =
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/users/`
				: `${process.env.REACT_APP_PROD_API}/api/users/`;
		const response = await fetch(url);
		const data = await response.json();
		setList(data);
		setLoading(false);
	};

	// read by userID
	const getUserByID = async (id) => {
		const url =
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/users/${id}`
				: `${process.env.REACT_APP_PROD_API}/api/users/${id}`;
		const response = await fetch(url);
		const data = await response.json();
		setList(data);
		setLoading(false);
	};

	useEffect(() => {
		getUsers();
		// fetch("http://localhost:4000/api/users")
		// 	.then((res) => res.json())
		// 	.then((res) => setState(res));
	}, []);

	//update
	const update = (_id, values) => {
		fetch(
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/users/${_id}`
				: `${process.env.REACT_APP_PROD_API}/api/users/${_id}`,
			{
				method: "put",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...values }),
			}
		)
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

	const updatePassword = (_id, values) => {
		fetch(
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/users/password/${_id}`
				: `${process.env.REACT_APP_PROD_API}/api/users/password/${_id}`,
			{
				method: "put",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...values }),
			}
		)
			.then((res) => res.json())
			.then((res) => {
				const updatedState = list.map((item) => {
					if (item._id !== _id) return item;
					return res;
				});
				setList(updatedState);
				setPasswordUpdated(true)
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	//delete
	const deleteItem = (_id) => {
		fetch(
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/users/${_id}`
				: `${process.env.REACT_APP_PROD_API}/api/users/${_id}`,
			{
				method: "delete",
			}
		)
			.then(() => setList(list.filter((item) => item._id !== _id)))
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<UsersContext.Provider
			value={{ list, loading, update, deleteItem, getUserByID, getUsers, updatePassword, passwordUpdated }}
		>
			{children}
		</UsersContext.Provider>
	);
};
export default UsersContextProvider;
