import React, { useRef, useEffect, useContext } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./recommendation.css";
import { Link } from "react-router-dom";
import RecommendationTab from "./RecommendationTab.js";
import { ImgContext } from "../../Context/ImgContext";

const RecommendationPage = () => {
	const { t } = useTranslation();
	const elementRef = useRef();
	const { imgSize, imgType } = useContext(ImgContext);

	useEffect(() => {
		if (imgSize && imgType) {
			const headerPicElement = elementRef.current;
			headerPicElement.style[
				"background-image"
			] = `url(/img/${imgType}-${imgSize}/lage-haeuservomsee2.${imgType})`;
		}
	}, [imgType]);

	return (
		<div className="body-bg" ref={elementRef}>
			<div className="recommendationPage">
				<Link to="/">
					<Button className="backToHomeButton">{t("user14")}</Button>
				</Link>
				<span className="recommendationTop">
					<div>
						<h1 className="recommendationTitle">{t("recTitle")}</h1>
					</div>
				</span>
				<div className="tab-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12">
								<Tabs defaultActiveKey="restaurants">
									<Tab eventKey="restaurants" title={t("recTab1")}>
										<div className="tab-item-wrapper">
											<RecommendationTab recType="restaurant" />
										</div>
									</Tab>
									<Tab eventKey="shopping" title={t("recTab2")}>
										<div className="tab-item-wrapper">
											<RecommendationTab recType="shopping" />
										</div>
									</Tab>
									<Tab eventKey="activity" title={t("recTab3")}>
										<div className="tab-item-wrapper">
											<RecommendationTab recType="activity" />
										</div>
									</Tab>
									<Tab eventKey="sight" title={t("recTab4")}>
										<div className="tab-item-wrapper">
											<RecommendationTab recType="sight" />
										</div>
									</Tab>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecommendationPage;
