import React from 'react';
import "./Benefit.css";
import tick from "../images/tick.png";
import benefit from "../images/benefit_Image.png";
import { Row, Container, Col } from "react-bootstrap";


function Benefit(props) {

    const benefits = [
        {
            benefit:'Saves you time.'
        },
        {
            benefit:'Improve student outcomes.'
        },
        {
            benefit:'Provides quick and secure access to data.'  
        },
        {
            benefit:'Translate data into actionable insights.'  
        },
        {
            benefit:'Help educators acquire a holistic view of students.'  
        },
    ];

    function renderBenefit(item,key) {
        return(
            <div className='benefit-details'>
                <span><img src={tick} className='benefit-tick' /></span>{item.benefit}
            </div>
        )
    }

    return (
        <Container className="benefit-container">
            <Row className='benefit'>
                <Row>
                    <div className='benefit-heading-box'> 

                        <div className='benefit-heading'>
                            <div className='benefit-lining'></div>&emsp;
                            Benefits
                            &emsp;<div className='benefit-lining'></div>
                        </div>

                    </div> 
                </Row>
                <Row className='benefit-box'>
                    <Col md={6}>
                        <div className='benefit-context'>
                            {benefits.map((item,key)=>renderBenefit(item,key))}
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <div className='benefit-image'>
                            <img src={benefit} className='app-image' />
                        </div>
                    </Col>
                </Row>
            </Row>

                   

                {/* <div className='benefit-box'>
                    <div className='benefit-context'>

                        {benefits.map((item,key)=>renderBenefit(item,key))}

                    </div>
                    <div className='benefit-image'>
                        <img src={benefit} className='app-image' />
                    </div> 
                </div> */}
        </Container>
    );
}

export default Benefit;