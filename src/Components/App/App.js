import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Imprint from "./Imprint";
import PageNotFound from "../PageNotFound";
import RecommendationPage from "../Recommendations/RecommendationPage";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function App() {
	const { t } = useTranslation();
	return (
		<HelmetProvider>
			<div className="App">
				<Helmet>
					<title>{t("TabTitle")}</title>
					<meta name="description" content={t("MetaDescription")} />
				</Helmet>
				<Switch>
					<Route exact path="/impressum/" children={<Imprint />} />
					<Route exact path="/recommendations/" children={<RecommendationPage />} />
					<Route exact path="/" children={<Main />} />
					<Route children={<PageNotFound />} />
				</Switch>
			</div>
		</HelmetProvider>
	);
}

export default App;
