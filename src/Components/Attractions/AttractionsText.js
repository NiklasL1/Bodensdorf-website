import React from "react";
import { useTranslation } from "react-i18next";
import "./Grid3.css";

const TableOutside = () => {
	const { t } = useTranslation();

	return (
		<div>
			<p>{t("aText1")}</p>
			<p>{t("aText2")}</p>
			<p>{t("aText3")}</p>
		</div>
	);
};

export default TableOutside;
