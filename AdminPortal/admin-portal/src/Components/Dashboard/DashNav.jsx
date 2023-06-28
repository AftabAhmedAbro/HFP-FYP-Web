import React from 'react';
import './DashNav.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import {
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../firebaseAuth';

const DashNav = (props) => {
    const username = JSON.parse(sessionStorage.getItem('user')).displayName;
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const navigate = useNavigate();
    const navigateToHomePage = () => {
        signOut(auth)
            .then(() => {
                console.log('signOut Successfully');
                navigate('/');
            })
            .catch((err) => {
                console.log('signout unsuccessfull');
            });
    };
    const [modal, setModal] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="gap">
                <h5>{username}</h5>

                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle caret>
                        <FontAwesomeIcon icon={faUser} />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={navigateToHomePage}>
                            <FontAwesomeIcon icon={faPowerOff} /> Logout
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </>
    );
};

export default DashNav;
