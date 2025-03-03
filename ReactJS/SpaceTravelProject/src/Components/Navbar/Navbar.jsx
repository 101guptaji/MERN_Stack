import React from 'react'

import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const[color, setColor] = useState(false);

    const handleColor = () =>{
        if(window.scrollY>=200){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", handleColor);

    return (
        <nav className={color ? "bg-color" : ""}>
            <div className='logo'>
                <h1>SpaceTravel</h1>
            </div>
            <div className={click ? "menu active" : "menu"}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/pricing'>Pricing</NavLink>
                <NavLink to='/training'>Training</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>

            <div className="hamburger" onClick={handleClick}>
                {
                    click ? <FaTimes style={{ color: 'white' }} size={25} /> :
                        <FaBars style={{ color: 'white' }} size={25} />
                }

            </div>
        </nav>
    )
}

export default Navbar