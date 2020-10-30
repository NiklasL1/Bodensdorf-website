import React, { useState, useContext, useEffect } from "react";
import ListForm from "./ListForm";
import Bookings from "./Bookings";
import "./Bookings.css";
import { AuthContext } from "../../Context/AuthContext";
import PageNotFound from "../PageNotFound";
import axios from "axios";

const ManagementPage = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { data, setData } = useContext(AuthContext);

	const getUser = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? "http://localhost:4000/api/user"
					: "https://bodensdorf-server.herokuapp.com/api/user",
		}).then((res) => {
			setData(res.data);
			console.log(res);
		});
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<>
			{data ? (
				(data.username === "niklas" && data.lName === "Little") ||
				(data.username === "heidi" && data.lName === "Holzapfel-Little") ||
				(data.username === "tom" && data.lName === "Little") ? (
					<div className="alignPage">
						<ListForm
							handleClose={handleClose}
							show={show}
							handleShow={handleShow}
						/>
						<Bookings handleShow={handleShow} />
					</div>
				) : (
					<PageNotFound />
				)
			) : undefined}
		</>
	);
};

export default ManagementPage;
