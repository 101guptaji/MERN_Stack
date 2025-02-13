// About : displays a section with a heading, paragraph, and list of features.

import React from 'react';

import './About.css';

const About = (props) => {

    return (
        <section id="about">
            <h2>{props.heading}</h2>

            <div className="about-container">
                <div className="about-card">
                    <img src="https://www.pymnts.com/wp-content/uploads/2019/08/malls-tenants-innovation-Simon-retail.jpg" alt="Mall image"/>
                    <h3>Mall with stairs</h3>
                    <p>We have a  big and luxury mall with large capacity. </p>
                </div>
                <div className="about-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s" alt="Home image"/>
                    <h3>Beautiful Home</h3>
                    <p>Planting small plants in pots with beautiful design and smell.</p>
                </div>
                <div className="about-card">
                    <img src="https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg" alt="Office"/>
                    <h3>Office Greenary</h3>
                    <p>Plant and make gardening in office in small space to keep place fresh.,</p>
                </div>
            </div>
        </section>
    );

};

export default About;