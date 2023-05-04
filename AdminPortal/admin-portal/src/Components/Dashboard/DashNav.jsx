import React from 'react';
import './DashNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const DashNav = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-light gap"
                style={{
                    padding: '2px 0.5rem',
                }}>
                <h4>Dashboard</h4>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent fixed-right">
                    {/* <form className="form-inline my-2 my-lg-0 flex">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit">
                            Search
                        </button>
                    </form> */}
                </div>

                <h5>Hi! Yashfeen Mirza</h5>
                <div className="icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </nav>
        </div>
    );
};

export default DashNav;
