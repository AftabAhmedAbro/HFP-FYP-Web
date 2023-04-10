import React from 'react';
import { RequestTableData } from '../Data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
const RequestTable = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {RequestTableData.map((item, index) => {
                    return (
                        <tr>
                            <th>{item.name}</th>
                            <th>{item.email}</th>
                            <th>{item.contact}</th>
                            <th>{item.address}</th>
                            <th>
                                <button className="btn btn-success mx-2">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ marginRight: '10px' }}
                                    />
                                    Approved
                                </button>
                                <button className="btn btn-danger mx-2">
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
    );
};

export default RequestTable;
