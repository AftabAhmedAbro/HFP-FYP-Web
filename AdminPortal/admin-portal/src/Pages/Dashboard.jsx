import React from 'react';
import '../Components/Dashboard/Dashboard.css';
import Sidebar from '../Components/SideBar/Sidebar';
import MainDash from '../Components/Dashboard/MainDash';
import DashNav from '../Components/Dashboard/DashNav';
import Rightside from '../Components/RightSide/Rightside';

export default function Dashboard() {
    return (
        <div className="myDiv1">
            <Sidebar />
            <MainDash />
        </div>
    );
}
