import React from 'react';
//react-bootstrap added on this branch to auto style some elements
//import Image from 'react-bootstrap/Image'
//import RRLogo for jumbotron
import {Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
    //1st row is title; 2nd row is about; 3rd row is loading posts...
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>RETRO RAID</h1>
                    </Col>
                    <Col>
                        <Image></Image>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p>Get ready to RAID! Create a character, jump into the verbal battlegrounds, and crawl those forum-dungeons!</p>
                        </div> 
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </section>
    );
}

export default Home;
