import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './../styles/about.css'

import logo from './../assets/images/logo.png'
import about2 from './../assets/images/about2.jpg'
import about3 from './../assets/images/about3.jpg'


const About = () => {
    return (
        <div className="about">
            <Container>
                <Row className='intro d-flex allign-items-center p-5 mt-5'>
                    <Col lg="4">
                        <img src={logo} alt="" className='h-100 w-100'/>
                    </Col>
                    <Col lg="8">
                        <h2 className='services__subtitle'>Who Are We</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis eveniet similique neque. Error dicta cum esse! Debitis assumenda aliquam corporis esse recusandae dolore alias sint, culpa deleniti, amet numquam!</p>
                    </Col>
                </Row>

                <Row className='intro d-flex allign-items-center p-5 mt-5'>  
                    <Col lg="8">
                        <h2>Your Very Own Travel Buddy</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis eveniet similique neque. Error dicta cum esse! Debitis assumenda aliquam corporis esse recusandae dolore alias sint, culpa deleniti, amet numquam!</p>
                    </Col>
                    <Col lg="4">
                        <img src={about2} alt="" className='h-100 w-100'/>
                    </Col>
                </Row>

                <Row className='intro d-flex allign-items-center p-5 mt-5'>
                    <Col lg="4">
                        <img src={about3} alt="" className='h-100 w-100'/>
                    </Col>
                    <Col lg="8">
                        <h2>Holiday Yours, Plan Ours</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis eveniet similique neque. Error dicta cum esse! Debitis assumenda aliquam corporis esse recusandae dolore alias sint, culpa deleniti, amet numquam!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About