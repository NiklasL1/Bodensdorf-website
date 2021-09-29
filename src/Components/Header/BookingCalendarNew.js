import React, { useState, useEffect, useContext } from "react";
import {
	format,
	getMonth,
	getYear,
	isSameDay,
	subMonths,
	addMonths,
} from "date-fns";
import { enGB, de } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import "./BookingCalendarNew.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../Context/AuthContext";
import { BookingsContext } from "../../Context/BookingsContext";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { PhotosContext } from "../../Context/PhotosContext";
import i18n from "../../i18n";
import Swal from "sweetalert2";
import moment from "moment";
import BookingModal from "./BookingModal";
import LoginDuringBooking from "../Auth/LoginDuringBooking";
import StripeNew from "../Stripe/StripeNew";

const BookingCalendarNew = () => {
	const { t } = useTranslation();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showConfirmation, setShowConfirmation] = useState(false);

	const [selectedStartDate, setSelectedStartDate] = useState();
	const [selectedEndDate, setSelectedEndDate] = useState();
	const [focus, setFocus] = useState(START_DATE);
	const handleFocusChange = (newFocus) => {
		setFocus(newFocus || START_DATE);
	};
	const [month, setMonth] = useState(new Date());
	const [rec1Text, setrec1Text] = useState();
	const [rec2Text, setrec2Text] = useState();
	const [rec3Text, setrec3Text] = useState();
	const [rec1Month, setrec1Month] = useState();
	const [rec2Month, setrec2Month] = useState();
	const [rec3Month, setrec3Month] = useState();
	const [rec1Year, setrec1Year] = useState();
	const [rec2Year, setrec2Year] = useState();
	const [rec3Year, setrec3Year] = useState();

	const [mouseOverCalendar, setMouseOverCalendar] = useState(false);

	const {
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		arrayOfDates,
		setArrayOfDates,
		extraPerson,
		setExtraPerson,
		calculateDaysCost,
		setAvailable,
		available,
		show,
		setShow,
		totalBookingCost,
		setTotalBookingCost,
	} = useContext(BookingLogicContext);

	const { showSlidesGrid1 } = useContext(PhotosContext);
	const { bookingsList } = useContext(BookingsContext);
	const { data, handleShowLogin } = useContext(AuthContext);
	const [unavailableDates, setUnavailableDates] = useState();
	const [arriveDepartDates, setArriveDepartDates] = useState();
	const [inbetweenDates, setInbetweenDates] = useState();

	const [infoClassName, setInfoClassName] = useState("hidden");
	const [priceClassName, setPriceClassName] = useState("hidden");
	const [buttonClass, setButtonClass] = useState("book-btn color-4 top");

	const unavailableArray = [];
	const arriveDepartArray = [];
	const inbetweenDatesArray = [];

	useEffect(() => {
		if (showSlidesGrid1) {
			setButtonClass("book-btn color-4");
		}
	}, [showSlidesGrid1]);

	let currentLocale = i18n.language.substring(0, 2) === "en" ? enGB : de;

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

			setArriveDepartDates(
				arriveDepartArray.sort(function (a, b) {
					return a - b;
				})
			);
		});
	};

	const checkInbetween = () => {
		let sortedBookingsList = bookingsList.sort(function (a, b) {
			return a.arriveEpoch - b.arriveEpoch;
		});
		// console.log(sortedBookingsList);
		let x;
		for (let i = 0; i < sortedBookingsList.length - 1; i = i + 1) {
			if (
				sortedBookingsList[i + 1].arriveEpoch -
					sortedBookingsList[i].departEpoch <
				86400000 * 6
			) {
				for (
					x = sortedBookingsList[i].departEpoch;
					x < sortedBookingsList[i + 1].arriveEpoch + 1;
					x = x + 86400000
				) {
					inbetweenDatesArray.push(new Date(x));
				}
			}
			if (sortedBookingsList[i].departEpoch - Date.now() < 86400000 * 6) {
				for (
					x = Date.now();
					x < sortedBookingsList[i].departEpoch + 1;
					x = x + 86400000
				) {
					inbetweenDatesArray.push(new Date(x));
				}
			}
		}
		setInbetweenDates(inbetweenDatesArray);
	};

	useEffect(() => {
		checkAvailability();
	}, [bookingsList]);

	useEffect(() => {
		if (arriveDepartDates && bookingsList) {
			checkInbetween();
		}
	}, [arriveDepartDates]);

	useEffect(() => {
		if (inbetweenDates) {
			setUnavailableDates(unavailableDates.concat(inbetweenDates));
		}
	}, [inbetweenDates]);

	const handleStartDateChange = (e) => {
		setSelectedStartDate(e);
		setStartDate(e);
	};

	const handleEndDateChange = (e) => {
		setSelectedEndDate(e);
		setEndDate(e);
	};

	// add + 43200000 to set time to noon to avoid issues with DST

	let startEpoch = moment(startDate, "YYYY-MM-DD").valueOf() + 43200000;
	let endEpoch = moment(endDate, "YYYY-MM-DD").valueOf() + 43200000;

	const checkOverlap = () => {
		bookingsList.forEach((element) => {
			if (
				(startEpoch >= element.arriveEpoch &&
					startEpoch <= element.departEpoch - 86400000) ||
				(endEpoch >= element.arriveEpoch + 86400000 &&
					endEpoch <= element.departEpoch)
			) {
				setAvailable(false);
			}
			if (
				startEpoch <= element.arriveEpoch &&
				endEpoch >= element.departEpoch
			) {
				setAvailable(false);
			}
		});
	};

	useEffect(() => {
		if (arrayOfDates) {
			setAvailable(true);
			calculateDaysCost();
			checkOverlap();
		}
	}, [arrayOfDates]);

	const checkShow = () => {
		if (!startDate || !endDate) {
			Swal.fire({
				icon: "warning",
				title: `${t("bAlert")}`,
			});
			// } else if (!startDateValid) {
			// 	Swal.fire({
			// 		icon: "warning",
			// 		title: `${t("bAlert8")}`,
			// 	});
			// } else if (!endDateValid) {
			// 	Swal.fire({
			// 		icon: "warning",
			// 		title: `${t("bAlert9")}`,
			// 	});
		} else if (startEpoch < Date.now()) {
			Swal.fire({
				icon: "warning",
				title: `${t("bAlert6")}`,
			});
		} else if (arrayOfDates.length < 7) {
			Swal.fire({
				icon: "warning",
				title: `${t("bAlert2")}`,
			});
		} else if (startEpoch >= endEpoch) {
			Swal.fire({
				icon: "warning",
				title: `${t("bAlert7")}`,
			});
		} else if (!available) {
			Swal.fire({
				icon: "error",
				title: `${t("bAlert3")}`,
				text: `${t("bAlert3sub")}`,
				confirmButtonText: `${t("bAlert3goBut")}`,
				// onAfterClose() {
				// 	var top = document.getElementById("calendarSection").offsetTop; //Getting Y of target element
				// 	window.scrollTo(0, top);
				// },
			});
		} else if (data === null || !data._id) {
			handleShowLogin();
			handleClose();
		} else {
			setShowConfirmation(true);
			handleClose();
		}
	};

	let selectedArray = [];

	const calculateDates = () => {
		for (let i = startEpoch; i < endEpoch + 43200000; i = i + 86400000) {
			selectedArray.push(i);
			setArrayOfDates(selectedArray);
		}
	};

	useEffect(() => {
		calculateDates();
	}, [startEpoch, endEpoch, extraPerson]);

	const determinePeople = () => {
		setExtraPerson(!extraPerson);
	};

	const determineRecommendations = () => {
		if (getMonth(Date.now()) === 5 || getMonth(Date.now()) === 6) {
			setrec1Text(`${t("cnew5b")} ${getYear(Date.now())}`);
			setrec1Month(6);
			setrec1Year(getYear(Date.now()));
			setrec2Text(`${t("cnew5c")} ${getYear(Date.now())}`);
			setrec2Month(8);
			setrec2Year(getYear(Date.now()));
			setrec3Text(`${t("cnew5a")} ${getYear(Date.now()) + 1}`);
			setrec3Month(4);
			setrec3Year(getYear(Date.now()) + 1);
		} else if (getMonth(Date.now()) === 7 || getMonth(Date.now()) === 8) {
			setrec1Text(`${t("cnew5c")} ${getYear(Date.now())}`);
			setrec1Month(8);
			setrec1Year(getYear(Date.now()));
			setrec2Text(`${t("cnew5a")} ${getYear(Date.now()) + 1}`);
			setrec2Month(4);
			setrec2Year(getYear(Date.now()) + 1);
			setrec3Text(`${t("cnew5b")} ${getYear(Date.now()) + 1}`);
			setrec3Month(6);
			setrec3Year(getYear(Date.now()) + 1);
		} else if (getMonth(Date.now()) > 8) {
			setrec1Text(`${t("cnew5a")} ${getYear(Date.now()) + 1}`);
			setrec1Month(4);
			setrec1Year(getYear(Date.now()) + 1);
			setrec2Text(`${t("cnew5b")} ${getYear(Date.now()) + 1}`);
			setrec2Month(6);
			setrec2Year(getYear(Date.now()) + 1);
			setrec3Text(`${t("cnew5c")} ${getYear(Date.now()) + 1}`);
			setrec3Month(8);
			setrec3Year(getYear(Date.now()) + 1);
		} else {
			setrec1Text(`${t("cnew5a")} ${getYear(Date.now())}`);
			setrec1Month(4);
			setrec1Year(getYear(Date.now()));
			setrec2Text(`${t("cnew5b")} ${getYear(Date.now())}`);
			setrec2Month(6);
			setrec2Year(getYear(Date.now()));
			setrec3Text(`${t("cnew5c")} ${getYear(Date.now())}`);
			setrec3Month(8);
			setrec3Year(getYear(Date.now()));
		}
	};

	useEffect(() => {
		determineRecommendations();
	}, []);

	const handleRecClick = (number) => {
		if (number === 1) {
			setMonth(new Date(rec1Year, rec1Month, 1));
		} else if (number === 2) {
			setMonth(new Date(rec2Year, rec2Month, 1));
		} else if (number === 3) {
			setMonth(new Date(rec3Year, rec3Month, 1));
		}
	};

	const resetSelection = () => {
		setSelectedStartDate(undefined);
		setSelectedEndDate(undefined);
		setStartDate(undefined);
		setEndDate(undefined);
		setFocus(START_DATE);
		setTotalBookingCost(0);
	};

	const stayDuration = () => {
		if (selectedStartDate && selectedEndDate && arrayOfDates) {
			return `${arrayOfDates.length} ${t("bookMo2")} ${
				arrayOfDates.length - 1
			} ${t("bookMo3")}`;
		} else {
			return `${t("cnew2")}`;
		}
	};

	const modifiers = {
		disabled: (date) => {
			if (unavailableDates) {
				for (let i = 0; i < unavailableDates.length; i = i + 1) {
					if (isSameDay(date, unavailableDates[i])) {
						return true;
					}
				}
				return false;
			}
		},
		preSeason: (date) =>
			getMonth(date) === 4 ||
			getMonth(date) === 5 ||
			getMonth(date) === 8 ||
			getMonth(date) === 9,
		mainSeason: (date) => getMonth(date) === 6 || getMonth(date) === 7,
		offSeason: (date) => getMonth(date) < 4 || getMonth(date) > 9,
	};

	const modifiersClassNames = {
		preSeason: "-preSeason",
		mainSeason: "-mainSeason",
		offSeason: "-offSeason",
	};

	const toggleInfo = () => {
		if (!infoClassName) {
			setInfoClassName("hideIt");
		} else if (infoClassName) {
			setInfoClassName(undefined);
			setPriceClassName("hideIt")
		}
	};

	const togglePrice = () => {
		if (!priceClassName) {
			setPriceClassName("hideIt");
		} else if (priceClassName) {
			setPriceClassName(undefined);
			setInfoClassName("hideIt");
		}
	};

	return (
		<>
			<button className={buttonClass} onClick={handleShow}>
				{t("b1")}
			</button>
			<Modal show={show} onHide={handleClose} centered dialogClassName="modalW">
				{/* <Modal.Header closeButton>
					<Modal.Title>{t("moTitle")}</Modal.Title>
				</Modal.Header> */}
				<Modal.Body>
					<div className="bookingCalendar">
						{/* <p>Currently selecting: {focus}.</p> */}
						<div className="recButtons">
							<span className="recButton" onClick={() => handleRecClick(1)}>
								{rec1Text}
							</span>
							<span className="recButton" onClick={() => handleRecClick(2)}>
								{rec2Text}
							</span>
							<span className="recButton" onClick={() => handleRecClick(3)}>
								{rec3Text}
							</span>
						</div>
						<div className="navButtons">
							<i
								onClick={() => setMonth((prevState) => subMonths(prevState, 1))}
								className="fa fa-chevron-left fa-lg navButton"
								aria-hidden="true"
							></i>
							<i
								onClick={() => setMonth((prevState) => addMonths(prevState, 1))}
								className="fa fa-chevron-right fa-lg navButton"
								aria-hidden="true"
							></i>
						</div>

						<span
							onMouseEnter={() => setMouseOverCalendar(true)}
							onMouseLeave={() => setMouseOverCalendar(false)}
						>
							<DateRangePickerCalendar
								startDate={selectedStartDate}
								endDate={selectedEndDate}
								focus={focus}
								onStartDateChange={handleStartDateChange}
								onEndDateChange={handleEndDateChange}
								onFocusChange={handleFocusChange}
								locale={currentLocale}
								modifiers={modifiers}
								modifiersClassNames={modifiersClassNames}
								month={month}
								onMonthChange={() => undefined}
								minimumDate={new Date()}
								minimumLength={6}
							/>
						</span>
					</div>
					<div className="resetBtn">
						<Button variant="primary" onClick={resetSelection}>
							{t("cnew4")}
						</Button>
					</div>
					<Table>
						<tbody>
							<tr>
								<td className="tableWidth rightAlign">{t("cnew1")}</td>
								<td className="tableWidth">
									<select name="people" onChange={determinePeople}>
										<option value="2"> 2 </option>
										<option value="3"> 3 </option>
									</select>
								</td>
							</tr>
							<tr>
								<td className="tableWidth rightAlign">{t("bookMo9")}</td>
								<td className="tableWidth">{stayDuration()}</td>
							</tr>
							<tr>
								<td className="tableWidth rightAlign">{t("bookMo4")}</td>
								<td className="tableWidth">{totalBookingCost}€</td>
							</tr>
						</tbody>
					</Table>					
					<div className="flexIt">
						<Button variant="outline-secondary" onClick={toggleInfo}>
							{!infoClassName ? t("cnew3a") : t("cnew3")}
						</Button>
						<Button variant="outline-secondary" onClick={togglePrice}>
							{!priceClassName ? t("cnew6a") : t("cnew6")}
						</Button>
					</div>
					<div className={infoClassName}>
						<Table className="infoTable">
							<tbody>
								<tr className="preSeason">
									<td colSpan="3" className="boldIt">
										{t("c7")}
									</td>
									<td colSpan="9">{t("c8")}</td>
								</tr>
								<tr className="mainSeason">
									<td colSpan="3" className="boldIt">
										{t("c9")}
									</td>
									<td colSpan="9">{t("c10")}</td>
								</tr>
								<tr className="offSeason">
									<td colSpan="3" className="boldIt">
										{t("c11")}
									</td>
									<td colSpan="9">{t("c12")}</td>
								</tr>
							</tbody>
						</Table>
						<Table className="infoTable2">
							<tbody>
								<tr>
									<td>
										<ul>
											<li>{t("c17")}</li>
											<li>{t("c18")}</li>
											<li>{t("c19")}</li>
											<li>{t("c20")}</li>
											<li>{t("c21")}</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
					<div className={priceClassName}>
						<Table className="infoTable boldIt" bordered>
							<tbody className="centerText">
								<tr>
									<td colSpan="3" className="boldIt noTopBorder">
										{t("c3")}
									</td>
									<td colSpan="3" className="preSeason">
										{t("c4a")}
									</td>
									<td colSpan="3" className="mainSeason">
										{t("c4b")}
									</td>
									<td colSpan="3" className="offSeason">
										{t("c4c")}
									</td>
								</tr>
								<tr>
									<td colSpan="3" className="boldIt noTopBorder">
										2
									</td>
									<td colSpan="3" className="preSeason">
										62€
									</td>
									<td colSpan="3" className="mainSeason">
										74€
									</td>
									<td colSpan="3" className="offSeason">
										51€
									</td>
								</tr>
								<tr>
									<td colSpan="3" className="boldIt noTopBorder">
										3
									</td>
									<td colSpan="3" className="preSeason">
										72€
									</td>
									<td colSpan="3" className=" mainSeason">
										84€
									</td>
									<td colSpan="3" className="offSeason">
										61€
									</td>
								</tr>
							</tbody>
						</Table>
						<p className="pricesText">{t("c5")}</p>
					</div>
				</Modal.Body>
				<Modal.Footer className="flexIt">
					<Button variant="success" size="lg" onClick={checkShow}>
						{t("b6")}
					</Button>
					<Button variant="outline-danger" onClick={handleClose}>
						{t("moBut")}
					</Button>
				</Modal.Footer>
			</Modal>
			<BookingModal
				handleClose={() => setShowConfirmation(false)}
				show={showConfirmation}
			/>
			<LoginDuringBooking
				handleShowBookingModal={() => setShowConfirmation(true)}
			/>
			<StripeNew />
		</>
	);
};

export default BookingCalendarNew;
