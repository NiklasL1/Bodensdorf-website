import React from 'react'
import './Grid4.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DirectionsText from './DirectionsText';
import MyMapComponent from './MyMapComponent';
import { useTranslation } from "react-i18next";

const Grid3 = () => {
    const { t } = useTranslation();	

    return (
        <div className="spacing">
            <h2 className="title">{t("dTitle")}</h2>
		    <h6 className="subTitle">{t("dSubTitle")}</h6>
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center verticalAlign" md={12} lg={6} ><DirectionsText /></Col>
                    <Col className="d-flex justify-content-center verticalAlign" xs={{ order: 'first' }} md={12, { order: 'first' }} lg={6, { order: 'last' }} >
                        <MyMapComponent isMarkerShown />
                    </Col>
                </Row>                
            </Container>    
        </div>
    )
}

export default Grid3