import { auth } from './firebaseAuth';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/HealthcareLogo.png';
export default function Login() {
    const [loginButtonDisabled, setLoginButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        setLoginButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setLoginButtonDisabled(false);
                setErrorMsg('Successfully Login');
                const user = res.user;
                console.log(user);
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate('/dashboard', { state: { displayName: values.name } });
            })
            .catch((err) => {
                setLoginButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };

    return (
        <div className="flex">
            <img src={logo} alt="" width="170px" />

            {/* left div htmlFor text */}
            <div className="heading">Healthcare Freelance Service Platform</div>
            {/* right div */}
            <div className="login">
                <h3 className="text-center">Welcome!</h3>

                <form /*className="needs-validation"*/>
                    <div
                        className="form-group" /*className="form-group was-validated"*/
                    >
                        <label className="form-label" htmlFor="email">
                            Email address
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            id="email"
                            onChange={(event) =>
                                setValues((prev) => ({
                                    ...prev,
                                    email: event.target.value,
                                }))
                            }
                            required
                        />
                    </div>
                    <div
                        className="form-group" /*className="form-group was-validated"*/
                    >
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            onChange={(event) =>
                                setValues((prev) => ({
                                    ...prev,
                                    password: event.target.value,
                                }))
                            }
                            required
                        />
                    </div>
                    {/* <input
            className="btn btn-success w-100"
            type="submit"
            value="SIGN IN"
            onSubmit={()=>{
              navigate('/dashboard')
            }}
          /> */}
                    <div className="signup-error">{errorMsg}</div>
                    <button
                        className="btn btn-success w-100"
                        onClick={handleSubmit}
                        disabled={loginButtonDisabled}>
                        Log In
                    </button>
                    <br />
                    <br />
                    Already have an account?
                    <Link to={'/register'}>Signup</Link>
                </form>
            </div>
        </div>
    );
}
