import React, { useEffect, useContext } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Register from "./Register";
import "./auth.css";
import { AuthContext } from "../../Context/AuthContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Login = () => {
	const { t } = useTranslation();

	const {
		data,
		setData,
		setLoginUsername,
		setLoginPassword,
		login,
		getUser,
	} = useContext(AuthContext);

	const logout = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? `${process.env.REACT_APP_DEV_API}/api/logout`
					: `${process.env.REACT_APP_PROD_API}/api/logout`,
		}).then(setData(null));
	};

	useEffect(() => {
		getUser();
	}, []);

	const dontClose = (e) => {
		e.stopPropagation();
	};

	const showLogin = () => {
		return (
			<>
				<Dropdown>
					<Dropdown.Toggle
						className="buttonColor"
						variant="light"
						id="dropdown-basic"
					>
						{t("login1")}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Form onClick={dontClose} className="loginForm">
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
							<Form.Group controlId="formPassword">
								<Form.Control
									type="password"
									placeholder={t("login5")}
									onChange={(e) => setLoginPassword(e.target.value)}
								/>
								{/* <Form.Label className="forgotPassword">
									{t("login2")}
								</Form.Label> */}
							</Form.Group>
							<Button
								variant="primary"
								type="submit"
								onClick={login}
								className="loginButton"
							>
								{t("login3")}
							</Button>
						</Form>
						<Dropdown.Divider />
						<div className="register">
							<Register />
						</div>
					</Dropdown.Menu>
				</Dropdown>
			</>
		);
	};

	return (
		<div>
			{data ? (
				(data.username === "niklas" && data.lName === "Little") ||
				(data.username === "heidi" && data.lName === "Holzapfel-Little") ||
				(data.username === "tom" && data.lName === "Little") ? (
					<>
						<Link to="/bookings">
							<Button className="buttonColor loginButton" variant="light">
								Management
							</Button>
						</Link>
						<Button className="buttonColor" variant="light" onClick={logout}>
							{t("login4")}
						</Button>
					</>
				) : (
					<>
						<Link to="/user">
							<Button className="buttonColor loginButton" variant="light">
								{t("user0")}
							</Button>
						</Link>
						<Button className="buttonColor" variant="light" onClick={logout}>
							{t("login4")}
						</Button>
					</>
				)
			) : (
				showLogin()
			)}
		</div>
	);
};

export default Login;
