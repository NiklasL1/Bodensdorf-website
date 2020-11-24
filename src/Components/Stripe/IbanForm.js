import React, { useContext, useState } from "react";
import { IbanElement } from "@stripe/react-stripe-js";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../Context/AuthContext";
import "./IbanFormStyles.css";
import "./StripeNew.css";

// Custom styling can be passed as options when creating an Element.
const IBAN_STYLE = {
	base: {
		color: "#32325d",
		fontSize: "16px",
		"::placeholder": {
			color: "#aab7c4",
		},
		":-webkit-autofill": {
			color: "#32325d",
		},
	},
	invalid: {
		color: "#fa755a",
		iconColor: "#fa755a",
		":-webkit-autofill": {
			color: "#fa755a",
		},
	},
};

const IBAN_ELEMENT_OPTIONS = {
	supportedCountries: ["SEPA"],
	// Elements can use a placeholder as an example IBAN that reflects
	// the IBAN format of your customer's country. If you know your
	// customer's country, we recommend that you pass it to the Element as the
	// placeholderCountry.
	placeholderCountry: "DE",
	style: IBAN_STYLE,
};

export default function IbanForm({
	onSubmit,
	processing,
	succeeded,
	noStripe,
}) {
	const { t } = useTranslation();
	const { data } = useContext(AuthContext);

	const [userData, setUserData] = useState({
		name: `${data.fName} ${data.lName}`,
		email: data.email,
	});

	const handleChange = (event) => {
		event.persist();
		const { name, value } = event.target;
		setUserData((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	const logit = () => {
		console.log("succeeded:", succeeded, "processing:", processing);
	};

	return (
		<form className="paymentForm" onSubmit={onSubmit}>
			<div className="form-row inline">
				<div className="col">
					<label className="boldIt">
						Name
						<input
							name="name"
							value={userData.name}
							required
							className="ibanOtherInput"
							onChange={handleChange}
						/>
					</label>
				</div>

				<div className="col">
					<label className="boldIt">
						{t("user5")}
						<input
							name="email"
							type="email"
							value={userData.email}
							required
							className="ibanOtherInput"
							onChange={handleChange}
						/>
					</label>
				</div>
			</div>

			<div className="form-row">
				<label id="ibanMainInput">
					IBAN
					<IbanElement
						options={IBAN_ELEMENT_OPTIONS}
						// handleChange={handleChange}
					/>
				</label>
			</div>

			{/* <button type="submit" disabled={disabled}>
				Submit Payment
			</button> */}

			<button
				disabled={processing || succeeded || noStripe}
				id="submit"
				type="submit"
			>
				<span id="button-text">
					{processing ? (
						<div className="spinner" id="spinner"></div>
					) : (
						`${t("payment1")}`
					)}
				</span>
			</button>

			{/* Display mandate acceptance text. */}
			<div className="mandate-acceptance" onClick={logit}>
				By providing your payment information and confirming this payment, you
				authorise (A) Rocketship Inc and Stripe, our payment service provider,
				to send instructions to your bank to debit your account and (B) your
				bank to debit your account in accordance with those instructions. As
				part of your rights, you are entitled to a refund from your bank under
				the terms and conditions of your agreement with your bank. A refund must
				be claimed within 8 weeks starting from the date on which your account
				was debited. Your rights are explained in a statement that you can
				obtain from your bank. You agree to receive notifications for future
				debits up to 2 days before they occur.
			</div>
		</form>
	);
}
