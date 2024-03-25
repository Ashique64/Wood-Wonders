import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faPhoneAlt, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import "./HomeCard.scss";

const HomeCard = () => {
    return (
        <Container fluid>
            <Row className="home-card">
                <Col md = {4} sm = {4} xs = {4} className="home-card-1">
                    <div className="home-card-2">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="home-card-icon" />
                        <h5>Money-back</h5>
                        <p>30 days guarantee</p>
                    </div>
                </Col>
                <Col md = {4} sm = {4} xs = {4} className="home-card-1">
                    <div className="home-card-2">
                    <FontAwesomeIcon icon={faShieldAlt} className="home-card-icon" />
                    <h5>Secure Payments</h5>
                    <p>Secured by Strips</p>
                    </div>
                </Col>
                <Col md = {4} sm = {4} xs = {4} className="home-card-1">
                    <div className="home-card-2">
                    <FontAwesomeIcon icon={faPhoneAlt} className="home-card-icon" />
                    <h5>24/7 Supports</h5>
                    <p>Phone and E-mail support</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeCard;
