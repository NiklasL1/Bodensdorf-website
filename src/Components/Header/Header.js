import React, { Suspense, useEffect, useContext, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import "./Header.css";
import BookingMenu from "./BookingMenu";
import Button from "react-bootstrap/Button";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import de from "date-fns/locale/de";
import en from "date-fns/locale/en-US";
import HeaderMenu from "./HeaderMenu";
import { PaymentContext } from "../../Context/PaymentContext";
import { ImgContext } from "../../Context/ImgContext";
registerLocale("de", de);
registerLocale("en", en);

function Page() {
	const { setPayingRemainder } = useContext(PaymentContext);
	const { imgSize, imgType } = useContext(ImgContext);
	const elementRef = useRef();	

	useEffect(() => {
		setDefaultLocale("en");
		setPayingRemainder(false);
	}, []);

	useEffect(() => {
		if (imgSize && imgType) {
			const headerPicElement = elementRef.current;
			headerPicElement.style[
				"background-image"
			] = `url(/img/${imgType}-${imgSize}/lage-haeuservomsee2.${imgType})`;
		}
	}, [imgType]);

	return (
		<Container fluid>
			<Row>
				<div className="navBar">
					<HeaderMenu />
				</div>

				<Col
					id="headerPic"
					ref={elementRef}
					className="d-flex justify-content-center vertAlignMenu"
				>
					<BookingMenu />
				</Col>
			</Row>
		</Container>
	);
}

const Header = () => {
	return (
		<Suspense fallback={<div>loading...</div>}>
			<Page />
		</Suspense>
	);
};

export default Header;
