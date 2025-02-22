import React from 'react'
import { useState } from 'react'

// Validation
import * as Yup from 'yup';

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])/;

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is missing"),
        email: Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email")
            .required("Email is missing"),
        password: Yup.string()
            .matches(passRegex, "Password must contains atleast one lowercase, one uppercase, one digit and one special character")
            .matches(/[A-Za-z\d@.#$!%*?&]{8,15}$/, "Password must be 8 to 15 digits long.")
            .required("Password is missing"),
        confirmpassword: Yup.string()
            .matches(user.password, "Password must be same.")
            .required("Re-enter Password"),
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await validationSchema.validate(user, { abortEarly: false });
            alert(`Thank you ${user.name}\n Your email: ${user.email} and Password: ${user.password} has saved.`);
            setUser({
                name: "",
                email: "",
                password: "",
                confirmpassword: "",
            })

            setErrors({});
        }
        catch (error) {
            const validationErrors = {};
            if (error.inner) {
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message
                })
            }
            setErrors(validationErrors);
        }
    }

    // console.log(errors);

    return (
        <>
            <h1>Registration Form</h1>
            <form className='regForm' onSubmit={handleSubmit}>
                <input type='text'
                    name='name'
                    value={user.name}
                    onChange={handleChange}
                    placeholder='Enter your name' />
                {errors && <span>{errors.name}</span>}
                <input type='email'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                    placeholder='Enter your email id' />
                {errors && <span>{errors.email}</span>}
                <input type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                    placeholder='Enter a strong password' />
                {errors && <span> {errors.password}</span>}
                <input type='password'
                    name='confirmpassword'
                    value={user.confirmpassword}
                    onChange={handleChange}
                    placeholder='Enter the password again' />
                {errors && <span>{errors.confirmpassword}</span>}
                
                <button type='submit' className='btn'>Submit</button>
            </form>
        </>
    )
}

export default Form