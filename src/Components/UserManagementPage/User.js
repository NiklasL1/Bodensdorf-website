import React, { useState, useContext } from "react";
import DeleteUser from "./DeleteUser";
import { UsersContext } from "../../Context/UsersContext";

const User = ({ _id, fName, lName, email, telNo }) => {
	const {update} = useContext(UsersContext)
	const [value, setValue] = useState({
		fName: fName,
        lName: lName,
        email: email,
        telNo: telNo
	});
	// const [isEditing, setIsEditing] = useState(false);

	const handleChange = (event) => {
		event.persist();
		const { name, value } = event.target;
		setValue((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	// const handleClick = () => {
	// 	setIsEditing(true)
	// };

	// const handleBlur = () => {
	// 	setIsEditing(false)
	// };

	const handleKeypress = (event) => {
		if(event.key === "Enter") {
			console.log(event.key)
			saveChanges()
		}
	};

	const saveChanges = () => {
		update(_id, value) 		
	};

	return (
		<tr id="row">
			<td>
				<input
					onChange={handleChange}
					// onClick={handleClick}
					// onBlur={handleBlur}
					onKeyPress={handleKeypress}
					name="fName"
					type="text"
					value={value.fName}
				></input>
			</td>
			<td>
				<input
					onChange={handleChange}
					// onClick={handleClick}
					// onBlur={handleBlur}
					onKeyPress={handleKeypress}
					name="lName"
					type="text"
					value={value.lName}
				></input>
			</td>
			<td>
				<input
					onChange={handleChange}
					// onClick={handleClick}
					// onBlur={handleBlur}
					onKeyPress={handleKeypress}
					name="email"
					type="text"
					value={value.email}
				></input>
			</td>
            <td>
				<input
					onChange={handleChange}
					// onClick={handleClick}
					// onBlur={handleBlur}
					onKeyPress={handleKeypress}
					name="telNo"
					type="text"
					value={value.telNo}
				></input>
			</td>			
			<td>
				<button onClick={saveChanges}>Save changes</button>
				<DeleteUser _id={_id} />
			</td>
		</tr>
	);
};

export default User;
