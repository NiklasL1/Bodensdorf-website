import React from "react";
import { useTranslation } from "react-i18next";
import "./Grid4.css";

const TableOutside = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h5 className="boldIt">{t("dT1")}</h5>
			<p className="noMargin">{t("d1")}</p>
			<br />
			<p>{t("d1a")}</p>
			<h5 className="boldIt">{t("dT2")}</h5>
			<p className="noMargin">{t("d2")}</p>
			<br />
			<p>{t("d2a")}</p>
			<h5 className="boldIt">{t("dT3")}</h5>
			<p className="noMargin">{t("d3")}</p>
			<br />
			<p>{t("d3a")}</p>
		</div>
	);
};

export default TableOutside;
