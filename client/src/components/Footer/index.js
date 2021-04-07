import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    //in the footer, let's link a "dev" Twitter account 
    //we make up to have people tweet out about us!
    return (
        <Container>
            <Row>
                <Col>
                <a>
                    <img></img>
                </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;