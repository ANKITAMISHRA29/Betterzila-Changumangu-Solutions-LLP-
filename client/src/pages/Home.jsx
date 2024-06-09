import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Home = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            {
                isLoggedIn && isLoggedIn ? <>
                    <section className="home-section">
                        <div className='home-content'>
                            <h1 style={{ fontSize: "6rem" }}>Welcome here</h1>
                            <h2 style={{ fontSize: "2.5rem" }}>Thank you for your effort</h2>
                        </div>
                    </section>
                </> :
                    <section className="home-section">
                        <div className='home-content'>
                            <h2>New here?</h2>
                            <br />
                            <Link to="/signup">New here, let's create an account. <strong>Click Me</strong></Link>
                            <br />
                            <Link to="/signin">Already have an account, let's signin. <strong>Click Me</strong></Link>
                        </div>
                    </section>
            }
        </>
    )
}

export default Home;