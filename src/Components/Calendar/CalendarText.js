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
					<td>
						<Table>
							<tbody className="centerText">
								<tr>
									<td colSpan="3" className="boldIt">
										{t("c3")}
									</td>
									<td colSpan="9" className="boldIt">
										{t("c4")}
									</td>
								</tr>
								<tr>
									<td colSpan="3"></td>
									<td colSpan="3" className="preSeason">
										{t("c4a")}
									</td>
									<td colSpan="3" className="mainSeason">
										{t("c4b")}
									</td>
									<td colSpan="3" className="aftSeason">
										{t("c4c")}
									</td>
								</tr>
								<tr>
									<td colSpan="3" className="boldIt">
										2
									</td>
									<td colSpan="3" className="preSeason">
										62
									</td>
									<td colSpan="3" className="mainSeason">
										74
									</td>
									<td colSpan="3" className="aftSeason">
										51
									</td>
								</tr>
								<tr>
									<td colSpan="3" className="boldIt">
										3
									</td>
									<td colSpan="3" className="preSeason">
										72
									</td>
									<td colSpan="3" className="mainSeason">
										84
									</td>
									<td colSpan="3" className="aftSeason">
										61
									</td>
								</tr>
							</tbody>
						</Table>
					</td>
				</tr>
				<tr>
					<td>
						<Table>
							<tbody>
								<tr>
									<td colSpan="12">
										{t("c5")}
										<br />
										{t("c6")}
									</td>
								</tr>
								<tr className="arrivalDepartureDay">
									<td>{t("c15")}</td>
								</tr>
								<tr className="unavailableDay">
									<td>{t("c16")}</td>
								</tr>
							</tbody>
						</Table>
					</td>
				</tr>
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
							</tbody>
						</Table>
					</td>
				</tr>
				<tr>
					<td>
						<Table>
							<tbody>
								<tr>
									<td>
										<ul>
											<li>{t("c17")}</li>
											<li>{t("c18")}</li>
											<li>{t("c19")}</li>
											<li>{t("c20")}</li>
											<li>{t("c21")}</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</Table>
					</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default TableOutside;
