import React from 'react';
import Sidebar from '../Components/SideBar/Sidebar';
import '../Components/Requests/Requests.css';
import RequestMain from '../Components/Requests/RequestMain';
export default function Requests() {
    return (
        <div className="requestDiv">
            <Sidebar />
            <RequestMain />
        </div>
    );
}
