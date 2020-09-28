import React from "react";
import Table from "react-bootstrap/Table";
import { useTranslation } from "react-i18next";
import "./CalendarText.css";

const TableOutside = () => {
	const { t } = useTranslation();

	return (
		<Table>
			<tbody>
				<tr>
					<td colSpan="12">
						<h4 className="boldIt">{t("c1")}</h4>
						<div>{t("c2")}</div>
					</td>
				</tr>
				<tr>
					<Table>
						<tbody className="centerText">
							<tr>
								<td colSpan="2.4" className="boldIt">
									{t("c3")}
								</td>
								<td colSpan="9.6" className="boldIt">
									{t("c4")}
								</td>
							</tr>
							<tr>
								<td colSpan="2.4"></td>
								<td colSpan="2.4" className="preSeason">
									{t("c4a")}
								</td>
								<td colSpan="2.4" className="mainSeason">
									{t("c4b")}
								</td>
								<td colSpan="2.4" className="aftSeason">
									{t("c4c")}
								</td>
								<td colSpan="2.4" className="offSeason">
									{t("c4d")}
								</td>
							</tr>
							<tr>
								<td colSpan="2.4" className="boldIt">
									2
								</td>
								<td colSpan="2.4" className="preSeason">
									45
								</td>
								<td colSpan="2.4" className="mainSeason">
									63
								</td>
								<td colSpan="2.4" className="aftSeason">
									50
								</td>
								<td colSpan="2.4" className="offSeason">
									40
								</td>
							</tr>
							<tr>
								<td colSpan="2.4" className="boldIt">
									3
								</td>
								<td colSpan="2.4" className="preSeason">
									56
								</td>
								<td colSpan="2.4" className="mainSeason">
									79
								</td>
								<td colSpan="2.4" className="aftSeason">
									63
								</td>
								<td colSpan="2.4" className="offSeason">
									50
								</td>
							</tr>
						</tbody>
					</Table>
				</tr>
				<Table>
					<tbody>
						<tr>
							<td colSpan="12">
								{t("c5")}
								<br />
								{t("c6")}
							</td>
						</tr>
						<tr className="arrivalDepartureDay">{t("c15")}</tr>
						<tr className="unavailableDay">{t("c16")}</tr>
					</tbody>
				</Table>
				<tr>
					<td colSpan="12">
						<Table>
							<tbody>
								<tr className="preSeason">
									<td colSpan="3" className="boldIt">
										{t("c7")}
									</td>
									<td colSpan="9">{t("c8")}</td>
								</tr>
								<tr className="mainSeason">
									<td colSpan="3" className="boldIt">
										{t("c9")}
									</td>
									<td colSpan="9">{t("c10")}</td>
								</tr>
								<tr className="aftSeason">
									<td colSpan="3" className="boldIt">
										{t("c11")}
									</td>
									<td colSpan="9">{t("c12")}</td>
								</tr>
								<tr className="offSeason">
									<td colSpan="3" className="boldIt">
										{t("c13")}
									</td>
									<td colSpan="9">{t("c14")}</td>
								</tr>
							</tbody>
						</Table>
					</td>
				</tr>
				<tr>
					<Table>
						<tbody>
							<tr>
								<ul>
									<li>{t("c17")}</li>
									<li>{t("c18")}</li>
									<li>{t("c19")}</li>
									<li>{t("c20")}</li>
									<li>{t("c21")}</li>
								</ul>
							</tr>
						</tbody>
					</Table>
				</tr>
			</tbody>
		</Table>
	);
};

export default TableOutside;
