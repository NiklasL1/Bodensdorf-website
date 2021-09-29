import React, { useState, useContext, useEffect } from "react";
import {
	FloatingMenu,
	MainButton,
	ChildButton,
} from "react-floating-button-menu";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import i18n from "../../i18n";
import { setDefaultLocale } from "react-datepicker";
import { AuthContext } from "../../Context/AuthContext";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import axios from "axios";

const HeaderMenu = () => {
	const [isOpen, setIsOpen] = useState(true);
	const { t } = useTranslation();
	let history = useHistory();
	const { setShowLogin, data, setData, getUser } = useContext(AuthContext);
	const { setShow } = useContext(BookingLogicContext);

	const changeLanguage = () => {
		if (i18n.language.substring(0, 2) === "de") {
			i18n.changeLanguage("en");
			setDefaultLocale("en");
		} else if (i18n.language.substring(0, 2) === "en") {
			i18n.changeLanguage("de");
			setDefaultLocale("de");
		}
	};

	useEffect(() => {
		getUser();
	}, []);
	

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

	return (
		<FloatingMenu slideSpeed={500} direction="left" spacing={8} isOpen={isOpen}>
			<MainButton
				className="menuButton"
				iconResting={<i className="fa fa-bars fa-2x" aria-hidden="true" />}
				iconActive={<i className="fa fa-bars fa-2x" aria-hidden="true" />}
				onClick={() => setIsOpen(!isOpen)}
				size={70}
			/>

			<ChildButton
				className={data ? "hidden" : "menuButton"}
				title={t("login1")}
				icon={<i className="fa fa-sign-in fa-lg" aria-hidden="true" />}
				size={50}
				onClick={() => setShowLogin(true)}	
			/>

			<ChildButton
				className={data ? "menuButton" : "hidden"}
				title={ data ?
					(data.username === "niklas" && data.lName === "Management") ||
					(data.username === "heidi" && data.lName === "Management") ||
					(data.username === "tom" && data.lName === "Management")
						? "Management"
						: t("user0") : undefined
				}
				icon={data ?
					(data.username === "niklas" && data.lName === "Management") ||
					(data.username === "heidi" && data.lName === "Management") ||
					(data.username === "tom" && data.lName === "Management")
						? <i className="fa fa-cogs fa-lg" aria-hidden="true" />
						: <i className="fa fa-user fa-lg" aria-hidden="true" /> : undefined}
				size={50}
				onClick={ data ?
					(data.username === "niklas" && data.lName === "Management") ||
					(data.username === "heidi" && data.lName === "Management") ||
					(data.username === "tom" && data.lName === "Management")
						? () => history.push("/bookings")
						: () => history.push("/user") : undefined
				}
			/>

			<ChildButton
				className={data ? "menuButton" : "hidden"}
				title={t("login4")}
				icon={<i className="fa fa-sign-out fa-lg" aria-hidden="true" />}
				size={50}
				onClick={() => logout()}
			/>

			<ChildButton
				className="menuButton"
				title={t("book")}
				icon={<i className="fa fa-calendar fa-lg" aria-hidden="true" />}
				size={50}
				onClick={() => {
					setShow(true)
					// var top = document.getElementById("calendarSection").offsetTop; //Getting Y of target element
					// window.scrollTo(0, top);
				}}
			/>

			<ChildButton
				className="menuButton"
				title={t("recTitle")}
				icon={<i className="fa fa-star fa-lg" aria-hidden="true" />}
				size={50}
				onClick={() => {
					history.push("/recommendations");
				}}
			/>
			<ChildButton
				className="menuButton"
				title={t("ChangeLng")}
				icon={<i className="fa fa-language fa-lg" aria-hidden="true" />}
				size={50}
				onClick={() => {
					changeLanguage();
				}}
			/>
		</FloatingMenu>
	);
};

export default HeaderMenu;
