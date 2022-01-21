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

    return (
        <div className="slider-container">

        <Slider {...settings}>

            {/* part 1 */}
                <div className='slider'>
                    <div className='slider-box'>
                        <div className='slider-context'>
                            <div className='slider-main-context'>Track Student <br /> Progress</div>
                            <div className='slider-sub-context'>Efficiently track academic & co-curricular <br />
                                progress, record daily attendance, and provide
                                <br /> announcements in real time.</div>
                        </div>
                        <div className='slider-image'>
                            <img src={sliderImage1} className='slider-image1' />
                        </div>
                    </div>
                </div>


                {/* part 2 */}
                <div className='slider'>
                    <div className='slider-box'>
                        <div className='slider-context'>
                            <div className='slider-main-context'>Automated <br />Reports</div>
                            <div className='slider-sub-context'>Convert raw data points into actionable <br />
    insights without any manual effort.</div>
                        </div>
                        <div className='slider-image'>
                            <img src={sliderImage2} className='slider-image1' />
                        </div>
                    </div>
                </div>

                {/* part 3 */}
                <div className='slider'>
                    <div className='slider-box'>
                        <div className='slider-context'>
                            <div className='slider-main-context'>Early Warning System ( EWS )</div>
                            <div className='slider-sub-context'>Get notified in real-time whenever a<br />
                                student seems to be struggling.</div>
                        </div>
                        <div className='slider-image'>
                            <img src={sliderImage3} className='slider-image1' />
                        </div>
                    </div>
                </div>

    {/* part 4 */}
                <div className='slider'>
                    <div className='slider-box'>
                        <div className='slider-context'>
                            <div className='slider-main-context' style={{fontSize:45}}>Social Emotional Learning</div>
                            <div className='slider-sub-context'>Understand the SEL progress as well <br />
    as improve classroom behaviour <br />
    and overall well-being of your students.</div>
                        </div>
                        <div className='slider-image'>
                            <img src={sliderImage4} className='slider-image1' />
                        </div>
                    </div>
                </div>

        </Slider>
        </div>


    );
}

export default ImageSlider;


{/* <div className='slider-box'>

                <div className='slider-context'>

                <div className='slider-main-context'>Track Student <br /> Progress</div>

                <div className='slider-sub-context'>Efficiently track academic & co-curricular <br />
                    progress, record daily attendance, and provide 
                    <br /> announcements in real time.</div>

                </div>

                <div className='slider-image'>
                    <img src={sliderImage1}  className='slider-image1'/>
                </div>

            </div> */}