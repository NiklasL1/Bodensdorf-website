import React from "react";
import Container from "react-bootstrap/Container";
// import BookingCalendar2 from "./BookingCalendar2";
import CalendarText from "./CalendarText";
import { useTranslation } from "react-i18next";
// import BookingMenu from "../Header/BookingMenu";

const CalendarMain = () => {
	const { t } = useTranslation();

	return (
		<div className="spacing" id="calendarSection">
			<h2 className="title">{t("cTitle")}</h2>
			<h6 className="subTitleBottom">{t("cSubTitle")}</h6>
			<Container fluid>
				<CalendarText />
			</Container>
		</div>
	);
};

export default CalendarMain;
