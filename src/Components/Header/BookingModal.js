import React, { useState, useEffect, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";
// import moment from "moment";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import BookingButton from './BookingButton';
import StripePayment from '../Stripe/StripePayment';


const BookingModal = ({ handleClose, show }) => {
    const {totalBookingCost, arrayOfDates, showDates, prepaymentCost, restpaymentCost, available} = useContext(BookingLogicContext)

    const { t } = useTranslation();    

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{t("bookMoTitle")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>{t("bookMo1")} {arrayOfDates ? showDates(`${t("bookMoDateFunc")}`) : null}</div>
                <div>{arrayOfDates ? arrayOfDates.length : null} {t("bookMo2")} {arrayOfDates ? (arrayOfDates.length-1) : null} {t("bookMo3")}</div>                
                <div>{t("bookMo4")} {arrayOfDates ? totalBookingCost : null}€</div>
                <div>{t("bookMo5")} {arrayOfDates ? Math.round(prepaymentCost) : null}€</div>
                <div>{t("bookMo6")} {arrayOfDates ? Math.round(restpaymentCost) : null}€</div>
                {/* <BookingButton /> */}
                <StripePayment handleClose={handleClose} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>
                    {t("bookMo8")}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BookingModal