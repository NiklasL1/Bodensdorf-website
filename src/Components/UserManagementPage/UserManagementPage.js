import React, { useContext } from "react";
import ListForm from "./ListForm";
import Users from "./Users";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import PageNotFound from "../PageNotFound";

const ManagementPage = () => {
	const { loginUsername, loginPassword } = useContext(AuthContext);
	return (
		<>
			{loginPassword === process.env.REACT_APP_MAN_PSWD &&
			(loginUsername === process.env.REACT_APP_MAN_USER_1 ||
				loginUsername === process.env.REACT_APP_MAN_USER_2 ||
				loginUsername === process.env.REACT_APP_MAN_USER_3) ? (
				<div>
					<ListForm />
					<Users />
					<p>
						<Link to="/">Home</Link>{" "}
					</p>
				</div>
			) : (
				<PageNotFound />
			)}
		</>
	);
};

export default ManagementPage;
