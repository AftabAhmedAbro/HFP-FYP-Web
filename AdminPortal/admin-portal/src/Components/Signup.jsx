import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../assets/HealthcareLogo.png';
import { auth } from './firebaseAuth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const [registerButtonDisabled, setRegisterButtonDisabled] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate('');
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        contact: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        setRegisterButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setErrorMsg('Successfully registered');
                const user = res.user;
                console.log(user);
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate('/dashboard');
            })
            .catch((err) => {
                setErrorMsg('Email already exists');
            })
            .finally(() => {
                setRegisterButtonDisabled(false);
                setValues({
                    name: '',
                    email: '',
                    password: '',
                    contact: '',
                });
            });
    };

    return (
        <div className="flex">
            <img src={logo} alt="" width="170px" />

            <div className="heading">Healthcare Freelance Service Platform</div>

            <div className="login">
                <h3 className="text-center">Sign up!</h3>

                <form className="needs-validation" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">
                            Full name
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            onChange={(event) =>
                                setValues((prev) => ({
                                    ...prev,
                                    name: event.target.value,
                                }))
                            }
                            required
                        />
                    </div>
                    <div className="form-group">
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
                    <div className="form-group">
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
                    <div className="form-group">
                        <label className="form-label" htmlFor="contact">
                            Contact no.
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="contact"
                            onChange={(event) =>
                                setValues((prev) => ({
                                    ...prev,
                                    contact: event.target.value,
                                }))
                            }
                            required
                        />
                    </div>
                    <div className="signup-error">{errorMsg}</div>
                    <button
                        className="btn btn-success w-100"
                        type="submit"
                        disabled={registerButtonDisabled}>
                        Register
                    </button>
                    <br />
                    <br />
                    Already have an account? <Link to={'/'}>Login</Link>
                </form>
            </div>
        </div>
    );
}
