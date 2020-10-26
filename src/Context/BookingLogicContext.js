import React, { createContext, useState } from "react";
import moment from "moment";

export const BookingLogicContext = createContext();

const BookingLogicContextProvider = ({ children }) => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState();
	const [arrayOfDates, setArrayOfDates] = useState();
	const [extraPerson, setExtraPerson] = useState(false);
	const [available, setAvailable] = useState(true);

	const [totalBookingCost, setTotalBookingCost] = useState(0);
	const [prepaymentCost, setPrepaymentCost] = useState(0);
	const [restpaymentCost, setRestpaymentCost] = useState(0);

	const [bookingDetails, setBookingDetails] = useState()

	const bodensdorf = {
		cleaningFee: 40,
		// currency: "EUR",
		// minimumDaysDiscount: 6,
		// daysDiscount: 5, // %
		preSeasonPrice: 45,
		mainSeasonPrice: 63,
		aftSeasonPrice: 50,
		offSeasonPrice: 40,
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
					bookingCostArray.push(b.offSeasonPrice);
					// console.log('offseasonPrice')
				}
			} else if (startOff > endOff) {
				if (
					(moment(date).format("MM") >= startOff &&
						moment(date).format("MM") <= 12) ||
					(moment(date).format("MM") >= 1 &&
						moment(date).format("MM") <= endOff)
				) {
					// console.log('offseasonPriceW')
					bookingCostArray.push(b.offSeasonPrice);
				}
			}
		};

		const preSeason = (date) => {
			if (startPre < endPre) {
				if (
					moment(date).format("MM") >= startPre &&
					moment(date).format("MM") <= endPre
				) {
					// console.log('preseasonPrice')
					bookingCostArray.push(b.preSeasonPrice);
				}
			} else if (startPre > endPre) {
				if (
					(moment(date).format("MM") >= startPre &&
						moment(date).format("MM") <= 12) ||
					(moment(date).format("MM") >= 1 &&
						moment(date).format("MM") <= endPre)
				) {
					// console.log('preseasonPriceW')
					bookingCostArray.push(b.preSeasonPrice);
				}
			}
		};

		const mainSeason = (date) => {
			if (startMain < endMain) {
				if (
					moment(date).format("MM") >= startMain &&
					moment(date).format("MM") <= endMain
				) {
					// console.log('mainseasonPrice')
					bookingCostArray.push(b.mainSeasonPrice);
				}
			} else if (startMain > endMain) {
				if (
					(moment(date).format("MM") >= startMain &&
						moment(date).format("MM") <= 12) ||
					(moment(date).format("MM") >= 1 &&
						moment(date).format("MM") <= endMain)
				) {
					// console.log('mainseasonPriceW')
					bookingCostArray.push(b.mainSeasonPrice);
				}
			}
		};

		const aftSeason = (date) => {
			if (startAft < endAft) {
				if (
					moment(date).format("MM") >= startAft &&
					moment(date).format("MM") <= endAft
				) {
					// console.log('aftseasonPrice')
					bookingCostArray.push(b.aftSeasonPrice);
				}
			} else if (startAft > endAft) {
				if (
					(moment(date).format("MM") >= startAft &&
						moment(date).format("MM") <= 12) ||
					(moment(date).format("MM") >= 1 &&
						moment(date).format("MM") <= endAft)
				) {
					// console.log('aftseasonPriceW')
					bookingCostArray.push(b.aftSeasonPrice);
				}
			}
		};

		// initial individiual daily calculation
		for (let i = 0; i < arrayOfDates.length; i = i + 1) {
			offSeason(arrayOfDates[i]);
			preSeason(arrayOfDates[i]);
			mainSeason(arrayOfDates[i]);
			aftSeason(arrayOfDates[i]);
			// console.log(bookingCostArray)
		}
		if (extraPerson === false) {
			let cost = bookingCostArray.reduce(function (all, amount) {
				return all + amount;
			});
			let fullCost = cost + b.cleaningFee;
			let startEpoch = moment(startDate, "YYYY-MM-DD").valueOf();
			// console.log(fullCost)
			if (startEpoch - Date.now() <= 2592000000) {
				setTotalBookingCost(fullCost);
				setPrepaymentCost(fullCost);
			} else {
				setTotalBookingCost(fullCost);
				setPrepaymentCost(fullCost * 0.15);
				setRestpaymentCost(fullCost * 0.8499);
			}
		}
		if (extraPerson === true) {
			let cost = bookingCostArray.reduce(function (all, amount) {
				return all + amount;
			});
			let fullCost = Math.round(cost * 1.25 + b.cleaningFee);
			let startEpoch = moment(startDate, "YYYY-MM-DD").valueOf();
			// console.log(fullCost)
			if (startEpoch - Date.now() <= 2592000000) {
				setTotalBookingCost(fullCost);
				setPrepaymentCost(fullCost);
			} else {
				setTotalBookingCost(fullCost);
				setPrepaymentCost(fullCost * 0.15);
				setRestpaymentCost(fullCost * 0.8499);
			}
		}
	};

	const showDates = (lang) => {
		const arrivalDate = arrayOfDates[0];
		const departureDate = arrayOfDates[arrayOfDates.length - 1];
		if (lang === "DE")
			return `${moment(arrivalDate).format("DD/MM/YYYY")} - ${moment(
				departureDate
			).format("DD/MM/YYYY")}`;
		if (lang === "EN")
			return `${moment(arrivalDate).format("MM/DD/YYYY")} - ${moment(
				departureDate
			).format("MM/DD/YYYY")}`;
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
				setBookingDetails
			}}
		>
			{children}
		</BookingLogicContext.Provider>
	);
};

export default BookingLogicContextProvider;
