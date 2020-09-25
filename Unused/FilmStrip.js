import React from 'react'
import BasicFilm from 'react-film';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FilmStrip = () => {
    return (
        <div>
            <Container fluid>
                <Row >
                    <Col>
                        <BasicFilm height={ 800 } showDots = {false} >
                            <img src="/img/gallery-aussen/image001.jpg" />
                            <img src="/img/gallery-aussen/image003.jpg" />                
                            <img src="/img/gallery-aussen/image005.jpg" />
                            <img src="/img/gallery-aussen/image006.jpg" />
                            <img src="/img/gallery-aussen/image007.jpg" />
                            <img src="/img/gallery-aussen/image008.jpg" />
                            <img src="/img/gallery-aussen/image009.jpg" />
                            <img src="/img/gallery-aussen/image010.jpg" />
                            <img src="/img/gallery-aussen/image011.jpg" />
                            <img src="/img/gallery-aussen/image012.jpg" />
                            <img src="/img/gallery-aussen/image013.jpg" />
                        </BasicFilm>    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FilmStrip
