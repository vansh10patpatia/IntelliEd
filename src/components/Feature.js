import React from 'react';
import feature_1 from "../images/feature_1.jpg";
import feature_2 from "../images/feature_2.jpg";
import feature_3 from "../images/feature_3.jpg";

import feature_4 from "../images/feature_4.jpg";
import feature_5 from "../images/feature_5.jpg";
import feature_6 from "../images/feature_6.jpg";
import "./Feature.css";

function Feature(props) {
    return (
        <div className='Feature'>
            
            <h1 className='feature-heading'>
                <div className='feature-lining'></div>&emsp;
                Features
                &emsp;<div className='feature-lining'></div>
            </h1>
            <div className='feature-container'>

                 <div className='feature-box'>
                     <div className='feature-image-box'>
                     <img src={feature_1} className='features-image' />
                     </div>
                     <div className='feature-context'>Predictive Analytics</div>
                     <div className='feature-sub-context'>Discover patterns and insights through our<br /> interactive visualizations that are designed<br /> to answer key questions</div>
                 </div>

                 <div className='feature-box'>
                 <div className='feature-image-box'>
                 <img src={feature_2} className='features-image'/>
                 </div>
                 <div className='feature-context'>Interactive Visualizations </div>
                    <div className='feature-sub-context'>From models trained on prior student<br /> performance data, predict future outcomes<br /> so that you can address learning gaps<br /> before it’s too late.</div> 
                </div>

                <div className='feature-box'>
                <div className='feature-image-box'>
                <img src={feature_3}  className='features-image'/>
                </div>
                <div className='feature-context'>One Click Sharing</div>
                     <div className='feature-sub-context'>With just a few clicks, you can share your<br /> reports with students, counsellors, parents & <br />school admins.</div>
                </div>
            </div>

            



<br />

            <div className='feature-container'>

                 <div className='feature-box'>
                     <div className='feature-image-box'>
                     <img src={feature_4} className='features-image' />
                     </div>
                     <div className='feature-context'>Timely Interventions</div>
                     <div className='feature-sub-context'>Use insights to provide feedback and make<br />
 effective interventions to support struggling <br />
students.</div>
                 </div>

                 <div className='feature-box'>
                 <div className='feature-image-box'>
                 <img src={feature_5} className='features-image'/>
                 </div>
                 <div className='feature-context'>Real Time Notifications</div>
                    <div className='feature-sub-context'>Within seconds, notify your institution<br />
 regarding important circulars and keep them<br />
 updated.</div> 
                </div>

                <div className='feature-box'>
                <div className='feature-image-box'>
                <img src={feature_6}  className='features-image'/>
                </div>
                <div className='feature-context'>Unified Data Source</div>
                     <div className='feature-sub-context'>An interactive system that integrates data<br />
 from multiple sources to provide detailed<br />
 analysis.</div>
                </div>
            </div>
        </div>
    );
}

export default Feature;