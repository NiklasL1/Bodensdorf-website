import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './Bookings.css';


const UserInfo = ({handleClose2, show2, thisUser}) => {

    return (
        <Modal show={show2} onHide={handleClose2} centered>
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
                            value={thisUser ? thisUser.fName : null}
                            />
                    </Col>
                    <Form.Label column md="12">Nachname</Form.Label>
                    <Col md="12">
                        <Form.Control
                            readOnly="readonly"
                            type="text"                    
                            value={thisUser ? thisUser.lName : null}
                            />
                    </Col>
                    <Form.Label column md="12">E-mail</Form.Label>
                    <Col md="12">
                        <Form.Control
                            readOnly="readonly"
                            type="text"                    
                            value={thisUser ? thisUser.email : null}
                            />
                    </Col>
                    <Form.Label column md="12">Telefonnummer</Form.Label>
                    <Col md="12">
                        <Form.Control
                            readOnly="readonly"
                            type="text"                    
                            value={thisUser ? thisUser.telNo : null}
                            />
                    </Col>
                    <Form.Label column md="12">Username</Form.Label>
                    <Col md="12">
                        <Form.Control
                            readOnly="readonly"
                            type="text"                    
                            value={thisUser ? thisUser.username : null}
                            />
                    </Col>
                </Form.Group>                       
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>
                    Schließen
                </Button> 
            </Modal.Footer>
        </Modal>  
    )
};

export default UserInfo;
