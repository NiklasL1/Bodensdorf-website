import React, { createContext, useState } from "react";

export const PaymentContext = createContext();

const PaymentContextProvider = ({ children }) => {
	const [showStripe, setShowStripe] = useState(false);
	const handleCloseStripe = () => setShowStripe(false);
	const handleShowStripe = () => {
		setShowStripe(true);
	};

	const [succeeded, setSucceeded] = useState(false);
	const [payingRemainder, setPayingRemainder] = useState(false);
	const [outstandingPayment, setOutstandingPayment] = useState(false);
	const [thisBooking, setThisBooking] = useState();

	return (
		<PaymentContext.Provider
			value={{
				succeeded,
				setSucceeded,
				payingRemainder,
				setPayingRemainder,
				outstandingPayment,
				setOutstandingPayment,
				handleShowStripe,
				handleCloseStripe,
				showStripe,
				thisBooking,
				setThisBooking,
			}}
		>
			{children}
		</PaymentContext.Provider>
	);
};

export default PaymentContextProvider;
