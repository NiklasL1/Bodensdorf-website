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
			{loginPassword === "65527" &&
			(loginUsername === "niklas" ||
				loginUsername === "heidi" ||
				loginUsername === "tom") ? (
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
