import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import Table from "react-bootstrap/Table";

const ModalInside = ({ handleClose, show, handleShow }) => {
	const { t } = useTranslation();

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>{t("moTitle")}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Table striped bordered hover>
					<tbody>
						<tr>
							<td colSpan="6" className="boldIt">
								{t("moT1")}
							</td>
							<td colSpan="6">{t("mo1")}</td>
						</tr>
						<tr>
							<td colSpan="6" className="boldIt">
								{t("moT2")}
							</td>
							<td colSpan="6">{t("mo2")}</td>
						</tr>
						<tr>
							<td colSpan="6" className="boldIt">
								{t("moT3")}
							</td>
							<td colSpan="6">{t("mo3")}</td>
						</tr>
						<tr>
							<td colSpan="6" className="boldIt">
								{t("moT4")}
							</td>
							<td colSpan="6">{t("mo4")}</td>
						</tr>
						<tr>
							<td colSpan="6" className="boldIt">
								{t("moT5")}
							</td>
							<td colSpan="6">{t("mo5")}</td>
						</tr>
						<tr>
							<td colSpan="6" className="boldIt">
								{t("moT6")}
							</td>
							<td colSpan="6">{t("mo6")}</td>
						</tr>
					</tbody>
				</Table>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					{t("moBut")}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalInside;
