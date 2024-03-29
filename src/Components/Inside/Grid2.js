import React, { useState } from "react";
import "./Grid2.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselInside from "../Galleries/CarouselInside";
import TableInside from "./TableInside";
import { useTranslation } from "react-i18next";
// import LightboxInside from '../Galleries/LightboxInside';

const Grid2 = () => {
	const { t } = useTranslation();

	const [showSlidesGrid2, setShowSlidesGrid2] = useState(false);

	return (
		<div onMouseEnter={setShowSlidesGrid2} className="spacing">
			<h2 className="title">{t("iTitle")}</h2>
			<h6 className="subTitle">{t("iSubTitle")}</h6>
			<Container fluid>
				<Row>
					<Col
						className="d-flex justify-content-center verticalAlign"
						md={12}
						lg={6}
					>
						<TableInside />
					</Col>
					<Col
						className="d-flex justify-content-center verticalAlign"
						xs={{ order: "first" }}
						md={(12, { order: "first" })}
						lg={(6, { order: "last" })}
					>
						{/* <LightboxInside /> */}
						<CarouselInside showSlides={showSlidesGrid2} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Grid2;
