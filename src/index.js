import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import UsersContextProvider from "./Context/UsersContext";
import BookingLogicContextProvider from "./Context/BookingLogicContext";
import BookingsContextProvider from "./Context/BookingsContext";
import PaymentContextProvider from "./Context/PaymentContext";
import AuthContextProvider from "./Context/AuthContext";
import MailContextProvider from "./Context/MailContext";
import LogContextProvider from "./Context/LogContext";

ReactDOM.render(
	<React.StrictMode>
		<LogContextProvider>
			<UsersContextProvider>
				<BookingsContextProvider>
					<BookingLogicContextProvider>
						<PaymentContextProvider>
							<AuthContextProvider>
								<MailContextProvider>
									<BrowserRouter>
										<App />
									</BrowserRouter>
								</MailContextProvider>
							</AuthContextProvider>
						</PaymentContextProvider>
					</BookingLogicContextProvider>
				</BookingsContextProvider>
			</UsersContextProvider>
		</LogContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
