import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<div className="spacing">
			<div className="phantom" />
			<div className="style">
				<Container fluid>
					<Row>
						<Col className="d-flex justify-content-center ">
							Copyright © Heidrun Holzapfel-Little 2018-2020
						</Col>
						<Col className="d-flex justify-content-center">
							<Link to="/impressum" className="textStyling">
								{t("imprint")}
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Footer;
