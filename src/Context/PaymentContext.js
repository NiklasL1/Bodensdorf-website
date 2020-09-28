import React, { createContext, useState } from "react";

export const PaymentContext = createContext();

const PaymentContextProvider = ({ children }) => {
	const [succeeded, setSucceeded] = useState(false);

	return (
		<PaymentContext.Provider
			value={{
				succeeded,
				setSucceeded,
			}}
		>
			{children}
		</PaymentContext.Provider>
	);
};

export default PaymentContextProvider;
