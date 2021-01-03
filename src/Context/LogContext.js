import React, { createContext } from "react";

export const LogContext = createContext();

const LogContextProvider = ({ children }) => {
	const logThis = (data, data2, data3, data4, data5) => {
		if (process.env.REACT_APP_LOCATION === "development")
			return console.log(data, data2, data3, data4, data5);
	};

	return (
		<LogContext.Provider value={{ logThis }}>{children}</LogContext.Provider>
	);
};

export default LogContextProvider;
