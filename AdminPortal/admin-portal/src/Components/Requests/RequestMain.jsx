import React from 'react';
import './RequestMain.css';
import RequestTable from '../Table/RequestTable';

const RequestMain = () => {
    const handleVerifyClick = () => {
        const websiteUrl = 'https://pmdc.pk/'; // Replace with your desired website URL
        window.open(websiteUrl, '_blank');
    };

    return (
        <div className="RequestMain">
            <div className="heading1">
                <h1>Requests</h1>
            </div>

            <button
                className="btn btn-primary"
                style={{ width: '100px', marginLeft: '25px' }}
                onClick={handleVerifyClick}>
                Verify
            </button>

            <RequestTable />
        </div>
    );
};

export default RequestMain;
