import React, { Component } from "react";
import styled from 'styled-components';
import "./ImageSlider.css";
import sliderImage1 from "../images/sliderImage_1.png";
import sliderImage2 from "../images/sliderImage_2.png";
import sliderImage3 from "../images/sliderImage_3.png";
import sliderImage4 from "../images/sliderImage_4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Row, Container, Col } from "react-bootstrap";


function ImageSlider(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        arrows: false,
    };

    const sliderDetails = [
        {
            heading:'Track Student Progress',
            subHeading: 'Efficiently track academic & co-curricular  progress, record daily attendance, and provide  announcements in real time.',
            image:sliderImage1
        },
        {
            heading:'Automated Reports ',
            subHeading: 'Convert raw data points into actionable  insights without any manual effort.',
            image:sliderImage2
        },
        {
            heading:'Early Warning System ( EWS )',
            subHeading: 'Get notified in real-time whenever a  student seems to be struggling.',
            image:sliderImage3
        },
        {
            heading:'Social Emotional Learning',
            subHeading: 'Understand the SEL progress as well  as improve classroom behaviour  and overall well-being of your students.',
            image:sliderImage4
        }
    ]

    function renderSlider(item,key) {
        console.log(item,key);
        var imageClass = 'slider-image'+key;
        return(<Container>
            <Row className='slider-box'>
                <Col md={6}>
                    <div className='slider-context'>
                        <div className='slider-main-context' >{item.heading}</div>
                        <div className='slider-sub-context' dangerouslySetInnerHTML={{ __html: item.subHeading }} ></div>
                    </div>
                </Col>
                <Col md={{ span: 5, offset: 1 }}>
                    <div className='slider-image-container'>
                        <img src={item.image} className={imageClass} />
                    </div>
                </Col>
            </Row>
        </Container>)
    }

    return (
        <Container className="slider-container">
            <Row>
                <Col md={{ span: 9, offset: 1 }}>
                        <Slider {...settings}>
                            {sliderDetails.map((item,key) => renderSlider(item,key))}
                            {/* {renderSlider(0)}
                            {renderSlider(1)}
                            {renderSlider(2)}
                            {renderSlider(3)} */}
                        </Slider>
                </Col>
            </Row>
        </Container>
    );
}

export default ImageSlider;

