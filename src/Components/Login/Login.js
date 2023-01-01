import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import   "./Login.css";


const Login = () => {
    const {handleGoogleSignIn, loginWithEmailPassword, error, logOut, user, setUser, setError } = useAuth()
    const [loginData, setLoginData] = useState({})
    let navigate = useNavigate()
    if(user?.email){
        navigate("/home")  
    }
    const handleGoogleSignInRedirect = () => {
        handleGoogleSignIn()
       .then((result) => {
         console.log(result.user);
         setUser(result.user);
         setError("");
         
       })
       .catch((error) => {
         // setError(error.message);
       });
   };
    const handleLoginData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = (e) => {
        e.preventDefault()
        loginWithEmailPassword(loginData)
    }
    console.log(loginData);
    return (
        <div className={`body p-5`}>
            <div className="p-5 bg-white rounded">
                <h1 className='text-center fw-bold'>Login</h1>
                <Form className='pt-5' onSubmit={handleLogin} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onBlur={handleLoginData} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onBlur={handleLoginData} />
                        <Form.Text className='text-end d-block mt-2'>
                            Forget password ? Wan't to <span role='button' className='text-decoration-underline text-primary'>reset password</span> ?
                        </Form.Text>
                    </Form.Group>
                    <button className='d-block btn btn-primary w-100 rounded-pill mt-5' type="submit">
                        Login
                    </button>
                    <button onClick={handleGoogleSignInRedirect} className='d-block btn btn-success w-100 rounded-pill mt-3' type="submit">
                    <i className="fab fa-google me-2" />
                        Sign in with Google
                    </button>
                </Form>
                {error && <p className='text-danger mt-5'>{error}</p>}
                <p className='mt-5 text-center'>Don't have an account ? <NavLink to="/registration">Sign up</NavLink></p>
                {user.email ? <button className='btn btn-danger d-block mx-auto' onClick={logOut}>LogOut</button> : <p></p>}
            </div>
        </div>
    );
};

export default Login;