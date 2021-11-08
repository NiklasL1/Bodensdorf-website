import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../Context/AuthContext";
import Register from "./Register";
import Form from "react-bootstrap/Form";
import "./auth.css";
import { Link } from "react-router-dom";

const LoginModal = () => {
	const { t } = useTranslation();

	const {
		showLogin,
		setLoginUsername,
		setLoginPassword,
		setShowLogin,
		login,
	} = useContext(AuthContext);

	const handleLogin = (event) => {
		event.preventDefault();
		login();
		setShowLogin(false);
	};

	const handleRegister = () => {
		setShowLogin(false);
	};

	return (
		<Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
			<Modal.Header closeButton>
				<Modal.Title>{t("login1")}</Modal.Title>
			</Modal.Header>
			<Modal.Body>				
				<Form className="loginForm">
					<Form.Group controlId="formGroupUsername">
						<Form.Control
							type="text"
							placeholder="E-mail"
							onChange={(e) => setLoginUsername(e.target.value)}
						/>
					</Form.Group>
					{/* <Form.Group controlId="formGroupEmail">                
                                <Form.Control type="text" placeholder="E-mail" onChange={e => setLoginEmail(e.target.value)} />
                            </Form.Group> */}
					<Form.Group controlId="formGroupPassword">
						<Form.Control
							type="password"
							placeholder={t("login5")}
							onChange={(e) => setLoginPassword(e.target.value)}
						/>
						<Link to="/password">
							<Form.Label className="forgotPassword">{t("login2")}</Form.Label>
						</Link>
					</Form.Group>

					<Button
						variant="primary"
						type="submit"
						onClick={handleLogin}
						className="loginButton"
					>
						{t("login3")}
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer id="loginModalFooter">
				<Register handleRegister={handleRegister} />
				<Button variant="outline-danger" onClick={() => setShowLogin(false)}>
					{t("bookMo8")}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default LoginModal;
