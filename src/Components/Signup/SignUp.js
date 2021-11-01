import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Signup.css'
import { Link } from 'react-router-dom';


// Code FOr Signup
const SignUp = () => {
    const { allContexts } = useAuth();
    const { setUser, getName, getEmail, getPassword, singUp, signInUsingGoogle, setIsLoading, error } = allContexts;
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <form onSubmit={singUp}>
            <h1 className="signup mt-5">SIGN UP</h1>
            <p className="text-danger text-center">{error}</p>
            <div className="formcontainer">
                <div className="container signup-container">
                    <label htmlFor="uname"><strong>Username</strong></label>
                    <input className="input-style" onBlur={getName} type="text" placeholder="Enter Username" name="uname" required />
                    <label htmlFor="mail"><strong>E-mail</strong></label>
                    <input className="input-style" onBlur={getEmail} type="text" placeholder="Enter E-mail" name="mail" required />
                    <label htmlFor="psw"><strong>Password</strong></label>
                    <input className="input-style" onBlur={getPassword} type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <br />
                <p>Already have an account?  <Link to="/login">Log in</Link></p>
                <br />
                <button type="submit" className="submit w-50 "><strong>SIGN UP</strong></button>
                <br />

                <button onClick={handleGoogleLogin} className="btn btn-warning w-50 py-3 fw-bold">Continue With Google</button>
            </div>
        </form>
    );
};

export default SignUp;