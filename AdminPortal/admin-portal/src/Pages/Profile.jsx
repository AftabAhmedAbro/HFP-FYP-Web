// import React from 'react';
// import '../Components/Profile/Profile.css';
// import { ProgressBar } from 'react-bootstrap';

// const Profile = () => {
//     return (
//         <div className="container bg-dark">
//             <div className="row">
//                 <div className="col col-lg-3">
//                     <div className="card card1">
//                         <img
//                             className="card-img-top"
//                             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
//                             alt="avatar"
//                             style={{ width: '145px' }}
//                         />
//                         <div className="card-body">
//                             <p
//                                 className="card-title"
//                                 style={{ fontWeight: 'bold' }}>
//                                 Therapsit
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col col-lg-5">
//                     <div className="card card2">
//                         <div className="card-body">
//                             <div className="row">
//                                 <div className="col col-sm-3 mycol">
//                                     <div className="card-text">Full Name</div>
//                                 </div>
//                                 <div className="col col-sm-9 mycol">
//                                     <div className="card-text">Tom Simth</div>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col col-sm-3 mycol">Email</div>
//                                 <div className="col col-sm-9 mycol">
//                                     {' '}
//                                     tom@gmail.com
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col col-sm-3 mycol">
//                                     Contact
//                                 </div>
//                                 <div className="col col-sm-9 mycol">
//                                     (+92) 338 2869421
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col col-sm-3 mycol">
//                                     Address
//                                 </div>
//                                 <div className="col col-sm-9 mycol">
//                                     Fedral B Area , Karachi
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col col-lg-4">
//                     <div className="card card3">
//                         <div className="card-body">
//                             <span className="card-text text-primary font-italic me-1">
//                                 Performance
//                             </span>
//                             <div
//                                 className="card-text"
//                                 style={{ fontSize: '.9rem' }}>
//                                 Availibility
//                             </div>

//                             <ProgressBar
//                                 min={0}
//                                 max={100}
//                                 now={95}
//                                 label={`95%`}
//                             />
//                             <div
//                                 className="card-text"
//                                 style={{ fontSize: '.9rem' }}>
//                                 Order Completetion
//                             </div>

//                             <ProgressBar
//                                 min={0}
//                                 max={100}
//                                 now={100}
//                                 label={`100%`}
//                             />
//                             <div
//                                 className="card-text"
//                                 style={{ fontSize: '.9rem' }}>
//                                 Inbox response rate
//                             </div>

//                             <ProgressBar
//                                 min={0}
//                                 max={90}
//                                 now={95}
//                                 label={`95%`}
//                             />
//                             <div
//                                 className="card-text"
//                                 style={{ fontSize: '.9rem' }}>
//                                 Inbox response time
//                             </div>

//                             <ProgressBar
//                                 min={0}
//                                 max={90}
//                                 now={95}
//                                 label={`95%`}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;

import React from 'react';
import '../Components/Profile/Profile.css';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { ProgressBar } from 'react-bootstrap';
export default function Profile() {
    return (
        <>
            <div className="container bg-dark">
                <div className="row">
                    <div className="col col-sm-3">
                        <div className="card card1">
                            <img
                                className="card-img-top"
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar"
                                style={{ width: '145px' }}
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
                                    <p className="card-text">Full Name</p>
                                </div>
                                <div className="col col-sm-9">
                                    <p className="card-text">Tom Smith</p>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col col-sm-3">
                                    <p className="card-text">Email</p>
                                </div>
                                <div className="col col-sm-9">
                                    <p className="card-text">tom@gmail.com</p>
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
        </>
    );
}
