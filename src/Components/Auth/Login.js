import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Register from "./Register"
import './auth.css';
import Swal from 'sweetalert2'
import { AuthContext } from "../../Context/AuthContext";
import UserProfile from './UserProfile';

const Login = () => {
    const { data, setData } = useContext(AuthContext)
    // const [registerUsername, setRegisterUsername] = useState("")
    // const [registerPassword, setRegisterPassword] = useState("")
    const [loginUsername, setLoginUsername] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    // const [data, setData] = useState(null)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); }

    const login = (event) => {
        event.preventDefault()
        axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            // url: "http://localhost:4000/api/login"
            url: "https://bodensdorf-server.herokuapp.com/api/login"
        })
            .then((res) => {
                console.log(res)
                if (res.data === "No user exists") {
                    Swal.fire({
                        icon: 'error',
                        title: "Username or password"
                    })
                }
                if (res.data === "successfully authenticated") {
                    getUser()
                    let timerInterval
                    Swal.fire({
                        icon: "success",
                        title: `Erfolgreich angemeldet!`,
                        timer: 2000,
                        timerProgressBar: true,
                        onBeforeOpen: () => {                            
                            timerInterval = setInterval(() => {
                                const content = Swal.getContent()
                                if (content) {
                                    const b = content.querySelector('b')
                                    if (b) {
                                        b.textContent = Swal.getTimerLeft()
                                    }
                                }
                            }, 100)
                        },
                        onClose: () => {
                            clearInterval(timerInterval)
                        }
                    })
                }
            })
    }

    const getUser = () => {
        axios({
            method: "GET",
            withCredentials: true,
            // url: "http://localhost:4000/api/user"
            url: "https://bodensdorf-server.herokuapp.com/api/user"
        })
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
    }

    const logout = () => {
        axios({
            method: "GET",
            withCredentials: true,
            // url: "http://localhost:4000/api/logout"
            url: "https://bodensdorf-server.herokuapp.com/api/logout"
        })
            .then(setData(null))
    }

    useEffect(() => {
        getUser()
    }, [])

    const dontClose = (e) => {
        e.stopPropagation();
    }

    const showLogin = () => {
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle className="buttonColor" variant="light" id="dropdown-basic">
                        Login
                </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Form onClick={dontClose} className="loginForm">
                            <Form.Group controlId="formGroupUsername">
                                <Form.Control type="text" placeholder="E-mail" onChange={e => setLoginUsername(e.target.value)} />
                            </Form.Group>
                            {/* <Form.Group controlId="formGroupEmail">                
                                <Form.Control type="text" placeholder="E-mail" onChange={e => setLoginEmail(e.target.value)} />
                            </Form.Group> */}
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control type="password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
                                <Form.Label className="forgotPassword">Forgot password?</Form.Label>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={login} className="loginButton">
                                Submit
                            </Button>
                        </Form>
                        <Dropdown.Divider />
                        <div className="register"><Register /></div>
                    </Dropdown.Menu>
                </Dropdown>
            </>
        )
    }

    return (
        <div>
            {data ?
                <>
                    <UserProfile
                        handleClose={handleClose}
                        show={show}
                        data={data}
                    />
                    <Button
                        className="buttonColor loginButton"
                        variant="light"
                        onClick={handleShow}
                    >
                        {data.username}
                    </Button>
                    <Button className="buttonColor" variant="light" onClick={logout}>Logout</Button>
                </>
                : showLogin()}
        </div>
    )
}

export default Login
