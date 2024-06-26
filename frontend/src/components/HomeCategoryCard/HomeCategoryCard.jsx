import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import "./HomeCategoryCard.scss"

const HomeCategoryCard = () => {
  return (
    <Container fluid className = "dssd">
        <Row className='home-category-child'>
            <Col md = {6} sm = {6} xs = {6}>
                <div>
                    <img src="/Images/static/kenny-eliason-iAftdIcgpFc-unsplash.jpg" alt="home-category-pic" />
                    <h4>Bed Room</h4>
                    <a href="">Shop Now &rarr;</a>
                </div>
            </Col>
            <Col md = {6} sm = {6} xs = {6}>
                <div>
                    <img src="\Images\static\norbert-levajsics-oTJ92KUXHls-unsplash.jpg" alt="" />
                    <h4>Study Room</h4>
                    <a href="">Shop Now &rarr;</a>
                </div>
            </Col>
        </Row>
        <Row className='home-category-child'>
            <Col md = {6} sm = {6} xs = {6}>
                <div>
                    <img src="\Images\static\max-harlynking-OaeQ7T5PMl8-unsplash.jpg" alt="" />
                    <h4>Kitchen</h4>
                    <a href="">Shop Now &rarr;</a>
                </div>
            </Col>
            <Col md = {6} sm = {6} xs = {6}>
                <div>
                    <img src="\Images\static\sven-brandsma-GZ5cKOgeIB0-unsplash.jpg" alt="" />
                    <h4>Living Room</h4>
                    <a href="">Shop Now &rarr;</a>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default HomeCategoryCard