import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import "./auth.css";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../Context/AuthContext";
import { MailContext } from "../../Context/MailContext";
import { LogContext } from "../../Context/LogContext";

const Register = ({ handleRegister }) => {
	const { t } = useTranslation();

	const {
		showLogin,
		setLoginUsername,
		setLoginPassword,
		login,
		registerFirstName,
		setRegisterFirstName,
		registerLastName,
		setRegisterLastName,
		registerUsername,
		setRegisterUsername,
		registerEmail,
		setRegisterEmail,
		registerTelNo,
		setRegisterTelNo,
		registerPassword,
		setRegisterPassword,
		registerPasswordConfirm,
		setRegisterPasswordConfirm,
	} = useContext(AuthContext);
	const {
		setEmail,
		registerMessage,
		setRegisterMessage,
		sendRegisterEmail,
		registerSubject,
	} = useContext(MailContext);
	const { logThis } = useContext(LogContext);

	// const [registerUsername, setRegisterUsername] = useState("");
	// const [registerFirstName, setRegisterFirstName] = useState("");
	// const [registerLastName, setRegisterLastName] = useState("");
	// const [registerEmail, setRegisterEmail] = useState("");
	// const [registerTelNo, setRegisterTelNo] = useState("");
	// const [registerPassword, setRegisterPassword] = useState("");
	// const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
	};

	const register = () => {
		axios({
			method: "POST",
			data: {
				username: registerUsername.toLowerCase(),
				password: registerPassword,
				fName: registerFirstName,
				lName: registerLastName,
				email: registerEmail.toLowerCase(),
				telNo: registerTelNo,
				language: i18n.language,
			},
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? `${process.env.REACT_APP_DEV_API}/api/register`
					: `${process.env.REACT_APP_PROD_API}/api/register`,
		})
			.then((res) => {
				logThis("from Register", res);
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
					setEmail(registerUsername);
					logThis("register success");
					setRegisterMessage(true);
				} else if (res.data === "Error") {
					Swal.fire({
						icon: "error",
						title: `${t("registerAlert11")}`,
					});
				}
			})
			.then(() => {
				if (showLogin) {
					handleRegister();
					logThis("this should be true:", registerMessage);
				}
			});
	};

	useEffect(() => {
		if (registerMessage) {
			login();
			sendRegisterEmail();
		}
	}, [registerSubject]);

	const testEmail = new RegExp(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

	const testTelNo = new RegExp(/^([+]|00)([0-9]{8,24}?)$/);

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
		} else if (!testEmail.test(registerEmail)) {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert12")}`,
			});
		} else if (!testTelNo.test(registerTelNo)) {
			Swal.fire({
				icon: "warning",
				title: `${t("registerAlert13")}`,
			});
		} else {
			register();
		}
	};

	// const logit = () => {
	// 	logThis(message, "subject:", subject, "content", content);
	// };

	return (
		<>
			<Button variant="secondary" onClick={handleShow}>
				{t("register1")}
			</Button>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>{t("register2")}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="registerForm">
						<Form.Group controlId="formGroupPersonFirstName">
							<Form.Label>{t("register3")}</Form.Label>
							<Form.Control
								type="text"
								onChange={(e) => setRegisterFirstName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formGroupPersonLastName">
							<Form.Label>{t("register4")}</Form.Label>
							<Form.Control
								type="text"
								onChange={(e) => setRegisterLastName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formGroupTelNo">
							<Form.Label>{t("register5")}</Form.Label>
							<Form.Control
								type="string"
								onChange={(e) => setRegisterTelNo(e.target.value)}
								pattern="^(\+|(00))[ ,0-9,\-]+$"
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
						<Form.Group controlId="formGroupPassword1">
							<Form.Label>{t("register7")}</Form.Label>
							<Form.Control
								type="password"
								onChange={(e) => setRegisterPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formGroupPassword2">
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
