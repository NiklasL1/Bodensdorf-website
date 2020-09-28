import React, { useState, useContext } from "react";
import { UsersContext } from "../../Context/UsersContext";

const AddToList = () => {
	const { create } = useContext(UsersContext);
	const [formState, setFormState] = useState({
		fName: "",
		lName: "",
		email: "",
		telNo: "",
	});

	// useEffect(() => {
	// 	console.log(formState);
	// }, [formState]);

	const handleSubmit = (event) => {
		create(event, formState);
	};

	const handleChange = (event) => {
		event.persist();
		const { id, value } = event.target;
		setFormState((prevState) => {
			return { ...prevState, [id]: value };
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="fName">First Name: </label>
			<input
				type="text"
				id="fName"
				value={formState.fName}
				onChange={handleChange}
			></input>
			<br />
			<label htmlFor="lName">Last Name: </label>
			<input
				type="text"
				id="lName"
				value={formState.lName}
				onChange={handleChange}
			></input>
			<br />
			<label htmlFor="email">E-mail: </label>
			<input
				type="text"
				id="email"
				value={formState.email}
				onChange={handleChange}
			></input>
			<br />
			<label htmlFor="telNo">Telephone #: </label>
			<input
				type="text"
				id="telNo"
				value={formState.telNo}
				onChange={handleChange}
			></input>
			<br />
			<input type="submit" value="Create user" />
		</form>
	);
};

export default AddToList;
