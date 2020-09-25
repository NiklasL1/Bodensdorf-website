import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2'
import './auth.css';

const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("")
    const [registerFirstName, setRegisterFirstName] = useState("")
    const [registerLastName, setRegisterLastName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerTelNo, setRegisterTelNo] = useState("")    
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("")
    // const [loginUsername, setLoginUsername] = useState("")
    // const [loginPassword, setLoginPassword] = useState("")
    // const [data, setData] = useState(null)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const register = () => {        
        axios({
            method: "POST",
            data: {
                username: registerUsername,                
                password: registerPassword,
                fName: registerFirstName,
                lName: registerLastName,
                email: registerEmail,
                telNo: registerTelNo
            },
            withCredentials: true,
            // url: "http://localhost:4000/api/register"
            url: "https://bodensdorf-server.herokuapp.com/api/register"
        })
            .then((res) => {
                console.log(res)
                if(res.data === "User Already Exists") {
                    Swal.fire({
                        icon: 'error',
                        title: "User with that email already exists"
                    })
                } else if(res.data === "User Created") {
                    Swal.fire({
                        icon: 'success',
                        title: "You reigstered!"
                    })
                    handleClose()
                }
            }
    )}

    const checkRegister = (event) => {
        event.preventDefault()
        if(!registerFirstName || registerFirstName === "") {
            Swal.fire({
                icon: 'warning',
                title: "please enter a first name"
            })
        }
        else if(!registerLastName || registerLastName === "") {
            Swal.fire({
                icon: 'warning',
                title: "please enter a last name"
            })
        }
        else if(!registerEmail || registerEmail === "") {
            Swal.fire({
                icon: 'warning',
                title: "please enter an email"
            })
        }
        else if(!registerTelNo || registerTelNo === "") {
            Swal.fire({
                icon: 'warning',
                title: "please enter a telephone number"
            })
        }        
        else if(!registerPassword || registerPassword === "") {
            Swal.fire({
                icon: 'warning',
                title: "please enter a password"
            })
        }
        else if(!registerUsername || registerUsername === "") {
            Swal.fire({
                icon: 'warning',
                title: "please enter a username"
            })
        }
        else if(!registerPasswordConfirm || registerPasswordConfirm === "") {
            Swal.fire({
                icon: 'warning',
                title: "please confirm your password"
            })
        }
        else if(registerPassword != registerPasswordConfirm) {
            Swal.fire({
                icon: 'warning',
                title: "passwords do not match"
            })
        }
        else {
            register()
        }
    }

    return (
        <>
            <p className="registerText" onClick={handleShow}>Register</p>
            <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="registerForm"> 
                    <Form.Group controlId="formGroupPersonname"> 
                        <Form.Label>First name</Form.Label>               
                        <Form.Control type="text" onChange={e => setRegisterFirstName(e.target.value)} />
                        <Form.Label>Last name</Form.Label>               
                        <Form.Control type="text" onChange={e => setRegisterLastName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formGroupTelNo">
                        <Form.Label>Telephone number</Form.Label>                
                        <Form.Control type="number" onChange={e => setRegisterTelNo(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>E-mail</Form.Label>                
                        <Form.Control type="email" onChange={e => {
                            setRegisterEmail(e.target.value) 
                            setRegisterUsername(e.target.value)}} />
                    </Form.Group>
                    {/* <Form.Group controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>                
                        <Form.Control type="text" onChange={e => setRegisterUsername(e.target.value)} />
                    </Form.Group>                       */}
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>                                              
                        <Form.Control type="password" onChange={e => setRegisterPassword(e.target.value)} />
                        <Form.Label>Confirm password</Form.Label>                                              
                        <Form.Control type="password" onChange={e => setRegisterPasswordConfirm(e.target.value)} />                         
                    </Form.Group>                    
                    <Button variant="primary" type="submit" onClick={checkRegister} className="registerButton">
                        Submit
                    </Button>
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                footer
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Register
