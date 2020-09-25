import React, { useState } from 'react'
import ListForm from './ListForm'
import Bookings from './Bookings'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Bookings.css';

const ManagementPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="alignPage">
            <ListForm handleClose={handleClose} show={show} handleShow={handleShow} />
            <Bookings />
            <div className="alignBottomButtons">
                <Link to="/"><Button variant="primary" size="lg">Home</Button></Link>
                <Button variant="success" size="lg" onClick={handleShow} className="addButton">
                    <i className="fa fa-plus fa-lg" aria-hidden="true"></i>
                </Button>
            </div>
        </div>
    )
}

export default ManagementPage
