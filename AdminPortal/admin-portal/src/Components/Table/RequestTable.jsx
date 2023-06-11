import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import requestData from '../firebase/requests';
import {
    faCheck,
    faTimes,
    faDownload,
} from '@fortawesome/free-solid-svg-icons';

const RequestTable = () => {
    const [tableData, setTableData] = useState(requestData);

    const handleApprove = (index) => {
        const updatedData = [...tableData];
        updatedData.splice(index, 1); // Remove the row at the specified index
        setTableData(updatedData);
    };

    const handleReject = (index) => {
        const updatedData = [...tableData];
        updatedData.splice(index, 1); // Remove the row at the specified index
        setTableData(updatedData);
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
