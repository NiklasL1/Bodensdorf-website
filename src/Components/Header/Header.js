import React, {
	Suspense,
	useEffect,
	useContext,
	useRef,
	useState,
} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import "./Header.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import de from "date-fns/locale/de";
import en from "date-fns/locale/en-US";
import HeaderMenu from "./HeaderMenu";
import { PaymentContext } from "../../Context/PaymentContext";
import { ImgContext } from "../../Context/ImgContext";
import { BookingLogicContext } from "../../Context/BookingLogicContext";
import { PhotosContext } from "../../Context/PhotosContext";
import BookingCalendarNew from "./BookingCalendarNew";
import LoginModal from "../Auth/LoginModal";
registerLocale("de", de);
registerLocale("en", en);

function Page() {
	const { t } = useTranslation();

	const { setPayingRemainder } = useContext(PaymentContext);
	const { imgSize, imgType } = useContext(ImgContext);
	const { showSlidesGrid1 } = useContext(PhotosContext);
	const elementRef = useRef();

	const { setShow } = useContext(BookingLogicContext);

	const [buttonClass, setButtonClass] = useState("book-btn color-4");

	useEffect(() => {
		setDefaultLocale("en");
		setPayingRemainder(false);
	}, []);

	useEffect(() => {
		if (showSlidesGrid1) {
			setButtonClass("book-btn color-4 animate");
		}
	}, [showSlidesGrid1]);

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
				<div className="bookingFloatingButton">
					<button className={buttonClass} onClick={() => setShow(true)}>
						{t("b1")}
					</button>
				</div>
				<Col
					id="headerPic"
					ref={elementRef}
					className="d-flex justify-content-center vertAlignMenu"
				>
					<div className="containerRow">
						<h1 id="pageTitle" className="layer1">
							{t("moTitle")}
						</h1>
						<div className="layer2 centerButton">
							<BookingCalendarNew />
						</div>
					</div>
					{/* <BookingMenu /> */}
				</Col>
			</Row>
			<LoginModal />
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
