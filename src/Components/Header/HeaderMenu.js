import React, { useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import i18n from "../../i18n";
import { setDefaultLocale } from "react-datepicker";
import Button from "react-bootstrap/Button";

const HeaderMenu = () => {
	const [isOpen, setIsOpen] = useState(true);
	const { t } = useTranslation();
	let history = useHistory();

	const changeLanguage = () => {
		if (i18n.language.substring(0, 2) === "de") {
			i18n.changeLanguage("en");
			setDefaultLocale("en");
		} else if (i18n.language.substring(0, 2) === "en") {
			i18n.changeLanguage("de");
			setDefaultLocale("de");
		}
	};

	return (
		<div className="button-container">
		  <Button
			variant="primary"
			className="menuButton"
			size="lg"
			onClick={() => {
			  history.push("/recommendations");
			}}
		  >
			<i className="fa fa-star fa-lg" aria-hidden="true" />
			{" "+t("recTitle")}
		  </Button>
	
		  <Button
			variant="secondary"
			className="menuButton"
			size="lg"
			onClick={() => {
			  changeLanguage();
			}}
		  >
			<i className="fa fa-language fa-lg" aria-hidden="true" />
			{" "+t("ChangeLng")}
		  </Button>
		</div>
	  );
};

export default HeaderMenu;
