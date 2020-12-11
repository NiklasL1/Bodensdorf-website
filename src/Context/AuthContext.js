import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const { t } = useTranslation();

	const [data, setData] = useState(null);
	const [loginUsername, setLoginUsername] = useState("");
	// const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const [showLogin, setShowLogin] = useState(false);
	const handleCloseLogin = () => setShowLogin(false);
	const handleShowLogin = () => {
		setShowLogin(true);
	};

	let history = useHistory();

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
			console.log(res);
		});
	};

	const login = (event) => {
		if (event) {
			event.preventDefault();
		}

		axios({
			method: "POST",
			data: {
				username: loginUsername,
				password: loginPassword,
			},
			withCredentials: true,
			url:
				process.env.REACT_APP_LOCATION === "development"
					? `${process.env.REACT_APP_DEV_API}/api/login`
					: `${process.env.REACT_APP_PROD_API}/api/login`,
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
				if (
					loginPassword !== "65527" &&
					loginUsername !== "niklas" &&
					loginUsername !== "heidi" &&
					loginUsername !== "tom"
				) {
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
			}
		});

		if (
			loginPassword === "65527" &&
			(loginUsername === "niklas" ||
				loginUsername === "heidi" ||
				loginUsername === "tom")
		) {
			
			// history.push("/bookings");
			
		}
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
				showLogin,
				setShowLogin,
				handleCloseLogin,
				handleShowLogin,
				login,
				getUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
