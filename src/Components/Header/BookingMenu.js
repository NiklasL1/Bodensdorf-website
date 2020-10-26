import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Card from "react-bootstrap/Card";
import moment from "moment";
import BookingModal from "./BookingModal";
import { useTranslation } from "react-i18next";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { BookingsContext } from "../../Context/BookingsContext";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { getDefaultLocale } from "react-datepicker";
import addDays from "date-fns/addDays";
import { AuthContext } from "../../Context/AuthContext";
import StripeNew from "../Stripe/StripeNew";

const BookingMenu = () => {
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
	} = useContext(BookingLogicContext);
	const { bookingsList } = useContext(BookingsContext);
	const { data } = useContext(AuthContext);

	const { t } = useTranslation();

	const [buttonClicked, setButtonClicked] = useState(false);
	const menu = document.getElementById("mainCard");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
	};

	const [showStripe, setShowStripe] = useState(false);
	const handleCloseStripe = () => setShowStripe(false);
	const handleShowStripe = () => {
		setShowStripe(true);
	};

	useEffect(() => {
		if (arrayOfDates) {
			setAvailable(true);
			calculateDaysCost();
			checkAvailability();
		}
		// if (!show) {
		//     setAvailable(true)
		// }
	}, [arrayOfDates]);

	const checkAvailability = () => {
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

	const checkShow = () => {
		if (!startDate || !endDate) {
			Swal.fire({
				icon: "warning",
				title: `${t("bAlert")}`,
			});
		} else if (arrayOfDates.length < 5) {
			Swal.fire({
				icon: "warning",
				title: `${t("bAlert2")}`,
			});
		} else if (!available) {
			Swal.fire({
				icon: "error",
				title: `${t("bAlert3")}`,
				text: `${t("bAlert3sub")}`,
				confirmButtonText: `${t("bAlert3goBut")}`,
				onAfterClose() {
					var top = document.getElementById("calendarSection").offsetTop; //Getting Y of target element
					window.scrollTo(0, top);
				},
			});
		} else if (!data._id) {
			Swal.fire({
				icon: "warning",
				title: `${t("bAlert4")}`,
			});
		} else {
			handleShow();
		}
	};

	const minStartDate = moment(Date.now()).format("YYYY-MM-DD");

	let startEpoch = moment(startDate, "YYYY-MM-DD").valueOf();

	let endEpoch = moment(endDate, "YYYY-MM-DD").valueOf();

	const minEndDate = startDate
		? moment(startEpoch + 345600000).format("YYYY-MM-DD")
		: moment(Date.now() + 345600000).format("YYYY-MM-DD");

	const handleChangeS = (event) => {
		event.persist();
		const { value } = event.target;
		setStartDate(value);
	};

	useEffect(() => {
		calculateDates();
	}, [startEpoch, endEpoch, extraPerson]);

	const handleChangeE = (event) => {
		event.persist();
		const { value } = event.target;
		setEndDate(value);
	};

	// useEffect(() => {
	//     console.log(startDate, endDate)
	// }, [startDate, endDate])

	let myArray = [];

	const calculateDates = () => {
		for (let i = startEpoch; i < endEpoch + 1; i = i + 86400000) {
			myArray.push(i);
			setArrayOfDates(myArray);
		}
	};

	const determinePeople = (event) => {
		setExtraPerson(!extraPerson);
		// if (event.target.value == 2) {
		//     setExtraPerson(false)
		// }
		// if (event.target.value == 3) {
		//     setExtraPerson(true)
		// }
	};

	function CustomToggle({ eventKey }) {
		const decoratedOnClick = useAccordionToggle(
			eventKey,
			() => setButtonClicked(true),
			menu ? menu.classList.add("colored") : null
        );

		useEffect(() => {
			setTimeout(() => {
				if (buttonClicked === false) {
					decoratedOnClick();
				}
			}, 0);
		}, []);

		if (buttonClicked === false) {
			return (
				<Button variant="info" size="lg" onClick={decoratedOnClick}>
					{t("b1")}
				</Button>
			);
		} else {
			return <h2 className="boldIt">{t("b2")}</h2>;
		}
	}

	return (
		<>
			<Accordion defaultActiveKey="0" className="wideIt">
				<Card id="mainCard" className="transparent">
					<Card.Header className="centerIt">
						<CustomToggle eventKey="1"></CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							<Container fluid>
								<Row>
									<Col
										className="d-flex justify-content-center verticalAlign"
										sm={12}
										md={3}
									>
										<Row className="d-flex justify-content-center verticalAlign">
											<Col className="centerIt centerText">
												<h5 className="boldIt">{t("b3")}</h5>
											</Col>
											<Col className="centerIt">
												<input
													type="date"
													onChange={handleChangeS}
													min={minStartDate}
												/>
												{/* <DatePicker
                                                    locale= {getDefaultLocale()}
                                                    onChange={date => setStartDate(date)}                                                    
                                                    // highlightDates={highlightWithRanges}
                                                    minDate={new Date()}
                                                    placeholderText="Click to select a date"                                                                                                            
                                                /> */}
											</Col>
										</Row>
									</Col>
									<Col
										className="d-flex justify-content-center verticalAlign"
										sm={12}
										md={3}
									>
										<Row className="d-flex justify-content-center verticalAlign">
											<Col className="centerIt">
												<h5 className="boldIt">{t("b4")}</h5>
											</Col>
											<Col className="centerIt">
												<input
													type="date"
													onChange={handleChangeE}
													min={minEndDate}
												/>
												{/* <DatePicker
                                                    locale= {getDefaultLocale()}                                                    
                                                    onChange={date => setEndDate(date)}                                                    
                                                    // highlightDates={highlightWithRanges}
                                                    minDate={addDays(new Date(), 4)}
                                                    placeholderText="Click to select a date"
                                                    withPortal      
                                                /> */}
											</Col>
										</Row>
									</Col>
									<Col
										className="d-flex justify-content-center verticalAlign"
										sm={12}
										md={3}
									>
										<Row className="d-flex justify-content-center verticalAlign">
											<Col className="centerIt">
												<h5 className="boldIt">{t("b5")}</h5>
											</Col>
											<Col className="centerIt">
												<select name="people" onChange={determinePeople}>
													<option value="2"> 2 </option>
													<option value="3"> 3 </option>
												</select>
											</Col>
										</Row>
									</Col>
									<Col
										className="d-flex justify-content-center verticalAlign"
										sm={12}
										md={3}
									>
										<Button variant="success" size="lg" onClick={checkShow}>
											{t("b6")}
										</Button>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			<BookingModal
				handleClose={handleClose}
				show={show}
				checkShow={checkShow}
				arrayOfDates={arrayOfDates}
				extraPerson={extraPerson}
				handleShowStripe={handleShowStripe}				
			/>
			<StripeNew 
				handleClose={handleCloseStripe}
				show={showStripe}
			/>
		</>
	);
};

export default BookingMenu;
