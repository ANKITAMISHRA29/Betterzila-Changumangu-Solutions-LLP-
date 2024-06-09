import React, { useEffect, useState } from 'react';
import "../index.css";
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth';

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    console.log(isLoggedIn);
    return (
        <>
            <main>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    {
                        isLoggedIn && isLoggedIn ?
                            <ul className="nav-links">
                                <li><Link to="/logout">Logout</Link></li>
                            </ul>
                            :
                            <>
                                <ul className="nav-links">
                                    <li><Link to="/signup">Signup</Link></li>
                                </ul>
                                <ul className="nav-links">
                                    <li><Link to="/signin">Signin</Link></li>
                                </ul>
                            </>
                    }
                </nav>
            </main >
        </>
    )
}

export default Navbar;