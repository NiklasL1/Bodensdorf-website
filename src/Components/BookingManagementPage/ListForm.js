import React, { useState, useContext, useEffect } from "react";
import { BookingsContext } from "../../Context/BookingsContext";
import moment from "moment"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './Bookings.css';
import Swal from 'sweetalert2'

const AddToList = ({handleClose, show, handleShow}) => {  
    const { create } = useContext(BookingsContext)
    const [formState, setFormState] = useState({
        arriveStr: "",
        departStr: "",
        arriveEpoch: "",
        departEpoch: "",
        airBnB: "",
        totalPrice: "",
        prepayment: "",
        amtPaid: "",
        amtOwed: "",
        people: "",
    });

    const handleSubmit = (event) => {
        create(event, formState)
        handleClose()        
        Swal.fire({
            icon: 'success',
            title: 'Buchung erstellt!'
        }) 
    };

    const handleChange = (event) => {
        event.persist();
        const { id, value } = event.target;
        setFormState((prevState) => {
            return { ...prevState, [id]: value };
        });
    };

    useEffect(() => {
        if (formState.arriveStr) {
            setFormState((prevState) => {
                return { ...prevState, arriveEpoch: moment(formState.arriveStr, 'DD-MM-YYYY').valueOf() }
            })
        }
    }, [formState.arriveStr])

    useEffect(() => {
        if (formState.departStr) {
            setFormState((prevState) => {
                return { ...prevState, departEpoch: moment(formState.departStr, 'DD-MM-YYYY').valueOf() }
            })
        }
    }, [formState.departStr])

    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Neue Buchung</Modal.Title>
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
                        value={formState.arriveStr}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Abreise (Datum)</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="text"
                        placeholder="JJJJ-MM-TT"
                        id="departStr"
                        value={formState.departStr}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Airbnb</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="boolean"
                        placeholder="true / false"
                        id="airBnB"
                        value={formState.airBnB}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Gesamtpreiß</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="number"
                        id="totalPrice"
                        value={formState.totalPrice}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Anzahlung</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="number"
                        id="prepayment"
                        value={formState.prepayment}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Bereits bezahlt</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="number"
                        id="amtPaid"
                        value={formState.amtPaid}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Ausstehender Betrag</Form.Label>
                <Col md="12">
                    <Form.Control
                        type="number"
                        id="amtOwed"
                        value={formState.amtOwed}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Personen</Form.Label>
                <Col md="12">
                    <Form.Control type="number"
                        id="people"
                        value={formState.people}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Anreise (Epoche)</Form.Label>
                <Col md="12">
                    <Form.Control
                        readOnly="readonly"
                        type="text"
                        placeholder="Read only"
                        id="arriveEpoch"
                        value={formState.arriveEpoch}
                        onChange={handleChange} />
                </Col>
                <Form.Label column md="12">Abreise (Epoche)</Form.Label>
                <Col md="12">
                    <Form.Control
                        readOnly="readonly"
                        type="text"
                        placeholder="Read only"
                        id="departEpoch"
                        value={formState.departEpoch}
                        onChange={handleChange} />
                </Col>
            </Form.Group>
            <Button className="alignButton" variant="primary" type="submit">
                Erstellen
            </Button>
        </Form>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            close button
            </Button>            
        </Modal.Footer> */}
        </Modal>  
    )
};

export default AddToList;
