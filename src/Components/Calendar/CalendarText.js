import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { useTranslation } from "react-i18next";
import "./CalendarText.css";
import { BookingLogicContext } from "../../Context/BookingLogicContext";

const TableOutside = () => {
	const { t } = useTranslation();

	const { setShow } = useContext(BookingLogicContext);

	return (
		<div className="calendarTextContainer">
			<Table>
				<tbody>
					<tr>
						<td className="noTopBorder2">
							<Table bordered>
								<tbody className="centerText">
									<tr>
										<td
											colSpan="3"
											className="boldIt calendarText25 noTopBorder"
										>
											{t("c3")}
										</td>
										<td colSpan="3" className="calendarTextColorBackground">
											{t("c4a")}
										</td>
										<td colSpan="3" className="calendarTextColorBackground">
											{t("c4b")}
										</td>
										<td colSpan="3" className="calendarTextColorBackground">
											{t("c4c")}
										</td>
									</tr>
									<tr>
										<td colSpan="3" className="boldIt noTopBorder">
											2
										</td>
										<td colSpan="3" className=" calendarTextColorBackground">
											62€
										</td>
										<td colSpan="3" className="calendarTextColorBackground">
											74€
										</td>
										<td colSpan="3" className=" calendarTextColorBackground">
											51€
										</td>
									</tr>
									<tr>
										<td colSpan="3" className="boldIt noTopBorder">
											3
										</td>
										<td colSpan="3" className=" calendarTextColorBackground">
											72€
										</td>
										<td colSpan="3" className=" calendarTextColorBackground">
											84€
										</td>
										<td colSpan="3" className=" calendarTextColorBackground">
											61€
										</td>
									</tr>
								</tbody>
							</Table>
						</td>
					</tr>
					<tr className="pricesText">{t("c5")}</tr>
					<tr>
						<td colSpan="12" className="noTopBorder2">
							<Table bordered>
								<tbody className="greyBack">
									<tr>
										<td
											colSpan="3"
											className="boldIt calendarTextColorBackground50 alignRightText"
										>
											{t("c7")}
										</td>
										<td colSpan="9" className="calendarTextColorBackground50">
											{t("c8")}
										</td>
									</tr>
									<tr>
										<td
											colSpan="3"
											className="boldIt calendarTextColorBackground50 alignRightText"
										>
											{t("c9")}
										</td>
										<td colSpan="9" className="calendarTextColorBackground50">
											{t("c10")}
										</td>
									</tr>
									<tr>
										<td
											colSpan="3"
											className="boldIt calendarTextColorBackground50 alignRightText"
										>
											{t("c11")}
										</td>
										<td colSpan="9" className="calendarTextColorBackground50">
											{t("c12")}
										</td>
									</tr>
								</tbody>
							</Table>
						</td>
					</tr>
				</tbody>
			</Table>
			<Table>
				<tbody>
					<tr>
						<td className="noTopBorder2">
							<button onClick={() => setShow(true)} className="cal-btn color-4">
								{t("b1")}
							</button>
						</td>
					</tr>
					<tr>
						<td colSpan="12" className="noTopBorder2">
							<h4 className="boldIt">{t("c1")}</h4>
							<div>{t("c2")}</div>
						</td>
					</tr>
					<tr>
						<td className="noTopBorder2">
							<h4 className="boldIt">{t("c6")}</h4>
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
		</div>
	);
};

export default TableOutside;
