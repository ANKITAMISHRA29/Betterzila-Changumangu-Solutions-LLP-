import React, { useState } from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Login = () => {
    const navigate = useNavigate();
    const { storeToken } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                storeToken(data._id);
                setFormData({
                    email: '',
                    password: ''
                });
                navigate("/");
            }
        } catch (error) {
            console.log("Frontend signup error", error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={login}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Sign In</button>

                <Link
                    to="/signup"
                    style={{ textAlign: "center", fontSize: "small", margin: "0 2rem" }}
                >
                    New User? Let's create an account
                </Link>
            </form>
        </div>
    );
};

export default Login;
