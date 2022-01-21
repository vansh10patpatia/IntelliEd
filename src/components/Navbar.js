import React from 'react';
import "./Navbar.css";

function Navbar(props) {
    return (
        <div className='navbar'>



            <div className='navbar-subheading'>

                <div className='navbar-heading'>
                    IntelliED
                </div>

                <div className='navbar-feature'> Features </div>

                <div className='navbar-work'>How it works</div>

                <div className='demo-button'>
                    <button className='navbar-demo'><span className='demo-text'> Free Demo</span></button>
                </div>
            </div>

        </div>
    );
}

export default Navbar;