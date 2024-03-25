import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./FooterBanner.scss";

const FooterBanner = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={6} sm = {6} xs = {6} className="footer-banner-child-1">
                    <div>
                        <img src="\Images\static\nicolas-hoizey-yBNIf_ny6Ro-unsplash.jpg" alt="Footer-Banner-pic" />
                    </div>
                </Col>
                <Col md={6} sm = {6} xs = {6} className="footer-banner-child-2">
                    <div className="footer-banner-child-2-items">
                        <h6>SAVE UP TO 35% OFF</h6>
                        <h3>
                            HUNDREDS of <br /> New lower prices !
                        </h3>
                        <p>It's more affordable than ever to give every room in your home a stylish makeover</p>
                        <a href="">Shop Now &rarr;</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FooterBanner;
