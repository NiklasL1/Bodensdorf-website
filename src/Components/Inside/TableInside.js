import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import "./Grid2.css";
import ModalInside from "./ModalInside";

const TableInside = () => {
	const { t } = useTranslation();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Table>
				<tbody>
					<tr>
						<td colSpan="6" className="boldIt">
							{t("iT1")}
						</td>
						<td colSpan="6">{t("i1")}</td>
					</tr>
					<tr>
						<td colSpan="6" className="boldIt">
							{t("iT2")}
						</td>
						<td colSpan="6">{t("i2")}</td>
					</tr>
					<tr>
						<td colSpan="6" className="boldIt">
							{t("iT3")}
						</td>
						<td colSpan="6">{t("i3")}</td>
					</tr>
					<tr>
						<td colSpan="6" className="boldIt">
							{t("iT4")}
						</td>
						<td colSpan="6">{t("i4")}</td>
					</tr>
					<tr>
						<td colSpan="6" className="boldIt">
							{t("iT5")}
						</td>
						<td colSpan="6">{t("i5")}</td>
					</tr>
					<tr>
						<td colSpan="6" className="boldIt">
							{t("iT6")}
						</td>
						<td colSpan="6">{t("i6")}</td>
					</tr>
					<tr>
						<td colSpan="12" className="boldIt centerText">
							<Button variant="primary" onClick={handleShow}>
								{t("iMenu")}
							</Button>
						</td>
					</tr>
				</tbody>
			</Table>
			<ModalInside
				handleClose={handleClose}
				show={show}
				handleShow={handleShow}
			/>
		</>
	);
};

export default TableInside;
