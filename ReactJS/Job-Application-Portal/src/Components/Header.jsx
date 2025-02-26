import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../Contexts/UserContext';

const Header = () => {
    const user = useContext(UserContext);
    return (
        <div className='header-bar'>
            <Link to='/' className='link'>
                <h2>HandyJobs</h2>
            </Link>
            <div className='navlinks'>
                <NavLink to='/' className='link'>Home</NavLink>
                <NavLink to='/applications' className='link'>Applied</NavLink>
                <NavLink to="/profile" className='link'>{user.user.name}</NavLink>
            </div>
        </div>
    )
}

export default Header