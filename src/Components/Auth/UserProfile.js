import React, {useContext} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { BookingsContext } from "../../Context/BookingsContext";

const UserProfile = ({handleClose, show, data}) => {
    const {list} = useContext(BookingsContext)
    const filteredList = list.filter(booking => booking.userID === data._id)

    const showBookings = () => {
        console.log("this is all the bookings", list)
        console.log("these are the filtered bookings", filteredList)
            filteredList.map((booking) => {
                console.log(booking.arriveStr, booking.departStr)
                return <input value={`${booking.arriveStr}` - `${booking.departStr}`}/>
            })
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Nutzer Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label column md="12">Vorname</Form.Label>
                    <Col md="12">
                        <Form.Control
                            readOnly="readonly"
                            type="text"                    
                            value={data ? data.fName : null}
                            />
                    </Col>
                    <Form.Label column md="12">Nachname</Form.Label>
                    <Col md="12">
                        <Form.Control
                            readOnly="readonly"
                            type="text"                    
                            value={data ? data.lName : null}
                            />
                    </Col>
                    <Form.Label column md="12">E-mail</Form.Label>
                    <Col md="12">
                        <Form.Control
                            readOnly="readonly"
                            type="text"                    
                            value={data ? data.email : null}
                            />
                    </Col>
                    <Form.Label column md="12">Telefonnummer</Form.Label>
                    <Col md="12">
                        <Form.Control
                            readOnly="readonly"
                            type="text"                    
                            value={data ? data.telNo : null}
                            />
                    </Col>                    
                </Form.Group>                       
            </Form>
            <h4>Ihre Buchungen:</h4>
            {filteredList ? filteredList.map((booking) => {                
                return (
                    <div>
                        <hr/>
                        <p>Anreise: {booking.arriveStr}</p>
                        <p>Abreise: {booking.departStr}</p>
                        <p>Personen: {booking.people}</p>
                        <p>Gesamtpreiß: {booking.totalPrice}</p>
                        <p>Anzahlung: {booking.amtPaid} </p>
                        <p>Austehende Zahlung: {booking.amtOwed}</p>                    
                    </div>
                )
            }) : null}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Schließen
                </Button> 
            </Modal.Footer>
        </Modal>  
    )
}

export default UserProfile
