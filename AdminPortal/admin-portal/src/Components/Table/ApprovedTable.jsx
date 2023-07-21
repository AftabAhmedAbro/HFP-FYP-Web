import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faTimes,
    faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { getApprovedRecords } from '../firebase/users';

const ApprovedTable = () => {
    const [approvedData, setApprovedData] = useState([]);

    useEffect(()=>{
        getApprovedRecords(function(approvedRecords){
            setApprovedData(approvedRecords);
        })
    }, []);


    return (
        <>
        <div className="Table">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {approvedData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{item.name}</th>
                                <th>{item.email}</th>
                                <th>{item.contact}</th>
                                <th>{item.address}</th>

                                <th>
                                    <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }}/> Approved
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default ApprovedTable;