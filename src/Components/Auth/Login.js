import React, { useEffect, useContext } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Register from "./Register";
import "./auth.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";
// import UserProfile from "./UserProfile";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Login = () => {
	const { t } = useTranslation();

	const {
		data,
		setData,
		loginUsername,
		setLoginUsername,
		loginPassword,
		setLoginPassword,
	} = useContext(AuthContext);

	// const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	// const handleShow = () => {
	// 	setShow(true);
	// };

	let history = useHistory();

	const login = (event) => {
		event.preventDefault();
		if (
			loginPassword == "65527" &&
			(loginUsername === "niklas" ||
				loginUsername === "heidi" ||
				loginUsername === "tom")
		) {
			history.push("/bookings");
		} else {
			axios({
				method: "POST",
				data: {
					username: loginUsername,
					password: loginPassword,
				},
				withCredentials: true,
				url:
					process.env.REACT_APP_LOCATION === "development"
						? "http://localhost:4000/api/login"
						: "https://bodensdorf-server.herokuapp.com/api/login",
			}).then((res) => {
				console.log(res);
				if (res.data === "No user exists") {
					Swal.fire({
						icon: "error",
						title: `${t("loginAlert1")}`,
					});
				}
				if (res.data === "successfully authenticated") {
					getUser();
					let timerInterval;
					Swal.fire({
						icon: "success",
						title: `${t("loginAlert2")}`,
						timer: 2000,
						timerProgressBar: true,
						onBeforeOpen: () => {
							timerInterval = setInterval(() => {
								const content = Swal.getContent();
								if (content) {
									const b = content.querySelector("b");
									if (b) {
										b.textContent = Swal.getTimerLeft();
									}
								}
							}, 100);
						},
						onClose: () => {
							clearInterval(timerInterval);
						},
					});
				}
			});
		}
	};

	const getUser = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? "http://localhost:4000/api/user"
					: "https://bodensdorf-server.herokuapp.com/api/user",
		}).then((res) => {
			setData(res.data);
			console.log(res);
		});
	};

	const logout = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? "http://localhost:4000/api/logout"
					: "https://bodensdorf-server.herokuapp.com/api/logout",
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
							<Form.Group controlId="formGroupPassword">
								<Form.Control
									type="password"
									placeholder="Password"
									onChange={(e) => setLoginPassword(e.target.value)}
								/>
								<Form.Label className="forgotPassword">
									{t("login2")}
								</Form.Label>
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
				<>
					{/* <UserProfile handleClose={handleClose} show={show} data={data} /> */}
					<Link to="/user">
						<Button
							className="buttonColor loginButton"
							variant="light"
							// onClick={handleShow}
						>
							{t("user0")}
						</Button>
					</Link>
					<Button className="buttonColor" variant="light" onClick={logout}>
						{t("login4")}
					</Button>
				</>
			) : (
				showLogin()
			)}
		</div>
	);
};

export default Login;
