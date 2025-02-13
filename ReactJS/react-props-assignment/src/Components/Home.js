// Home : displays a hero section with a background image, heading, and paragraph.

import React from 'react'

import styled from 'styled-components';

const Hero = styled.section`
    background-image: url('https://static.vecteezy.com/system/resources/previews/026/172/295/non_2x/cartoon-style-illustration-of-house-interior-entrance-open-door-with-stairs-and-rustic-vintage-furniture-and-wooden-floor-vector.jpg');
    background-size: cover;
    height: 100vh;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Home = ({heading}) => {
    return (
        <Hero>
            <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px'}}>
                <h1 style={{backgroundColor: '#000', color:'white', textAlign:'center', fontSize:'40px'}}>{heading}</h1>
                <h2>Hi, This is my Home Page</h2>
                <p>Here you will find basic react application page</p>
            </div>
        </Hero>
    )
}

export default Home