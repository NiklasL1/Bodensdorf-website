import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Imprint from "./Imprint";
import UserManagementPage from "../UserManagementPage/UserManagementPage";
import BookingManagementPage from "../BookingManagementPage/BookingManagementPage";
import PageNotFound from "../PageNotFound";
import StripeNew from "../Stripe/StripeNew";
import UserProfilePage from "../Auth/UserProfilePage";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/user/" children={<UserProfilePage />} />
				<Route exact path="/checkout/" children={<StripeNew />} />
				<Route exact path="/impressum/" children={<Imprint />} />
				<Route exact path="/users/" children={<UserManagementPage />} />
				<Route exact path="/bookings/" children={<BookingManagementPage />} />
				<Route exact path="/" children={<Main />} />
				<Route children={<PageNotFound />} />
			</Switch>
		</div>
	);
}

export default App;
