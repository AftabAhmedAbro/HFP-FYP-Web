import React from 'react';
import './RequestMain.css';
import RequestTable from '../Table/RequestTable';

const RequestMain = () => {
    return (
        <div className="RequestMain">
            <div className="heading1">
                <h1>Requests</h1>
            </div>

            <RequestTable />
        </div>
    );
};

export default RequestMain;
