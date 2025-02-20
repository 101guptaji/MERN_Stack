import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setDBUser, addUsers } from '../Redux/Slices/userSlice';

const SignUp = () => {
    const data = useSelector(state => state.user.user);

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        Name: "",
        Email: "",
        Password: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Thank you ${user.Name}!
      You can login using ${user.Email} and ${user.Password}.`);

        setUser({
            Name: "",
            Email: "",
            Password: ""
        });

        dispatch(setDBUser(user));
        dispatch(addUsers(user));
    }

    return (
        <div>
            <h1>Sign Up </h1>

            <form>
                <div>
                    <label htmlFor='Name'>Name: </label>
                    <input type='text' name='Name' value={user.Name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='Email'>Email: </label>
                    <input type='email' name='Email' value={user.Email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='Password'>Password: </label>
                    <input type='password' name='Password' value={user.Password} onChange={handleChange} />
                </div>

                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SignUp