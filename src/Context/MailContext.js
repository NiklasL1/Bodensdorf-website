import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { PaymentContext } from "./PaymentContext";
import { BookingLogicContext } from "./BookingLogicContext";
import moment from "moment";
import i18n from "../i18n";
import dedent from "dedent-js";
import { LogContext } from "./LogContext";

export const MailContext = createContext();

const MailContextProvider = ({ children }) => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [registerMessage, setRegisterMessage] = useState(false);
	const [subject, setSubject] = useState("subject");
	const [content, setContent] = useState("content");
	const [registerSubject, setRegisterSubject] = useState("subject");
	const [registerContent, setRegisterContent] = useState("content");

	const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
	const [forgotPasswordCode, setForgotPasswordCode] = useState("");
	const [sendingForgotPasswordEmail, setSendingForgotPasswordEmail] =
		useState(false);
	const [forgotPasswordEmailSent, setForgotPasswordEmailSent] = useState(false);

	const {
		data,
		registerFirstName,
		registerLastName,
		registerEmail,
		registerTelNo,
	} = useContext(AuthContext);
	const { thisBooking } = useContext(PaymentContext);
	const { bookingDetails } = useContext(BookingLogicContext);
	const { logThis } = useContext(LogContext);

	let paymentMethod = JSON.parse(localStorage.getItem("payment"));

	let firstName =
		paymentMethod === "sofort"
			? JSON.parse(localStorage.getItem("data")).fName
			: data
			? data.fName
			: undefined;
	let lastName =
		paymentMethod === "sofort"
			? JSON.parse(localStorage.getItem("data")).lName
			: data
			? data.lName
			: undefined;
	let currentEmail =
		paymentMethod === "sofort"
			? JSON.parse(localStorage.getItem("data")).email
			: email;
	let currentMessage =
		paymentMethod === "sofort"
			? JSON.parse(localStorage.getItem("message"))
			: message;
	let currentBookingInitial =
		paymentMethod === "sofort"
			? JSON.parse(localStorage.getItem("booking"))
			: bookingDetails;
	let currentBookingRemainder =
		paymentMethod === "sofort"
			? JSON.parse(localStorage.getItem("booking"))
			: thisBooking
			? thisBooking
			: undefined;

	useEffect(() => {
		if (registerMessage) {
			if (i18n.language.substring(0, 2) === "en") {
				setRegisterSubject(
					"Registration confirmation - Lake Ossiach holiday apartment"
				);
				let emailText = `Dear ${registerFirstName} ${registerLastName}, \r

				Thank you for registering an account with us. We have stored the following personal information you provided:\r

				Name: ${registerFirstName} ${registerLastName}\r
				E-mail: ${registerEmail}\r
				Telephone: ${registerTelNo}\r

				Your data are stored securely and will not be shared with any third parties without your express consent.\r

				We look forward to being able to welcome you to our holiday apartment soon!\r

				Kind regards,\r
				
				The Holzapfel-Littles\r
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setRegisterContent(dedent(emailText));
			} else if (i18n.language.substring(0, 2) === "de") {
				setRegisterSubject(`Konto angelegt - Ossiacher See Ferienwohnung`);
				let emailText = `Sehr geehrte(r) ${registerFirstName} ${registerLastName}, \r

				ihr Konto wurde erfolgreich angelegt. Wir haben die Folgenden persönlichen Daten, die Sie angegeben haben, für Sie gespeichert:\r

				Name: ${registerFirstName} ${registerLastName}\r
				E-mail: ${registerEmail}\r
				Telefon Nr.: ${registerTelNo}\r

				Ihre Daten sind sicher gespeichert und werden ohne Ihre ausdrückliche Erlaubnis nicht an Dritte weitergegeben.\r

				Wir freuen uns, Sie bald in unserer Ferienwohnung willkommen heißen zu dürfen!\r

				Mit freundlichen Grüßen,
				
				Familie Holzapfel-Little
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setRegisterContent(dedent(emailText));
			}
		}
	}, [registerMessage]);

	useEffect(() => {
		logThis(
			"from MailContext",
			currentBookingInitial,
			currentBookingRemainder,
			currentMessage,
			i18n.language
		);
		if (currentMessage === "bookingPreChoseFull") {
			if (i18n.language.substring(0, 2) === "en") {
				setSubject(`Booking confirmation - Lake Ossiach holiday apartment`);
				let emailText = `Dear ${firstName} ${lastName},\r

				Thank you for booking a stay at our holiday apartment on Lake Ossiach!\r
				
				Your date of arrival is the ${moment(
					currentBookingInitial.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} and your date of departure will be the ${moment(
					currentBookingInitial.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Please note that check-in is from 16:00 to 19:00 o'clock on the day of arrival and check-out is by 10:00 on the day of departure.\r

				As you have chosen to immediately pay the full amount of ${
					currentBookingInitial.amtPaid
				}€, your booking is confirmed and no further action is required. Thank you! \r
				
				For any further inquiries about your stay, please contact heidi@tomlittle.org, or send a Signal or text message to +4915111353000, if possible in a timely manner. It may take some time for you to receive an answer.\r
				
				We thank you for your booking and hope you have a fantastic stay in our holiday apartment!\r
				
				Kind Regards,\r
				
				The Holzapfel-Littles\r
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setContent(dedent(emailText));
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
				
				Für weitere Fragen senden Sie uns bitte eine E-mail an heidi@tomlittle.org, oder per Signal oder SMS an +4915111353000. Möglichst nicht zu kurzfristig, da es in machen Fällen etwas dauern könnte, bis Sie eine Antwort erhalten.
				
				Vielen Dank für Ihre Buchung und wir wünschen Ihnen eine fantastische Zeit in unserer Ferienwohnung!
				
				Mit freundlichen Grüßen,
				
				Familie Holzapfel-Little
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setContent(dedent(emailText));
			}
		} else if (currentMessage === "bookingPreForceFull") {
			if (i18n.language.substring(0, 2) === "en") {
				setSubject("Booking confirmation - Lake Ossiach holiday apartment");
				let emailText = `Dear ${firstName} ${lastName},\r

				Thank you for booking a stay at our holiday apartment on Lake Ossiach!\r
				
				Your date of arrival is the ${moment(
					currentBookingInitial.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} and your date of departure will be the ${moment(
					currentBookingInitial.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Please note that check-in is from 16:00 to 19:00 o'clock on the day of arrival and check-out is by 10:00 on the day of departure.\r
				
				As your date of reservation lies within the next 30 days, you have paid the booking in full totalling ${
					currentBookingInitial.amtPaid
				}€. No further action is required concerning payment.\r
				
				For any further inquiries about your stay, please contact heidi@tomlittle.org, or send a Signal or text message to +4915111353000, if possible in a timely manner. It may take some time for you to receive an answer.\r
				
				We thank you for your booking and hope you have a fantastic stay in our holiday apartment!\r
				
				Kind Regards,\r
				
				The Holzapfel-Littles\r
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setContent(dedent(emailText));
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
				
				Für weitere Fragen senden Sie uns bitte eine E-mail an heidi@tomlittle.org, oder per Signal oder SMS an +4915111353000. Möglichst nicht zu kurzfristig, da es in machen Fällen etwas dauern könnte, bis Sie eine Antwort erhalten.
				
				Vielen Dank für Ihre Buchung und wir wünschen Ihnen eine fantastische Zeit in unserer Ferienwohnung!
				
				Mit freundlichen Grüßen,
				
				Familie Holzapfel-Little
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setContent(dedent(emailText));
			}
		} else if (currentMessage === "bookingPrePaid") {
			if (i18n.language.substring(0, 2) === "en") {
				setSubject(`Booking confirmation - Lake Ossiach holiday apartment`);
				let emailText = `Dear ${firstName} ${lastName},\r

				Thank you for booking a stay at our holiday apartment on Lake Ossiach!\r
				
				Your date of arrival is the ${moment(
					currentBookingInitial.arriveStr,
					"DD-MM-YYYY"
				).format("DD.MM.YYYY")} and your date of departure will be the ${moment(
					currentBookingInitial.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Please note that check-in is from 16:00 to 19:00 o'clock on the day of arrival and check-out is by 10:00 on the day of departure.\r
				
				Your booking costs ${
					currentBookingInitial.totalPrice
				}€ in total. You have paid a deposit of ${
					currentBookingInitial.amtPaid
				}€ to reserve the dates above. The payment remainder of ${
					currentBookingInitial.amtOwed
				}€ is due by ${moment(
					currentBookingInitial.arriveEpoch - 2592000000
				).format(
					"DD.MM.YYYY"
				)}. Should you fail to make the remaining payment by the due date, your reservation may be cancelled. To make the remaining payment, please log in to your account and click on the "My Account" icon, the rightmost icon in the menu on the top right of your screen. You will see a list of your bookings and can click on the "Pay balance" button to pay the oustanding amount for your booking.\r
				
				For any further inquiries about your stay, please contact heidi@tomlittle.org, or send a Signal or text message to +4915111353000, if possible in a timely manner. It may take some time for you to receive an answer.\r
				
				We thank you for your booking and hope you have a fantastic stay in our holiday apartment!\r
				
				Kind Regards,\r
				
				The Holzapfel-Littles\r
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setContent(dedent(emailText));
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
				)}. Sollten Sie bis zu dem Fälligkeitsdatum die restliche Zahlung nicht erbracht haben, könnte Ihre Reservierung storniert werden. Bitte zahlen Sie indem Sie sich in Ihrem Konto anmelden und dann auf den "Mein Konto" Knopf klicken. Dieser befindet sich in dem Menu oben rechts, nachdem Sie sich angemeldet haben. Sie sehen dann eine Liste Ihrer Buchungen und können die Zahlung tätigen, indem Sie auf "Restbetrag zahlen" klicken.
				
				Für weitere Fragen senden Sie uns bitte eine E-mail an heidi@tomlittle.org, oder per Signal oder SMS an +4915111353000. Möglichst nicht zu kurzfristig, da es in machen Fällen etwas dauern könnte, bis Sie eine Antwort erhalten.
				
				Vielen Dank für Ihre Buchung und wir wünschen Ihnen eine fantastische Zeit in unserer Ferienwohnung!
				
				Mit freundlichen Grüßen,
				
				Familie Holzapfel-Little
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setContent(dedent(emailText));
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
				).format("DD.MM.YYYY")} and your date of departure will be the ${moment(
					currentBookingRemainder.departStr,
					"DD-MM-YYYY"
				).format(
					"DD.MM.YYYY"
				)}. Please note that check-in is from 16:00 to 19:00 o'clock on the day of arrival and check-out is by 10:00 on the day of departure.
				
				For any further inquiries about your stay, please contact heidi@tomlittle.org, or send a Signal or text message to +4915111353000, if possible in a timely manner. It may take some time for you to receive an answer.\r
				
				We thank you for your booking and hope you have a fantastic stay in our holiday apartment!
				
				Kind Regards,
				
				The Holzapfel-Littles\r
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setContent(dedent(emailText));
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
				
				Für weitere Fragen senden Sie uns bitte eine E-mail an heidi@tomlittle.org, oder per Signal oder SMS an +4915111353000. Möglichst nicht zu kurzfristig, da es in machen Fällen etwas dauern könnte, bis Sie eine Antwort erhalten.
				
				Vielen Dank für Ihre Buchung und wir wünschen Ihnen eine fantastische Zeit in unserer Ferienwohnung!
				
				Mit freundlichen Grüßen,
				
				Familie Holzapfel-Little
				
				---
				https://ossiachersee-ferienwohnung.de/`;
				setContent(dedent(emailText));
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
	}, [
		currentMessage,
		currentBookingInitial,
		currentBookingRemainder,
		i18n.language,
	]);

	const sendEmail = async () => {
		logThis(currentEmail, subject, content);
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
		if (resData.status === "success") {
			setMessage("");
			logThis("email message sent successfully");
		}
		// else if (resData.status === "fail") {
		// 	alert("Message failed to send.");
		// }
	};

	const sendRegisterEmail = async () => {
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
					subject: registerSubject,
					content: registerContent,
				}),
			}
		);
		const resData = await response.json();
		if (resData.status === "success") {
			setRegisterMessage(false);
			logThis("register email sent");
		}
		// else if (resData.status === "fail") {
		// 	alert("Message failed to send.");
		// }
	};

	const sendForgotPasswordEmail = async () => {
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
					email: forgotPasswordEmail,
					subject:
						i18n.language.substring(0, 2) === "en"
							? "Password change request - Lake Ossiach holiday apartment"
							: "Passwort zurücksetzen - Ossiacher See Ferienwohnung",
					content:
						i18n.language.substring(0, 2) === "en"
							? dedent(
									`Dear User,

									you have requested a password reset code. Your code is ${forgotPasswordCode}.

									We look forward to welcoming you to our holiday apartment soon.
									
									Kind Regards,
				
									The Holzapfel-Littles
				
									---
									https://ossiachersee-ferienwohnung.de/`
							  )
							: dedent(
									`Sehr geehrte Nutzerin, sehr geehrter Nutzer, 

									Sie haben einen Code angefordert, um Ihr Passwort zu ändern. Ihr Code lautet ${forgotPasswordCode}.
									
									Wir hoffen Sie bald in unserer Ferienwohnung wilkommen heißen zu dürfen.

									Mit freundlichen Grüßen,
				
									Familie Holzapfel-Little
				
									---
									https://ossiachersee-ferienwohnung.de/`
							  ),
				}),
			}
		);
		const resData = await response.json();
		if (resData.status === "success") {
			setRegisterMessage(false);
			logThis("forgot password email sent");
			setSendingForgotPasswordEmail(false)
			setForgotPasswordEmailSent(true)
		}
		// else if (resData.status === "fail") {
		// 	alert("Message failed to send.");
		// }
	};

	return (
		<MailContext.Provider
			value={{
				sendEmail,
				setMessage,
				setEmail,
				message,
				content,
				subject,
				registerMessage,
				setRegisterMessage,
				sendRegisterEmail,
				registerSubject,
				currentMessage,
				currentBookingInitial,
				currentBookingRemainder,
				setForgotPasswordCode,
				setForgotPasswordEmail,
				forgotPasswordEmail,
				sendingForgotPasswordEmail,
				setSendingForgotPasswordEmail,
				sendForgotPasswordEmail,
				forgotPasswordEmailSent,
				forgotPasswordCode
			}}
		>
			{children}
		</MailContext.Provider>
	);
};

export default MailContextProvider;
