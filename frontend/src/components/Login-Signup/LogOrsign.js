import React, { useState } from 'react';
import * as logFunc from './loginFunctions.js';
import './logOrsign.css';
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";

export default function LogOrsign({ history }) {
    const [userData, setUserData] = useState({});

    const handleChange = (e, field) => {
        setUserData({ ...userData, [field]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await logFunc.logUserIn(userData);
            sessionStorage.setItem('authToken', data.token);
            history.push('/routes');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <div className="social-login">
                    <a href="#" className="facebook"><FaFacebookF /></a>
                    <a href="#" className="twitter"><FaTwitterSquare /></a>
                </div>
                <input type="email" name="email" placeholder="Email" required onChange={e => handleChange(e, 'email')} />
                <input type="password" name="password" placeholder="Password" required onChange={e => handleChange(e, 'password')} />
                <button type="submit" className="login-btn">Login</button>
                <p className="signup-link">
                    Not registered yet? <a href="#" onClick={(e) => { e.preventDefault(); history.push('/register'); }}>Sign Up</a>
                </p>
            </form>
        </div>
    );
}
