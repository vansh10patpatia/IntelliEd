import React from 'react';
import "./Benefit.css";
import tick from "../images/tick.png";
import benefit from "../images/benefit_Image.png";

function Benefit(props) {
    return (
        <div className='benefit'>

            <div className='benefit-heading-box'> 

               {/* <span className='bold-border'></span> */}
                <div className='benefit-heading'>Benefits</div>
                {/* <span className='bold-border'></span> */}
                
            </div>    

            <div className='benefit-box'>
                <div className='benefit-context'>

                    <div className='benefit-details'>
                        <span><img src={tick} className='benefit-tick' /></span>Saves you time.
                    </div>

                    <div className='benefit-details'>
                        <span><img src={tick} className='benefit-tick' /></span>Improve student outcomes.
                    </div>

                    <div className='benefit-details'>
                        <span><img src={tick} className='benefit-tick' /></span>Provides quick and secure access to data.
                    </div>

                    <div className='benefit-details'>
                        <span><img src={tick} className='benefit-tick' /></span>Translate data into actionable insights.
                    </div>

                    <div className='benefit-details'>
                        <span><img src={tick} className='benefit-tick' /></span>Help educators acquire a holistic view of
                        students.
                    </div>

                </div>
                <div className='benefit-image'>
                    <img src={benefit} className='app-image' />
                </div>
            </div>
        </div>
    );
}

export default Benefit;