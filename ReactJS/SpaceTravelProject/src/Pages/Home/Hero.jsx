import React from 'react'
import {Link} from 'react-router-dom'
import video from '../../assets/space-travel-video.mp4'

const Hero = () => {
    return (
        <div className='hero'>
            <video src={video} autoPlay loop muted style={{ width: "100%" }} />

            <div className="content">
                <h1>Travel In Space </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                </p>

                <div className="buttons">
                    <Link to="/training">Try Now</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero