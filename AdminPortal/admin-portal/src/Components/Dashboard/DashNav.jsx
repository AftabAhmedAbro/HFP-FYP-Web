import React from 'react';
import './DashNav.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const DashNav = (props) => {
    
    const location = useLocation();
    const username = location?.state?.displayName;
    console.log(location);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const navigate = useNavigate();
    const navigationPage = () => {
        return navigate('/profile');
    };

    const [modal, setModal] = useState(false);

    return (
        <>
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
                        <form className="form-inline my-2 my-lg-0 flex">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onClick={() => setModal(true)}
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit">
                                Search
                            </button>
                        </form>
                    </div>

                    <h5>
                        {/* {props.name} */}
                        Hi! {username}
                    </h5>
                    <div className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </nav>
            </div>

            <Modal
                isOpen={modal}
                toggle={() => setModal(!modal)}
                className="custom-modal">
                <ModalBody>
                    <div className="container bg-dark">
                        <div className="row">
                            <div className="col col-sm-3">
                                <div className="card card1">
                                    <img
                                        className="card-img-top"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        style={{ width: '135px' }}
                                    />
                                    <div className="card-body">
                                        <p
                                            className="card-title"
                                            style={{ fontWeight: 'bold' }}>
                                            Therapsit
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-sm-5">
                                <div className="card card2">
                                    <div className="row mb-2">
                                        <div className="col col-sm-3">
                                            <p className="card-text">
                                                Full Name
                                            </p>
                                        </div>
                                        <div className="col col-sm-9">
                                            <p className="card-text">
                                                Tom Smith
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col col-sm-3">
                                            <p className="card-text">Email</p>
                                        </div>
                                        <div className="col col-sm-9">
                                            <p className="card-text">
                                                tom@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col col-sm-3">
                                            <p className="card-text">Mobile</p>
                                        </div>
                                        <div className="col col-sm-9">
                                            <p className="card-text">
                                                (+92) 338 2869421
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col col-sm-3">
                                            <p className="card-text">Address</p>
                                        </div>
                                        <div className="col col-sm-9">
                                            <p className="card-text">
                                                Fedral B Area , Karachi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card card3">
                                    <div className="card-body">
                                        <span className="card-text text-primary font-italic me-1">
                                            Performance
                                        </span>
                                        <div
                                            className="card-text"
                                            style={{ fontSize: '.9rem' }}>
                                            Availibility
                                        </div>

                                        <ProgressBar
                                            min={0}
                                            max={100}
                                            now={95}
                                            label={`95%`}
                                        />
                                        <div
                                            className="card-text"
                                            style={{ fontSize: '.9rem' }}>
                                            Order Completetion
                                        </div>

                                        <ProgressBar
                                            min={0}
                                            max={100}
                                            now={100}
                                            label={`100%`}
                                        />
                                        <div
                                            className="card-text"
                                            style={{ fontSize: '.9rem' }}>
                                            Inbox response rate
                                        </div>

                                        <ProgressBar
                                            min={0}
                                            max={90}
                                            now={95}
                                            label={`95%`}
                                        />
                                        <div
                                            className="card-text"
                                            style={{ fontSize: '.9rem' }}>
                                            Inbox response time
                                        </div>

                                        <ProgressBar
                                            min={0}
                                            max={90}
                                            now={95}
                                            label={`95%`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default DashNav;
