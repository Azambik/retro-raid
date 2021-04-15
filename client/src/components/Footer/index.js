import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Twitter from "../../assets/Twitter/twitter-circle-blue.png";

function Footer() {
    //in the footer, let's link a "dev" Twitter account 
    //we make up to have people tweet out about us!
    return (
        <Container>
            <Row>
                <Col>
                <a href="https://www.twitter.com/RR_Dev_Team">
                    <img className="thumbnail-logo footerrow" 
                    src={Twitter} 
                    alt="Twitter Profile Link"/>
                </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;