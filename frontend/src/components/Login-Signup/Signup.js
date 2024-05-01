import React, { useState } from "react";
import * as signupFunc from "./SignupFunctions";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import "./signup.css";

export default function Signup({ history }) {
    const [newUser, setNewUser] = useState({});

    const handleChange = (e, field) => {
        setNewUser({ ...newUser, [field]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const { data } = await signupFunc.registerUser(newUser);
            console.log(data);  // Debugging purpose
            history.push("/login");
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="signup-container">
            <div className="social-signup">
                <FaFacebookF />
                <FaTwitterSquare />
            </div>
            <form onSubmit={handleRegister} className="signup-form">
                <input type="text" placeholder="Name" required onChange={e => handleChange(e, "name")} />
                <input type="email" placeholder="Email" required onChange={e => handleChange(e, "email")} />
                <input type="password" placeholder="Password" required onChange={e => handleChange(e, "password")} />
                <button type="submit" className="signup-btn">Register</button>
                <p className="login-link">
                    Already registered? <a href="#" onClick={(e) => { e.preventDefault(); history.push('/login'); }}>Log In</a>
                </p>
            </form>
        </div>
    );
}
