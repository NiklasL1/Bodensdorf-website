import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import LogContextProvider from "./Context/LogContext";
import ImgContextProvider from "./Context/ImgContext";
import PhotosContextProvider from "./Context/PhotosContext";

ReactDOM.render(
	<React.StrictMode>
		<ImgContextProvider>
			<PhotosContextProvider>
				<LogContextProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</LogContextProvider>
			</PhotosContextProvider>
		</ImgContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
