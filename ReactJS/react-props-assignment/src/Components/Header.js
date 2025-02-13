import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div id='navbar'>
            <a href='./Home'>
                <h1>💗MyProject</h1>
            </a>
            <ul className='navMenu'>
                <li><a href="./Home">Home</a></li>
                <li><a href="./About">About</a></li>
                <li><a href="./Contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header