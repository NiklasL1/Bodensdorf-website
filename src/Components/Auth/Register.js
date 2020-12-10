import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import "./auth.css";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../Context/AuthContext";
import { MailContext } from "../../Context/MailContext";

const Register = ({ handleRegister }) => {
	const { t } = useTranslation();

	const {
		showLogin,
		setLoginUsername,
		setLoginPassword,
		login,
		data,
	} = useContext(AuthContext);
	const { setMessage, setEmail, sendEmail, message } = useContext(MailContext);

	const [registerUsername, setRegisterUsername] = useState("");
	const [registerFirstName, setRegisterFirstName] = useState("");
	const [registerLastName, setRegisterLastName] = useState("");
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerTelNo, setRegisterTelNo] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
	};

	const register = () => {
		axios({
			method: "POST",
			data: {
				username: registerUsername,
				password: registerPassword,
				fName: registerFirstName,
				lName: registerLastName,
				email: registerEmail,
				telNo: registerTelNo,
			},
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? `${process.env.REACT_APP_DEV_API}/api/register`
					: `${process.env.REACT_APP_PROD_API}/api/register`,
		})
			.then((res) => {
				console.log(res);
				if (res.data === "User Already Exists") {
					Swal.fire({
						icon: "error",
						title: `${t("registerAlert1")}`,
					});
				} else if (res.data === "User Created") {
					Swal.fire({
						icon: "success",
						title: `${t("registerAlert2")}`,
					});
					setLoginUsername(registerUsername);
					setLoginPassword(registerPassword);
					setMessage("register");
					setEmail(registerUsername);
					console.log("register success");
				}
			})
			.then(() => {
				if (showLogin) {
					handleRegister();
					console.log(message);
				}
			});
	};

	useEffect(() => {
		if (message === "register") {
			console.log("logging in");
			login();
		}
	}, [message]);

	useEffect(() => {
		if (message === "register") {
			console.log("email sent");
			sendEmail();
			setMessage("")
		}
	}, [data]);

	const checkRegister = (event) => {
		event.preventDefault();
		if (!registerFirstName || registerFirstName === "") {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert3")}`,
			});
		} else if (!registerLastName || registerLastName === "") {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert4")}`,
			});
		} else if (!registerEmail || registerEmail === "") {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert5")}`,
			});
		} else if (!registerTelNo || registerTelNo === "") {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert6")}`,
			});
		} else if (!registerPassword || registerPassword === "") {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert7")}`,
			});
		} else if (!registerUsername || registerUsername === "") {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert8")}`,
			});
		} else if (!registerPasswordConfirm || registerPasswordConfirm === "") {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert9")}`,
			});
		} else if (registerPassword !== registerPasswordConfirm) {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert10")}`,
			});
		} else {
			register();
		}
	};

	const logit = () => {
		console.log(message)
	}

	return (
		<>
			<Button variant="secondary" onClick={handleShow}>
				{t("register1")}
			</Button>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title onClick={logit}>{t("register2")}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="registerForm">
						<Form.Group controlId="formGroupPersonname">
							<Form.Label>{t("register3")}</Form.Label>
							<Form.Control
								type="text"
								onChange={(e) => setRegisterFirstName(e.target.value)}
							/>
							<Form.Label>{t("register4")}</Form.Label>
							<Form.Control
								type="text"
								onChange={(e) => setRegisterLastName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formGroupTelNo">
							<Form.Label>{t("register5")}</Form.Label>
							<Form.Control
								type="number"
								onChange={(e) => setRegisterTelNo(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formGroupEmail">
							<Form.Label>{t("register6")}</Form.Label>
							<Form.Control
								type="email"
								onChange={(e) => {
									setRegisterEmail(e.target.value);
									setRegisterUsername(e.target.value);
								}}
							/>
						</Form.Group>
						{/* <Form.Group controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>                
                        <Form.Control type="text" onChange={e => setRegisterUsername(e.target.value)} />
                    </Form.Group>                       */}
						<Form.Group controlId="formGroupPassword">
							<Form.Label>{t("register7")}</Form.Label>
							<Form.Control
								type="password"
								onChange={(e) => setRegisterPassword(e.target.value)}
							/>
							<Form.Label>{t("register8")}</Form.Label>
							<Form.Control
								type="password"
								onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
							/>
						</Form.Group>
						<Button
							variant="primary"
							type="submit"
							onClick={checkRegister}
							className="registerButton"
						>
							{t("register9")}
						</Button>
					</Form>
				</Modal.Body>
				{/* <Modal.Footer>footer</Modal.Footer> */}
			</Modal>
		</>
	);
};

export default Register;
