import React, { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { LogContext } from "./LogContext";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const { t } = useTranslation();

	const { logThis } = useContext(LogContext);

	const [hasRegistered, setHasRegistered] = useState(false);
	const [loggedInAfterRegister, setLoggedInAfterRegister] = useState(false);

	const [data, setData] = useState(null);
	const [loginUsername, setLoginUsername] = useState("");
	// const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const [registerUsername, setRegisterUsername] = useState("");
	const [registerFirstName, setRegisterFirstName] = useState("");
	const [registerLastName, setRegisterLastName] = useState("");
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerTelNo, setRegisterTelNo] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");

	const [showLogin, setShowLogin] = useState(false);
	const [showLoginDuringBooking, setShowLoginDuringBooking] = useState(false);
	const handleCloseLogin = () => setShowLoginDuringBooking(false);
	const handleShowLogin = () => {
		setShowLoginDuringBooking(true);
	};

	// let history = useHistory();

	const getUser = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? `${process.env.REACT_APP_DEV_API}/api/user`
					: `${process.env.REACT_APP_PROD_API}/api/user`,
		}).then((res) => {
			setData(res.data);
			logThis(res);
		});
	};

	const login = (event) => {
		if (event) {
			event.preventDefault();
		}

		axios({
			method: "POST",
			data: {
				username: loginUsername.toLowerCase(),
				password: loginPassword,
			},
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? `${process.env.REACT_APP_DEV_API}/api/login`
					: `${process.env.REACT_APP_PROD_API}/api/login`,
		}).then((res) => {
			logThis(res);
			if (res.data === "No user exists") {
				Swal.fire({
					icon: "error",
					title: `${t("loginAlert1")}`,
				});
			}
			if (res.data === "successfully authenticated") {
				getUser();
				if (
					loginPassword !== process.env.REACT_APP_MAN_PSWD &&
					loginUsername !== process.env.REACT_APP_MAN_USER_1 &&
					loginUsername !== process.env.REACT_APP_MAN_USER_2 &&
					loginUsername !== process.env.REACT_APP_MAN_USER_3
				) {
					let timerInterval;
					Swal.fire({
						icon: "success",
						title: `${t("loginAlert2")}`,
						timer: 1500,
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
			}
		});
	};

	return (
		<AuthContext.Provider
			value={{
				data,
				setData,
				loginUsername,
				setLoginUsername,
				loginPassword,
				setLoginPassword,
				showLoginDuringBooking,
				setShowLoginDuringBooking,
				showLogin,
				setShowLogin,
				handleCloseLogin,
				handleShowLogin,
				login,
				getUser,
				hasRegistered,
				setHasRegistered,
				loggedInAfterRegister,
				setLoggedInAfterRegister,
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
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
