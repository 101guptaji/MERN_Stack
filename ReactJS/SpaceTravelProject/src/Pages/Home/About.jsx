import React from 'react'
import image from '../../assets/aboutPage1.jpg';

const About = ({heading}) => {
    return (
        <div className="about-container">
            <h1 className='heading'>{heading}</h1>
            <section className="about">
                <img src={image} alt='' />
                <div className='content'>
                    <h2>Lorem, ipsum</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sed corporis, sequi fugit optio ex ea ullam officia assumenda explicabo quod unde minus laboriosam iure temporibus, deleniti, ut quidem facilis.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sed corporis, sequi fugit optio ex ea ullam officia assumenda explicabo quod unde minus laboriosam iure temporibus, deleniti, ut quidem facilis.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About