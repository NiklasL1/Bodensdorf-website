import React from 'react'
import './Grid3.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import AttractionsText from './AttractionsText';
import { useTranslation } from "react-i18next";

const Grid3 = () => {
    const { t } = useTranslation();	

    return (
        <div className="spacing">
            <a name="area"><h2 className="title">{t("aTitle")}</h2></a>
		    <h6 className="subTitle">{t("aSubTitle")}</h6>
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center verticalAlign padIt" md={12} lg={6} ><Image src="/img/ossiach-kollage.jpg" rounded fluid/></Col>
                    <Col className="d-flex justify-content-center verticalAlign" md={12} lg={6} ><AttractionsText /> </Col>
                </Row>                
            </Container>    
        </div>
    )
}

export default Grid3