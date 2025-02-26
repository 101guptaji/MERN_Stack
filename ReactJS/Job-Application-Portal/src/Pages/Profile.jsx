import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const userContext = useContext(UserContext);

    const [profile, setProfile] = useState({ ...userContext.user });

    function handleChange(e) {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value })
    }

    function updateProfile(e) {
        e.preventDefault();
        userContext.setUser({ ...profile });
        navigate('/');
    }

    function resetProfile(e) {
        e.preventDefault();
        console.log(userContext.user);
        setProfile({ ...userContext.user });
    }

    return (
        <div className='profile-page'>
            <h1>Profile</h1>
            <form className='profile-form'>
                <label>
                    Name:
                    <input type='text' name="name" value={profile.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type='email' name="email" value={profile.email} onChange={handleChange} />
                </label>
                <label>
                    Address:
                    <textarea name='address' value={profile.address} onChange={handleChange} />
                </label>

                <div className='actions'>
                    <button onClick={resetProfile}>Cancel</button>
                    <button type='submit' onClick={updateProfile}>Update</button>
                </div>
            </form>
        </div>
    )
}

export default Profile