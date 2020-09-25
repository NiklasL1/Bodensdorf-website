import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookingCalendar2 from './BookingCalendar2'
import CalendarText from './CalendarText'
import { useTranslation } from "react-i18next";
import BookingCalendar3 from './BookingCalendar3';
import BookingMenu from '../Header/BookingMenu';

const CalendarMain = () => {
    const { t } = useTranslation();	

    return (        
    <div className="spacing" id="calendarSection">
        <a name="book"><h2 className="title">{t("cTitle")}</h2></a>
        <h6 className="subTitle">{t("cSubTitle")}</h6>
        <Container fluid>
            {/* <Row className="justify-content-center">
                <BookingMenu/>
            </Row> */}
            <Row>
                <Col className="d-flex justify-content-center verticalAlign" md={12} lg={6} ><CalendarText/></Col>
                <Col className="d-flex justify-content-center verticalAlign" xs={{ order: 'first' }} md={12, { order: 'first' }} lg={6, { order: 'last' }} >
                {/* <BookingCalendar2/> */}
                <BookingCalendar3/>
                </Col>
            </Row>                
        </Container>    
    </div>
    )
}

export default CalendarMain
