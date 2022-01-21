import React from 'react';
import "./Work.css";

import black from "../images/work/black.png";
import youtube from "../images/work/youtube.png";
import medal from "../images/work/medal.png";
import male from "../images/work/male.png";
import female from "../images/work/female.png";

function Work(props) {
    return (
        <div className='work'>
            
            <div className='work-heading'>How it Works</div>

            <div className='work-image'>
                <img src={medal} className='medal-logo'/>
                <img src={black} className='work-youtube'/>
                <img src={youtube} className='youtube-logo'/>
                <img src={male} className='male-logo'/>
                <img src={female} className='female-logo'/>
                
            </div>
           
        </div>
    );
}

export default Work;