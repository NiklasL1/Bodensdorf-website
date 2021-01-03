import React, { useState, useContext, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import BookingButton from "../Header/BookingButton";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { PaymentContext } from "../../Context/PaymentContext";
import { LogContext } from "../../Context/LogContext";

const StripePayment = ({ handleClose }) => {
	const { setSucceeded, succeeded } = useContext(PaymentContext);
	const { logThis } = useContext(LogContext);
	const {
		startDate,
		endDate,
		arrayOfDates,
		prepaymentCost,
		restpaymentCost,
	} = useContext(BookingLogicContext);
	const [product, setProduct] = useState({
		name: `${startDate} - ${endDate}`,
		price: Math.round(prepaymentCost),
	});

	useEffect(() => {
		setProduct({
			name: `${startDate} - ${endDate}`,
			price: Math.round(prepaymentCost),
		});
	}, [prepaymentCost]);

	const makePayment = (token) => {
		const body = {
			token,
			product,
		};
		const headers = {
			"Content-Type": "application/json",
		};		
		return fetch(
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/payment`
				: `${process.env.REACT_APP_PROD_API}/api/payment`,
			{
				method: "POST",
				headers: headers,
				body: JSON.stringify(body),
			}
		)
			.then((res) => {
				logThis("response", res);
				const { status } = res;
				logThis("status", status);
				setSucceeded(true);
				logThis(succeeded);
			})
			.catch((err) => logThis(err));
	};

	return (
		<div>
			<StripeCheckout
				stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
				token={makePayment}
				name={`Anzahlung für ${
					arrayOfDates ? arrayOfDates.length - 1 : null
				} Nächte`}
				// panelLabel="Summe"
				description={`${Math.round(
					restpaymentCost
				)} € Restzahlung 30 Tage vor Anreise`}
				locale="de"
				currency="EUR"
				amount={product.price * 100}
			>
				<BookingButton handleClose={handleClose} />
				{/* <Button variant="danger" size="lg">wow just {product.price} bucks</Button> */}
			</StripeCheckout>
		</div>
	);
};

export default StripePayment;
