import React, { useState, useContext, useEffect } from "react";
import { BookingsContext } from "../../Context/BookingsContext";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './Bookings.css';
import moment from "moment"
import DeleteBooking from "./DeleteBooking";
import Swal from 'sweetalert2'

const EditBooking = ({handleClose, show, thisUser, _id, value, setValue}) => {
    const [overlap, setOverlap] = useState(false)
    const [tooShort, setTooShort] = useState(false)   
    const {update, list} = useContext(BookingsContext)    

    const handleSubmit = (event) => {
        event.preventDefault()
        if (tooShort) {
            Swal.fire({
                icon: 'warning',
                title: 'Anreise Datum muss mindistens vier Tage nach Abreise Datum sein'
            })            
        }
        else if (overlap) {
            Swal.fire({
                icon: 'error',
                title: 'Datum is bereits bezetzt!'                
            })                 
        } else {
            update(_id, value)
            handleClose()            
            Swal.fire({
                icon: 'success',
                title: 'Buchung wurde aktualisiert'
            })                
        }               
    };

    const handleChange = (event) => {
		event.persist();
		const { id, value } = event.target;
		setValue((prevState) => {
			return { ...prevState, [id]: value };
		});
    };
    
    const checkOverlap = () => {
        const otherBookings = list.filter(element => element._id != _id)        
        otherBookings.forEach(element => {
            if((value.arriveEpoch >= element.arriveEpoch && value.arriveEpoch <= (element.departEpoch - 86400000)) || (value.departEpoch >= (element.arriveEpoch + 86400000) && value.departEpoch <= element.departEpoch)) {
                setOverlap(true)
                // console.log("overlap")                                              
            }
            if(value.arriveEpoch <= element.arriveEpoch && value.departEpoch >= element.departEpoch) {
                setOverlap(true)                
                // console.log("overlap")                                              
            }
            if(value.departEpoch - value.arriveEpoch < 345600000) {
                setTooShort(true)
                // console.log("too short")
            }            
        })    
    }

    // const checkFieldFormats = () => {
    //     if()
    // }
    
    useEffect(() => {
        setOverlap(false)
        setTooShort(false)  
        checkOverlap()
    }, [value.arriveEpoch, value.departEpoch])

    useEffect(() => {
        if (value.arriveStr) {
            setValue((prevState) => {
                return { ...prevState, arriveEpoch: moment(value.arriveStr, 'DD-MM-YYYY').valueOf() }
            })
        }
    }, [value.arriveStr])

    useEffect(() => {
        if (value.departStr) {
            setValue((prevState) => {
                return { ...prevState, departEpoch: moment(value.departStr, 'DD-MM-YYYY').valueOf() }
            })
        }
    }, [value.departStr])

    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>{thisUser ? `Buchung von ${thisUser.fName} ${thisUser.lName} editieren` : "oops"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label column md="12">Anreise (Datum)</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="text"
                        placeholder="JJJJ-MM-TT"
                        id="arriveStr"
                        value={value.arriveStr}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Abreise (Datum)</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="text"
                        placeholder="JJJJ-MM-TT"
                        id="departStr"
                        value={value.departStr}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Airbnb</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="boolean"
                        placeholder="true / false"
                        id="airBnB"
                        value={value.airBnB}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Gesamtpreiß</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="number"
                        id="totalPrice"
                        value={value.totalPrice}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Anzahlung</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="number"
                        id="prepayment"
                        value={value.prepayment}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Bereits bezahlt</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="number"
                        id="amtPaid"
                        value={value.amtPaid}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Ausstehender Betrag</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="number"
                        id="amtOwed"
                        value={value.amtOwed}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Personen</Form.Label>
                <Col md="12">
                    <Form.Control type="number"
                        id="people"
                        value={value.people}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Anreise (Epoche)</Form.Label>
                <Col md="12">
                    <Form.Control
                        readOnly="readonly"
                        type="text"
                        placeholder="Read only"
                        id="arriveEpoch"
                        value={value.arriveEpoch}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Abreise (Epoche)</Form.Label>
                <Col md="12">
                    <Form.Control
                        readOnly="readonly"
                        type="text"
                        placeholder="Read only"
                        id="departEpoch"
                        value={value.departEpoch}
                        onChange={handleChange} />
                </Col>
            </Form.Group>
                {checkOverlap}
            <Button className="alignButton" variant="primary" type="submit">
                Editieren
            </Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
            <DeleteBooking _id={_id} />         
        </Modal.Footer>
        </Modal>  
    )
};

export default EditBooking;
