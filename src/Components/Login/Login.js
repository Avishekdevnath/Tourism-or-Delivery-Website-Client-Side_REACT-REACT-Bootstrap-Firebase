import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { allContexts } = useAuth();
    const { setUser, getEmail, getPassword, signInUsingGoogle, signInWithEmail, setIsLoading } = allContexts;
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
        <form
            onSubmit={signInWithEmail}
        >
            <h1 className="login">LOGIN</h1>
            <div className="formcontainer">
                <div className="container login-container">
                    <label htmlFor="mail"><strong>E-mail</strong></label>
                    <input className="input-style" onBlur={getEmail} type="text" placeholder="Enter E-mail" name="mail" required />
                    <label htmlFor="psw"><strong>Password</strong></label>
                    <input className="input-style" onBlur={getPassword} type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <br />
                <p>New to Heart Lin?  <Link to="/signup">Sign up</Link></p>
                <br />
                <button type="submit" className="submit w-50"><strong>LOGIN</strong></button>
                <br />
                <button onClick={handleGoogleLogin} className="btn btn-warning w-50 py-3 fw-bold">Continue With Google</button>
            </div>
        </form >
    );
};

export default Login;