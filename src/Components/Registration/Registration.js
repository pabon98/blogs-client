import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import styles from "./Registration.css"

const Register = () => {
    const { signUpWithEmailPassword, error } = useAuth();
    const [signinData, setSigninData] = useState({})
    const handleSigninData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSigninData = { ...signinData };
        newSigninData[field] = value;
        setSigninData(newSigninData);
    }
    const handleRegister = e => {
        console.log(signinData.email, signinData.password);
        e.preventDefault();
        signUpWithEmailPassword(signinData)
    }
    return (
        <div className={`${styles.body} p-5`}>
            <div className="p-5 bg-white rounded">
                <h1 className='text-center fw-bold'>Register</h1>
                <Form className='pt-5' onSubmit={handleRegister} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name="name" onBlur={handleSigninData} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onBlur={handleSigninData} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onBlur={handleSigninData} />
                    </Form.Group>
                    <button className='d-block btn btn-primary w-100 rounded-pill mt-5' type="submit">
                        Register
                    </button>
                </Form>
                {error && <p className='text-danger mt-5'>{error}</p>}
                <p className='mt-5 text-center'>Already have an account ? <NavLink to="/login">Login</NavLink></p>
            </div>
        </div>
    );
};

export default Register;