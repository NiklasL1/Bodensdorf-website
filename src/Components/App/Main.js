import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Grid1 from "../Outside/Grid1";
import Grid2 from "../Inside/Grid2";
import Grid3 from "../Attractions/Grid3";
import Grid4 from "../Directions/Grid4";
import Footer from "../Footer/Footer";
import CalendarMain from "../Calendar/CalendarMain";

function App() {
	return (
		<div className="App">
			<Header />
			<Grid1 />
			<Grid2 />
			<Grid3 />
			<Grid4 />
			<CalendarMain />
			<Footer />
		</div>
	);
}

export default App;
