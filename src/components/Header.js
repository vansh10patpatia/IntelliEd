import React from 'react';
import mobile from "../images/mobiles.png";
import styled from "styled-components";
import "./Header.css"

function Header(props) {
    return (
        <div className='header'>

            <div className='header-detail'>

                <span className='header-colorline'>Data Driven approach </span><br />
                to equitably <br />
                accelerate growth <br />
                for every learner.

                <div className='book'>
                    <button className='header-book'><span className='book-text'>Book Now</span></button>
                </ div>

            </div>

            <div className='header-image' >
                <img src={mobile} alt="" className='mobile-image' />
            </div>

        </div>
    );
}

export default Header;