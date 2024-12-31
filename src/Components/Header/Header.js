import React, {
	Suspense,
	useEffect,
	useContext,
	useRef,
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
import { ImgContext } from "../../Context/ImgContext";
import { PhotosContext } from "../../Context/PhotosContext";
registerLocale("de", de);
registerLocale("en", en);

function Page() {
	const { t } = useTranslation();

	const { imgSize, imgType } = useContext(ImgContext);
	const { showSlidesGrid1 } = useContext(PhotosContext);
	const elementRef = useRef();

	useEffect(() => {
		setDefaultLocale("en");
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
					<div className="containerRow">
						<h1 id="pageTitle" className="layer1">	
							{t("moTitle")}
						</h1>
					</div>
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
