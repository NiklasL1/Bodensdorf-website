import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { PaymentContext } from "./PaymentContext";
import { BookingLogicContext } from "./BookingLogicContext";
import moment from "moment";
import i18n from "../i18n";

export const MailContext = createContext();

const MailContextProvider = ({ children }) => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [subject, setSubject] = useState("");
	const [content, setContent] = useState("");

	const { data } = useContext(AuthContext);
	const { thisBooking } = useContext(PaymentContext);
	const { bookingDetails } = useContext(BookingLogicContext);

	let paymentType = JSON.parse(localStorage.getItem("payment"));

	let firstName =
		paymentType === "sofort"
			? JSON.parse(localStorage.getItem("data")).fName
			: data
			? data.fName
			: undefined;
	let lastName =
		paymentType === "sofort"
			? JSON.parse(localStorage.getItem("data")).lName
			: data
			? data.lName
			: undefined;
	let currentEmail =
		paymentType === "sofort"
			? JSON.parse(localStorage.getItem("data")).email
			: email;
	let currentMessage =
		paymentType === "sofort"
			? JSON.parse(localStorage.getItem("message"))
			: message;
	let currentBookingInitial =
		paymentType === "sofort"
			? JSON.parse(localStorage.getItem("booking"))
			: bookingDetails;
	let currentBookingRemainder =
		paymentType === "sofort"
			? JSON.parse(localStorage.getItem("booking"))
			: thisBooking
			? thisBooking
			: undefined;

	useEffect(() => {
		console.log(
			currentBookingInitial,
			currentBookingRemainder,
			currentMessage,
			i18n.language
		);
		if (currentMessage === "register") {
			if (i18n.language.substring(0, 2) === "en") {
				setSubject(
					"Registration confirmation - Lake Ossiach holiday apartment"
				);
				setContent(`Dear ${firstName} ${lastName}, \r
				Thank you for registering an account with us. We have stored the following personal information you provided\r\r 
				Name: ${firstName} ${lastName}\r
				E-mail: ${data.email}\r
				Telephone: ${data.telNo}\r
				Your data are stored securely and will not be shared with any third parties without your express consent.\r
				We look forward to being able to welcome you to our holiday apartment soon!\r
				Kind regards,\r
				The Holzapfel-Littles`);
			} else if (i18n.language.substring(0, 2) === "de") {
				setSubject(`Konto angelegt - Ossiacher See Ferienwohnung`);
				setContent(`registriert`);
			}
		} else if (currentMessage === "bookingPreChoseFull") {
			if (i18n.language.substring(0, 2) === "en") {
				setSubject(`Booking confirmation - Lake Ossiach holiday apartment`);
				let emailText = `Dear ${firstName} ${lastName},\r

				Thank you for booking a stay at our holiday aparment on Lake Ossiach!\r
				
				Your date of arrival is the ${moment(
					currentBookingInitial.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} and your date of depature will be the ${moment(
					currentBookingInitial.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Please note that check-in is from 16:00 to 19:00 o'clock on the day of arrival and check-out is by 10:00 on the day of departure.\r			

				As you have chosen to immediately pay the full amount of ${
					currentBookingInitial.amtPaid
				}€, your booking is confirmed and no further action is required. Thank you! \r
				
				For any further inquiries about your stay, please contact heidi@tomlittle.org, if possible in a timely manner, as it may take up to a week for you to receive a reply.\r
				
				We thank you for your booking and hope you have a fantasic stay in our apartment!\r
				
				Kind Regards,\r
				
				The Holzapfel-Littles`;
				setContent(emailText.trim());
			} else if (i18n.language.substring(0, 2) === "de") {
				setSubject(`Buchungsbestätigung - Ossiacher See Ferienwohnung`);
				let emailText = `Sehr geehrte(r) ${firstName} ${lastName},\r

				herzlichen Dank für Ihre Reservierung in unserer Ferienwohnung am Ossiacher See!
				
				Ihr Ankunftsdatum is der ${moment(
					currentBookingInitial.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} und ihr Abreisedatum ist der ${moment(
					currentBookingInitial.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Bitte beachten Sie die Check-in und Check-out Zeiten: 16:00 bis 19:00 Uhr am Ankunftstag und bis 10:00 am Abreisetag.
				
				Sie haben sich entschieden bei Ihrer Reservierung die Gesamtsumme von ${
					currentBookingInitial.amtPaid
				}€ für Ihre Buchung zu zahlen. Vielen Dank dafür! Es ist keine weitere Aktion ihrerseits erforderlich.
				
				Für weitere Fragen, senden Sie uns bitte eine E-mail an heidi@tomlittle.org. Möglichst nicht zu kurzfristig, da es in machen Fällen bis zu einer Woche dauern könnte, bis Sie eine Antwort erhalten.
				
				Vielen Dank für Ihre Buchung und wir wünschen Ihnen eine fantastische Zeit in unserer Wohnung!
				
				Mit freundlichen Grüßen,
				
				Familie Holzapfel-Little`;
				setContent(emailText.trim());
			}
		} else if (currentMessage === "bookingPreForceFull") {
			if (i18n.language.substring(0, 2) === "en") {
				setSubject("Booking confirmation - Lake Ossiach holiday apartment");
				let emailText = `Dear ${firstName} ${lastName},\r

				Thank you for booking a stay at our holiday aparment on Lake Ossiach!\r
				
				Your date of arrival is the ${moment(
					currentBookingInitial.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} and your date of depature will be the ${moment(
					currentBookingInitial.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Please note that check-in is from 16:00 to 19:00 o'clock on the day of arrival and check-out is by 10:00 on the day of departure.\r
				
				As your date of reservation lies within the next 30 days, you have paid the booking in full totalling ${
					currentBookingInitial.amtPaid
				}€. No further action is required concerning payment.\r
				
				For any further inquiries about your stay, please contact heidi@tomlittle.org, if possible in a timely manner, as it may take up to a week for you to receive a reply.\r
				
				We thank you for your booking and hope you have a fantasic stay in our apartment!\r
				
				Kind Regards,\r
				
				The Holzapfel-Littles`;
				setContent(emailText.trim());
			} else if (i18n.language.substring(0, 2) === "de") {
				setSubject(`Buchungsbestätigung - Ossiacher See Ferienwohnung`);
				let emailText = `Sehr geehrte(r) ${firstName} ${lastName},

				herzlichen Dank für Ihre Reservierung in unser Ferienwohnung am Ossiacher See!
				
				Ihr Ankunftsdatum is der ${moment(
					currentBookingInitial.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} und ihr Abreisedatum ist der ${moment(
					currentBookingInitial.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Bitte beachten Sie die Check-in und Check-out Zeiten: 16:00 bis 19:00 Uhr am Ankunftstag und bis 10:00 am Abreisetag.
				
				Da Ihr Reservierungsdatum binnen 30 Tagen liegt, haben Sie die Gesamtsumme von ${
					currentBookingInitial.amtPaid
				}€ für Ihre Buchung gezahlt. Daher ist keine weitere Aktion ihrerseits erforderlich.
				
				Für weitere Fragen, senden Sie uns bitte eine E-mail an heidi@tomlittle.org. Möglichst nicht zu kurzfristig, da es in machen Fällen bis zu einer Woche dauern könnte, bis Sie eine Antwort erhalten.
				
				Vielen Dank für Ihre Buchung und wir wünschen Ihnen eine fantastische Zeit in unserer Wohnung!
				
				Mit freundlichen Grüßen,
				
				Familie Holzapfel-Little`;
				setContent(emailText.trim());
			}
		} else if (currentMessage === "bookingPrePaid") {
			if (i18n.language.substring(0, 2) === "en") {
				setSubject(`Booking confirmation - Lake Ossiach holiday apartment`);
				let emailText = `Dear ${firstName} ${lastName},\r

				thank you for booking a stay at our holiday aparment on Lake Ossiach!\r
				
				Your date of arrival is the ${moment(
					currentBookingInitial.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} and your date of depature will be the ${moment(
					currentBookingInitial.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Please note that check-in is from 16:00 to 19:00 o'clock on the day of arrival and check-out is by 10:00 on the day of departure.\r
				
				Your booking costs ${currentBookingInitial.totalPrice}€ in total.
				You have paid a deposit of ${
					currentBookingInitial.amtPaid
				}€ to reserve the dates above. The payment remainder of ${
					currentBookingInitial.amtOwed
				}€ is due by ${moment(
					currentBookingInitial.arriveEpoch - 2592000000
				).format(
					"DD.MM.YYYY"
				)}. Should you fail to make the remaining payment by the due date, your reservation may be cancelled.\r
				
				For any further inquiries about your stay, please contact heidi@tomlittle.org, if possible in a timely manner, as it may take up to a week for you to receive a reply.\r
				
				We thank you for your booking and hope you have a fantasic stay in our apartment!\r
				
				Kind Regards,\r
				
				The Holzapfel-Littles`;
				setContent(emailText.trim());
			} else if (i18n.language.substring(0, 2) === "de") {
				setSubject(`Buchungsbestätigung - Ossiacher See Ferienwohnung`);
				let emailText = `Sehr geehrte(r) ${firstName} ${lastName},

				herzlichen Dank für Ihre Reservierung in unser Ferienwohnung am Ossiacher See!
				
				Ihr Ankunftsdatum is der ${moment(
					currentBookingInitial.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} und ihr Abreisedatum ist der ${moment(
					currentBookingInitial.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Bitte beachten Sie die Check-in und Check-out Zeiten: 16:00 bis 19:00 Uhr am Ankunftstag und bis 10:00 am Abreisetag.
				
				Ihr Aufenthalt kostest insgesamt ${
					currentBookingInitial.totalPrice
				}€. Sie haben bereits eine Anzahlung von ${
					currentBookingInitial.amtPaid
				}€ geleistet um die obengennanten Daten zu reservieren. Die restliche Zahlung von ${
					currentBookingInitial.amtOwed
				}€ ist fällig am ${moment(
					currentBookingInitial.arriveEpoch - 2592000000
				).format(
					"DD.MM.YYYY"
				)}. Sollten Sie bis zu dem Fälligkeitsdatum die restliche Zahlung nicht erbracht haben, könnte Ihre Reservierung storniert werden.
				
				Für weitere Fragen, senden Sie uns bitte eine E-mail an heidi@tomlittle.org. Möglichst nicht zu kurzfristig, da es in machen Fällen bis zu einer Woche dauern könnte, bis Sie eine Antwort erhalten.
				
				Vielen Dank für Ihre Buchung und wir wünschen Ihnen eine fantastische Zeit in unserer Wohnung!
				
				Mit freundlichen Grüßen,
				
				Familie Holzapfel-Little`;
				setContent(emailText.trim());
			}
		} else if (
			currentMessage === "bookingRestPaid" &&
			currentBookingRemainder
		) {
			if (i18n.language.substring(0, 2) === "en") {
				setSubject(`Payment confirmation - Lake Ossiach holiday apartment`);
				let emailText = `Dear ${firstName} ${lastName},

				We have received the remaining payment of ${
					currentBookingRemainder.totalPrice -
					currentBookingRemainder.prepayment
				}€ on your booking. Together with the previously paid deposit of ${
					currentBookingRemainder.prepayment
				}€, you have paid your total booking cost of ${
					currentBookingRemainder.totalPrice
				}€ in full. Thank you!
				
				Your date of arrival is the ${moment(
					currentBookingRemainder.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} and your date of depature will be the ${moment(
					currentBookingRemainder.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Please note that check-in is from 16:00 to 19:00 o'clock on the day of arrival and check-out is by 10:00 on the day of departure.
				
				For any further inquiries about your stay, please contact heidi@tomlittle.org, if possible in a timely manner, as it may take up to a week for you to receive a reply.
				
				We thank you for your booking and hope you have a fantasic stay in our apartment!
				
				Kind Regards,
				
				The Holzapfel-Littles`;
				setContent(emailText.trim());
			} else if (i18n.language.substring(0, 2) === "de") {
				setSubject(`Zahlungsbestätigung - Ossiacher See Ferienwohnung`);
				let emailText = `Sehr geehrte(r) ${firstName} ${lastName},

				Sie haben eine Restzahlung von ${
					currentBookingRemainder.totalPrice -
					currentBookingRemainder.prepayment
				}€ getätigt. Zusammen mit der schon bezahlten Anzahlung von ${
					currentBookingRemainder.prepayment
				}€, haben Sie die Gesamtbuchungskosten von ${
					currentBookingRemainder.totalPrice
				}€ vollständig bezahlt. Vielen Dank!
				
				Ihr Ankunftsdatum is der ${moment(
					currentBookingRemainder.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} und ihr Abreisedatum ist der ${moment(
					currentBookingRemainder.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Bitte beachten Sie die Check-in und Check-out Zeiten: 16:00 bis 19:00 Uhr am Ankunftstag und bis 10:00 am Abreisetag.
				
				Für weitere Fragen, senden Sie uns bitte eine E-mail an heidi@tomlittle.org. Möglichst nicht zu kurzfristig, da es in machen Fällen bis zu einer Woche dauern könnte, bis Sie eine Antwort erhalten.
				
				Vielen Dank für Ihre Buchung und wir wünschen Ihnen eine fantastische Zeit in unserer Wohnung!
				
				Mit freundlichen Grüßen,
				
				Familie Holzapfel-Little`;
				setContent(emailText.trim());
			}
		} else if (currentMessage === "reminder14Days") {
			setSubject("booking payment due in two weeks");
			setContent(
				"the rest of the payment for your booking is due in two weeks"
			);
		} else if (currentMessage === "reminder7Days") {
			setSubject("booking payment due in one week");
			setContent("the rest of the payment for your booking is due in one week");
		} else if (currentMessage === "reminderFinal") {
			setSubject("IMPORTANT!!! booking payment due TODAY");
			setContent("the rest of the payment for your booking is due TODAY");
		} else if (currentMessage === "bookingCancelled") {
			setSubject("booking cancelled");
			setContent(
				"your booking was cancelled because you did not pay the rest of it by the deadline"
			);
		}
	}, [currentMessage, currentBookingRemainder]);

	const sendEmail = async () => {
		console.log(currentEmail, subject, content);
		const response = await fetch(
			process.env.REACT_APP_LOCATION === "development"
				? `${process.env.REACT_APP_DEV_API}/api/mail/access`
				: `${process.env.REACT_APP_PROD_API}/api/mail/access`,
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					email: currentEmail,
					subject: subject,
					content: content,
				}),
			}
		);
		const resData = await response.json();
		// if (resData.status === "success") {
		// 	alert("Message Sent.");
		// } else if (resData.status === "fail") {
		// 	alert("Message failed to send.");
		// }
	};

	return (
		<MailContext.Provider value={{ sendEmail, setMessage, setEmail, message }}>
			{children}
		</MailContext.Provider>
	);
};

export default MailContextProvider;
