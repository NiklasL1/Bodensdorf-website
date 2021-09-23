import React from "react";
import { useTranslation } from "react-i18next";
import "./Grid3.css";
import { Link } from "react-router-dom";

const TableOutside = () => {
	const { t } = useTranslation();

	return (
		<div>
			<p>{t("aText1")}</p>
			<p>{t("aText2")}</p>
			<p>{t("aText3")}</p>
			<p>
				{t("aText4")}
				<Link to="/recommendations">{t("aText5")}</Link>
				{t("aText6")}
			</p>
		</div>
	);
};

export default TableOutside;
