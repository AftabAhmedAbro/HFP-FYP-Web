import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import requestData from '../firebase/requests';
import {
    faCheck,
    faTimes,
    faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { setApprovedRecord } from '../firebase/users';

const RequestTable = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(requestData);
    }, []);

    const handleApprove = (index) => {
        const approved = tableData[index];
        const email = JSON.parse(sessionStorage.getItem('user')).email;
        //Save to approved
        setApprovedRecord(approved);
        const updatedData = [...tableData];
        updatedData.splice(index, 1); // Remove the row at the specified index
        setTableData(updatedData);
    };

    const handleReject = (index) => {
        const updatedData = [...tableData];
        updatedData.splice(index, 1); // Remove the row at the specified index
        setTableData(updatedData);
    };
    const handleVerifyClick = () => {
        const websiteUrl = 'https://pmdc.pk/'; // Replace with your desired website URL
        window.open(websiteUrl, '_blank');
    };

    return (
        <div className="Table">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Address</th>
                        <th scope="col">Document</th>
                        <th scope="col">Document Varification</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{item.name}</th>
                                <th>{item.email}</th>
                                <th>{item.contact}</th>
                                <th>{item.address}</th>
                                <th>
                                    <button className="btn btn-primary mx-2">
                                        <FontAwesomeIcon icon={faDownload} />
                                    </button>
                                </th>
                                <th>
                                    <button
                                        className="btn btn-primary"
                                        style={{
                                            width: '100px',
                                            marginLeft: '25px',
                                        }}
                                        onClick={handleVerifyClick}>
                                        Verify
                                    </button>
                                </th>

                                <th>
                                    <button
                                        className="btn btn-success mx-2"
                                        onClick={() => handleApprove(index)}>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            style={{ marginRight: '10px' }}
                                        />
                                        Approved
                                    </button>
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => handleReject(index)}>
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                            style={{ marginRight: '10px' }}
                                        />
                                        Reject
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default RequestTable;
