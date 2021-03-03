import React, { useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingCalendar.css";
import { BookingsContext } from "../../Context/BookingsContext";
// import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import i18n from "../../i18n";
import moment from "moment";

const BookingCalendar3 = () => {
	const { bookingsList } = useContext(BookingsContext);
	const [preSeason, setPreSeason] = useState();
	const [mainSeason, setMainSeason] = useState();
	const [aftSeason, setAftSeason] = useState();
	const [offSeason, setOffSeason] = useState();
	const [unavailableDates, setUnavailableDates] = useState();
	const [arriveDepartDates, setArriveDepartDates] = useState();

	const [startDate, setStartDate] = useState(new Date());

	const preSeasonArray = [];
	const mainSeasonArray = [];
	const aftSeasonArray = [];
	const offSeasonArray = [];

	const determinePreSeason = () => {
		//2020d
		for (
			let i = moment("01-05-2020", "DD-MM-YYYY").valueOf();
			i < moment("01-07-2020", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			preSeasonArray.push(new Date(i));
		}
		//2021
		for (
			let i = moment("01-05-2021", "DD-MM-YYYY").valueOf();
			i < moment("01-07-2021", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			preSeasonArray.push(new Date(i));
		}
		//2022
		for (
			let i = moment("01-05-2022", "DD-MM-YYYY").valueOf();
			i < moment("01-07-2022", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			preSeasonArray.push(new Date(i));
		}
		//2023
		for (
			let i = moment("01-05-2023", "DD-MM-YYYY").valueOf();
			i < moment("01-07-2023", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			preSeasonArray.push(new Date(i));
		}
		//2024
		for (
			let i = moment("01-05-2024", "DD-MM-YYYY").valueOf();
			i < moment("01-07-2024", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			preSeasonArray.push(new Date(i));
		}
		//2025
		for (
			let i = moment("01-05-2025", "DD-MM-YYYY").valueOf();
			i < moment("01-07-2025", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			preSeasonArray.push(new Date(i));
		}
		setPreSeason(preSeasonArray);
	};

	const determineMainSeason = () => {
		//2020d
		for (
			let i = moment("01-07-2020", "DD-MM-YYYY").valueOf();
			i < moment("01-09-2020", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			mainSeasonArray.push(new Date(i));
		}
		//2021
		for (
			let i = moment("01-07-2021", "DD-MM-YYYY").valueOf();
			i < moment("01-09-2021", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			mainSeasonArray.push(new Date(i));
		}
		//2022
		for (
			let i = moment("01-07-2022", "DD-MM-YYYY").valueOf();
			i < moment("01-09-2022", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			mainSeasonArray.push(new Date(i));
		}
		//2023
		for (
			let i = moment("01-07-2023", "DD-MM-YYYY").valueOf();
			i < moment("01-09-2023", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			mainSeasonArray.push(new Date(i));
		}
		//2024
		for (
			let i = moment("01-07-2024", "DD-MM-YYYY").valueOf();
			i < moment("01-09-2024", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			mainSeasonArray.push(new Date(i));
		}
		//2025
		for (
			let i = moment("01-07-2025", "DD-MM-YYYY").valueOf();
			i < moment("01-09-2025", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			mainSeasonArray.push(new Date(i));
		}
		setMainSeason(mainSeasonArray);
	};

	const determineAftSeason = () => {
		//2020
		for (
			let i = moment("01-09-2020", "DD-MM-YYYY").valueOf();
			i < moment("01-11-2020", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			aftSeasonArray.push(new Date(i));
		}
		//2021
		for (
			let i = moment("01-09-2021", "DD-MM-YYYY").valueOf();
			i < moment("01-11-2021", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			aftSeasonArray.push(new Date(i));
		}
		//2022
		for (
			let i = moment("01-09-2022", "DD-MM-YYYY").valueOf();
			i < moment("01-11-2022", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			aftSeasonArray.push(new Date(i));
		}
		//2023
		for (
			let i = moment("01-09-2023", "DD-MM-YYYY").valueOf();
			i < moment("01-11-2023", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			aftSeasonArray.push(new Date(i));
		}
		//2024
		for (
			let i = moment("01-09-2024", "DD-MM-YYYY").valueOf();
			i < moment("01-11-2024", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			aftSeasonArray.push(new Date(i));
		}
		//2025
		for (
			let i = moment("01-09-2025", "DD-MM-YYYY").valueOf();
			i < moment("01-11-2025", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			aftSeasonArray.push(new Date(i));
		}
		setAftSeason(aftSeasonArray);
	};

	const determineOffSeason = () => {
		//2020
		for (
			let i = moment("01-11-2020", "DD-MM-YYYY").valueOf();
			i < moment("01-05-2021", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			offSeasonArray.push(new Date(i));
		}
		//2021
		for (
			let i = moment("01-11-2021", "DD-MM-YYYY").valueOf();
			i < moment("01-05-2022", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			offSeasonArray.push(new Date(i));
		}
		//2022
		for (
			let i = moment("01-11-2022", "DD-MM-YYYY").valueOf();
			i < moment("01-05-2023", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			offSeasonArray.push(new Date(i));
		}
		//2023
		for (
			let i = moment("01-11-2023", "DD-MM-YYYY").valueOf();
			i < moment("01-05-2024", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			offSeasonArray.push(new Date(i));
		}
		//2024
		for (
			let i = moment("01-11-2024", "DD-MM-YYYY").valueOf();
			i < moment("01-05-2025", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			offSeasonArray.push(new Date(i));
		}
		//2025
		for (
			let i = moment("01-11-2025", "DD-MM-YYYY").valueOf();
			i < moment("01-05-2026", "DD-MM-YYYY").valueOf();
			i = i + 86400000
		) {
			offSeasonArray.push(new Date(i));
		}
		setOffSeason(offSeasonArray);
	};

	useEffect(() => {
		determinePreSeason();
		determineMainSeason();
		determineAftSeason();
		determineOffSeason();
	}, []);

	const unavailableArray = [];
	const arriveDepartArray = [];

	const checkAvailability = () => {
		bookingsList.forEach((element) => {
			for (
				let i = element.arriveEpoch + 86400000;
				i < element.departEpoch;
				i = i + 86400000
			) {
				unavailableArray.push(new Date(i));
				// console.log("hey")
			}
			setUnavailableDates(unavailableArray);

			arriveDepartArray.push(element.arriveEpoch);
			arriveDepartArray.push(element.departEpoch);

			setArriveDepartDates(arriveDepartArray);
		});
	};

	useEffect(() => {
		checkAvailability();
	}, [bookingsList]);

	const highlightWithRanges = [
		{
			"react-datepicker__day--highlighted-custom-pre": preSeason
				? preSeason
				: [new Date(1583020800000)],
		},
		{
			"react-datepicker__day--highlighted-custom-main": mainSeason
				? mainSeason
				: [new Date(1593561600000)],
		},
		{
			"react-datepicker__day--highlighted-custom-aft": aftSeason
				? aftSeason
				: [new Date(1598918400000)],
		},
		{
			"react-datepicker__day--highlighted-custom-off": offSeason
				? offSeason
				: [new Date(1604188800000)],
		},
		{
			"react-datepicker__day--highlighted-custom-unavailable": unavailableDates
				? unavailableDates
				: [addDays(new Date(), 2)],
		},
		{
			"react-datepicker__day--highlighted-custom-arrivedepart": arriveDepartDates
				? arriveDepartDates
				: [addDays(new Date(), 1)],
		},
	];

	const checkLanguage = () => {
		if (i18n.language.substring(0, 2) === "en") {
			return "en";
		} else if (i18n.language.substring(0, 2) === "de") {
			return "de";
		}
	};

	return (
		<>
			<DatePicker
				locale={checkLanguage()}
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				// excludeDates={excludeArray}
				highlightDates={highlightWithRanges}
				inline
				className="bigCalendar"
			/>
		</>
	);
};

export default BookingCalendar3;
