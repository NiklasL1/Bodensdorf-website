import React, { useState, useContext, useEffect } from "react";
import ListForm from "./ListForm";
import Bookings from "./Bookings";
import "./Bookings.css";
import { AuthContext } from "../../Context/AuthContext";
import PageNotFound from "../PageNotFound";
import axios from "axios";
import { LogContext } from "../../Context/LogContext";

const ManagementPage = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { data, setData } = useContext(AuthContext);
	const { logThis } = useContext(LogContext);

	const getUser = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? `${process.env.REACT_APP_DEV_API}/api/user`
					: `${process.env.REACT_APP_PROD_API}/api/user`,
		}).then((res) => {
			setData(res.data);
			logThis(res);
		});
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<>
			{data ? (
				(data.username === process.env.REACT_APP_MAN_USER_1 && data.lName === process.env.REACT_APP_MAN_USER_LASTNAME) ||
				(data.username === process.env.REACT_APP_MAN_USER_2 && data.lName === process.env.REACT_APP_MAN_USER_LASTNAME) ||
				(data.username === process.env.REACT_APP_MAN_USER_3 && data.lName === process.env.REACT_APP_MAN_USER_LASTNAME) ? (
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
