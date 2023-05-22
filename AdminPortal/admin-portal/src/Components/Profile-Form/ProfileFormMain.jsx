import React from 'react';
import './ProfileFormMain.css';
function ProfileFormMain() {
    return (
        <div className="main-container">
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h4>Edit Profile</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value="Yashfeen Mirza"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value="yashfeenmirza93@gmail.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value="shdbjsbjdsk"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contact"
                                    value="03223676099"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileFormMain;
