import React, { useContext } from "react";
import "./Grid1.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselOutside from "../Galleries/CarouselOutside";
import TableOutside from "./TableOutside";
import { useTranslation } from "react-i18next";
// import LightboxOutside from '../../Galleries/LightboxOutside';
import { PhotosContext } from "../../Context/PhotosContext";

const Grid1 = () => {
	const { t } = useTranslation();

	const { showSlidesGrid1, setShowSlidesGrid1 } = useContext(PhotosContext);

	return (
		<div onMouseEnter={setShowSlidesGrid1} className="spacing">
			<h2 className="title">{t("oTitle")}</h2>
			<h6 className="subTitle">{t("oSubTitle")}</h6>
			<Container fluid>
				<Row>
					<Col
						className="d-flex justify-content-center verticalAlign"
						md={12}
						lg={6}
					>
						{/* <LightboxOutside/> */}
						<CarouselOutside showSlides={showSlidesGrid1} />
					</Col>
					<Col
						className="d-flex justify-content-center verticalAlign"
						md={12}
						lg={6}
					>
						<TableOutside />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Grid1;
