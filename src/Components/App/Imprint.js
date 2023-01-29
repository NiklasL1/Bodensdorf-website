import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";

const Imprint = () => {
	const { t } = useTranslation();
	return (
		<>
			<section className="impressum">
				<h1>{t("imprint1")}</h1>
				<h3>{t("imprint2")}</h3> <br />
				<p>
					<strong>{t("imprint3")}</strong> <br />
					Heidrun Holzapfel-Little <br />
					Hügelstraße 14
					<br />
					65527 Niedernhausen <br />
				</p>
				<p>
					<strong>{t("imprint4")}</strong> <br />
					{t("imprint5")} +49 151 1135 3000
					<br />
					E-Mail: heidi (at) tomlittle.org
				</p>
				<br />
				<div>
					<h4>{t("imprint6")}</h4>
					<br />
					<strong>{t("imprint7")}</strong>
					<br />
					<br />
					{t("imprint8")}
					<br />
					<br />
					<strong>{t("imprint9")}</strong>
					<br />
					<br />
					{t("imprint10")}
					<br />
					<br />
					<strong>{t("imprint11")}</strong>
					<br />
					<br />
					{t("imprint12")}
					<br />
					<br />
					<strong>{t("imprint13")}</strong>
					<br />
					<br />
					{t("imprint14")}
					<br />
					{t("imprint15")}
					<br />
					{t("imprint16")}
				</div>
				<br />
				<strong>{t("imprint17")}</strong>
				<br />
				<br />
				<p>{t("imprint18")}</p>
				<br />
				{t("imprint19")}
				<a href="http://www.impressum-generator.de">{t("imprint20")}</a>
				{t("imprint21")}
				<a href="http://www.kanzlei-hasselbach.de/rechtsanwalt-arbeitsrecht-bonn/">
					{t("imprint22")}
				</a>
				<br />
			</section>
			<div className="style">
				<Container fluid>
					<Row>
						<Col className="d-flex justify-content-center">
							Copyright © Heidrun Holzapfel-Little 2018-2023
						</Col>
						<Col className="d-flex justify-content-center">
							<Link to="/">Home</Link>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Imprint;
