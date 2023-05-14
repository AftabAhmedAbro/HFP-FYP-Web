import { auth } from './firebaseAuth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };
    const navigate = useNavigate();
    return (
        <div className="flex">
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
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
                    <button
                        className="btn btn-success w-100"
                        onClick={
                            () => {
                                navigate('/dashboard');
                            }
                            // signIn
                        }>
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
