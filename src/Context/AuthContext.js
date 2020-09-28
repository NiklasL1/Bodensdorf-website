import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [data, setData] = useState(null);
	const [loginUsername, setLoginUsername] = useState("");
	// const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	return (
		<AuthContext.Provider
			value={{
				data,
				setData,
				loginUsername,
				setLoginUsername,
				loginPassword,
				setLoginPassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
