import React, { createContext, useState, useEffect, useContext } from "react";
import moment from "moment";
import { LogContext } from "./LogContext";
import Swal from "sweetalert2";

export const BookingLogicContext = createContext();

const BookingLogicContextProvider = ({ children }) => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState();
	const [arrayOfDates, setArrayOfDates] = useState();
	const [extraPerson, setExtraPerson] = useState(false);
	const [available, setAvailable] = useState(true);
	const [within30, setWithin30] = useState(false);
	const [chooseFullPay, setChooseFullPay] = useState(false);

	const [totalBookingCost, setTotalBookingCost] = useState(0);
	const [prepaymentCost, setPrepaymentCost] = useState(0);
	const [restpaymentCost, setRestpaymentCost] = useState(0);

	const [bookingDetails, setBookingDetails] = useState();

	const { logThis } = useContext(LogContext);

	const bodensdorf = {
		cleaningFee: 40,
		// currency: "EUR",
		// minimumDaysDiscount: 6,
		// daysDiscount: 5, // %
		preSeasonPrice: 45,
		mainSeasonPrice: 63,
		aftSeasonPrice: 50,
		offSeasonPrice: 40,
		preSeasonPrice3: 56,
		mainSeasonPrice3: 79,
		aftSeasonPrice3: 63,
		offSeasonPrice3: 50,
		preSeasonRange: [3, 6],
		mainSeasonRange: [7, 8],
		aftSeasonRange: [9, 10],
		offSeasonRange: [11, 2],
		extraPerson: false,
		extraPersonMultiplier: 1.25,
		// repeatCustomerDiscount: 10 // %
	};

	const calculateDaysCost = () => {
		const bookingCostArray = [];
		const b = bodensdorf;
		let startOff = b.offSeasonRange[0];
		let endOff = b.offSeasonRange[1];
		let startMain = b.mainSeasonRange[0];
		let endMain = b.mainSeasonRange[1];
		let startPre = b.preSeasonRange[0];
		let endPre = b.preSeasonRange[1];
		let startAft = b.aftSeasonRange[0];
		let endAft = b.aftSeasonRange[1];

		const offSeason = (date) => {
			if (startOff < endOff) {
				if (
					moment(date).format("MM") >= startOff &&
					moment(date).format("MM") <= endOff
				) {
					if (extraPerson === false) {
						bookingCostArray.push(b.offSeasonPrice);
					}
					if (extraPerson === true) {
						bookingCostArray.push(b.offSeasonPrice3);
					}
				}
			} else if (startOff > endOff) {
				if (
					(moment(date).format("MM") >= startOff &&
						moment(date).format("MM") <= 12) ||
					(moment(date).format("MM") >= 1 &&
						moment(date).format("MM") <= endOff)
				) {
					if (extraPerson === false) {
						bookingCostArray.push(b.offSeasonPrice);
					}
					if (extraPerson === true) {
						bookingCostArray.push(b.offSeasonPrice3);
					}
				}
			}
		};

		const preSeason = (date) => {
			if (startPre < endPre) {
				if (
					moment(date).format("MM") >= startPre &&
					moment(date).format("MM") <= endPre
				) {
					if (extraPerson === false) {
						bookingCostArray.push(b.preSeasonPrice);
					}
					if (extraPerson === true) {
						bookingCostArray.push(b.preSeasonPrice3);
					}
				}
			} else if (startPre > endPre) {
				if (
					(moment(date).format("MM") >= startPre &&
						moment(date).format("MM") <= 12) ||
					(moment(date).format("MM") >= 1 &&
						moment(date).format("MM") <= endPre)
				) {
					if (extraPerson === false) {
						bookingCostArray.push(b.preSeasonPrice);
					}
					if (extraPerson === true) {
						bookingCostArray.push(b.preSeasonPrice3);
					}
				}
			}
		};

		const mainSeason = (date) => {
			if (startMain < endMain) {
				if (
					moment(date).format("MM") >= startMain &&
					moment(date).format("MM") <= endMain
				) {
					if (extraPerson === false) {
						bookingCostArray.push(b.mainSeasonPrice);
					}
					if (extraPerson === true) {
						bookingCostArray.push(b.mainSeasonPrice3);
					}
				}
			} else if (startMain > endMain) {
				if (
					(moment(date).format("MM") >= startMain &&
						moment(date).format("MM") <= 12) ||
					(moment(date).format("MM") >= 1 &&
						moment(date).format("MM") <= endMain)
				) {
					if (extraPerson === false) {
						bookingCostArray.push(b.mainSeasonPrice);
					}
					if (extraPerson === true) {
						bookingCostArray.push(b.mainSeasonPrice3);
					}
				}
			}
		};

		const aftSeason = (date) => {
			if (startAft < endAft) {
				if (
					moment(date).format("MM") >= startAft &&
					moment(date).format("MM") <= endAft
				) {
					if (extraPerson === false) {
						bookingCostArray.push(b.aftSeasonPrice);
					}
					if (extraPerson === true) {
						bookingCostArray.push(b.aftSeasonPrice3);
					}
				}
			} else if (startAft > endAft) {
				if (
					(moment(date).format("MM") >= startAft &&
						moment(date).format("MM") <= 12) ||
					(moment(date).format("MM") >= 1 &&
						moment(date).format("MM") <= endAft)
				) {
					if (extraPerson === false) {
						bookingCostArray.push(b.aftSeasonPrice);
					}
					if (extraPerson === true) {
						bookingCostArray.push(b.aftSeasonPrice3);
					}
				}
			}
		};

		// initial individiual daily calculation
		for (let i = 0; i < arrayOfDates.length; i = i + 1) {
			offSeason(arrayOfDates[i]);
			preSeason(arrayOfDates[i]);
			mainSeason(arrayOfDates[i]);
			aftSeason(arrayOfDates[i]);
		}
		let removeLastDay = bookingCostArray.slice(0, bookingCostArray.length - 1);
		let pattern = new RegExp("^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$");

		if (pattern.test(startDate) && pattern.test(endDate) && arrayOfDates) {
			let cost = removeLastDay.reduce(function (all, amount) {
				return all + amount;
			});
			// logThis(
			// 	"from BookingLogicContext",
			// 	"arrayofdates:",
			// 	arrayOfDates,
			// 	"available:",
			// 	available
			// );
			console.log("arrayofdates:", arrayOfDates, "available:", available);
			let fullCost = cost + b.cleaningFee;
			let startEpoch = moment(startDate, "YYYY-MM-DD").valueOf();
			if (startEpoch - Date.now() <= 2592000000) {
				setTotalBookingCost(fullCost);
				setPrepaymentCost(fullCost);
				setRestpaymentCost(0);
				setWithin30(true);
			} else if (chooseFullPay) {
				setTotalBookingCost(fullCost);
				setPrepaymentCost(fullCost);
				setWithin30(false);
			} else {
				setTotalBookingCost(fullCost);
				setRestpaymentCost(fullCost * 0.8499);
				setPrepaymentCost(fullCost - restpaymentCost);
				setWithin30(false);
			}
		} else {
			Swal.fire({
				icon: "error",
				title: `An error has occurred! Please change one of the selected dates and then reselect your desired date!`,
			});
		}
	};

	useEffect(() => {
		if (
			restpaymentCost &&
			moment(startDate, "YYYY-MM-DD").valueOf() - Date.now() > 2592000000
		) {
			setPrepaymentCost(totalBookingCost - restpaymentCost);
		}
	}, [restpaymentCost]);

	useEffect(() => {
		if (chooseFullPay) {
			setPrepaymentCost(totalBookingCost);
			setRestpaymentCost(0);
		}
		if (
			!chooseFullPay &&
			moment(startDate, "YYYY-MM-DD").valueOf() - Date.now() > 2592000000
		) {
			setRestpaymentCost(totalBookingCost * 0.8499);
			setPrepaymentCost(totalBookingCost - restpaymentCost);
		}
	}, [chooseFullPay]);

	// const showDates = (lang) => {
	// 	const arrivalDate = arrayOfDates[0];
	// 	const departureDate = arrayOfDates[arrayOfDates.length - 1];
	// 	if (lang === "DE")
	// 		return `${moment(arrivalDate).format("DD/MM/YYYY")} - ${moment(
	// 			departureDate
	// 		).format("DD/MM/YYYY")}`;
	// 	if (lang === "EN")
	// 		return `${moment(arrivalDate).format("MM/DD/YYYY")} - ${moment(
	// 			departureDate
	// 		).format("MM/DD/YYYY")}`;
	// };

	const showDates = () => {
		const arrivalDate = arrayOfDates[0];
		const departureDate = arrayOfDates[arrayOfDates.length - 1];
		return `${moment(arrivalDate).format("DD.MM.YYYY")} - ${moment(
			departureDate
		).format("DD.MM.YYYY")}`;
	};

	return (
		<BookingLogicContext.Provider
			value={{
				totalBookingCost,
				setTotalBookingCost,
				available,
				setAvailable,
				prepaymentCost,
				restpaymentCost,
				bodensdorf,
				calculateDaysCost,
				showDates,
				startDate,
				setStartDate,
				endDate,
				setEndDate,
				arrayOfDates,
				setArrayOfDates,
				extraPerson,
				setExtraPerson,
				bookingDetails,
				setBookingDetails,
				within30,
				chooseFullPay,
				setChooseFullPay,
			}}
		>
			{children}
		</BookingLogicContext.Provider>
	);
};

export default BookingLogicContextProvider;
