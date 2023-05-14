import React from 'react';

import './Login.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <>
            <div className="flex">
                {/* <div class="col-lg-6 col-md-4 col-sm-3"> */}
                {/* left div for text */}
                <div className="heading">
                    Healthcare Freelance Service Platform
                </div>
                {/* </div> */}

                {/* <div class="col-lg-6 col-md-8 col-sm-9"> */}
                {/* right div */}
                <div className="login">
                    <h3 className="text-center">Sign up!</h3>

                    <form className="needs-validation">
                        <div className="form-group was-validated">
                            <label className="form-label" for="name">
                                Full name
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                required
                            />
                        </div>
                        <div className="form-group was-validated">
                            <label className="form-label" for="email">
                                Email address
                            </label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                required
                            />
                        </div>
                        <div className="form-group was-validated">
                            <label className="form-label" for="password">
                                Password
                            </label>
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                required
                            />
                        </div>
                        <div className="form-group was-validated">
                            <label className="form-label" for="contact">
                                Contact no.
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="contact"
                                required
                            />
                        </div>
                        <input
                            className="btn btn-success w-100"
                            type="submit"
                            value="Register"
                        />
                        <br />
                        <br />
                        Already have an account?
                        <Link to={'/'}>Login</Link>
                    </form>
                </div>
            </div>
        </>
    );
}
