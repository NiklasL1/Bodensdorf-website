import React, { useContext } from "react";
import User from "./User";
import { UsersContext } from "../../Context/UsersContext";

const Users = () => {	
	const { list, loading } = useContext(UsersContext);

	const renderData = (data) => {
		return (
			<table id="table">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>E-mail</th>
						<th>Telephone #</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<User key={item._id} {...item} />
					))}
				</tbody>
			</table>
		);
	};

	return (
		<>
			{loading ? (
				"loading..."
			) : 
			list ? (
				<>
					<h2>{list.length} Users</h2>
					{renderData(list)}
				</>
			) : (
				"Something went wrong"
			)}
		</>
	);
};

export default Users;
