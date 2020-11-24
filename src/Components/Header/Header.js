import React, { Suspense, useEffect, useContext } from "react";
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
import Login from "../Auth/Login";
import { PaymentContext } from "../../Context/PaymentContext";
registerLocale("de", de);
registerLocale("en", en);

function Page() {
	const { setPayingRemainder } = useContext(PaymentContext);

	const { t } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setDefaultLocale(lng);
	};

	useEffect(() => {
		setDefaultLocale("de");
		setPayingRemainder(false);
	}, []);

	return (
		<Container fluid>
			<Row>
				<Navbar collapseOnSelect expand="sm" fixed="top">
					<Navbar.Brand>
						<Navbar.Brand onClick={() => changeLanguage("de")}>
							<Button className="buttonColor" variant="light" size="lg">
								DE
							</Button>
						</Navbar.Brand>
						<Navbar.Brand onClick={() => changeLanguage("en")}>
							<Button className="buttonColor" variant="light" size="lg">
								EN
							</Button>
						</Navbar.Brand>
					</Navbar.Brand>
					<Navbar.Brand>
						<Login />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end"
					>
						<Nav.Link href="#book">
							<Button className="buttonColor" variant="light">
								{t("book")}
							</Button>
						</Nav.Link>
						<Nav.Link href="#house">
							<Button className="buttonColor" variant="light">
								{t("house")}
							</Button>
						</Nav.Link>
						<Nav.Link href="#sea">
							<Button className="buttonColor" variant="light">
								{t("sea")}
							</Button>
						</Nav.Link>
						<Nav.Link href="#area">
							<Button className="buttonColor" variant="light">
								{t("area")}
							</Button>
						</Nav.Link>
					</Navbar.Collapse>
				</Navbar>
				<Col
					id="headerPic"
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
