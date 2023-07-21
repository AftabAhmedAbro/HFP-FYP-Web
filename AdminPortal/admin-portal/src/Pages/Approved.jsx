import React from 'react';
import '../Components/Profile-Form/ProfileForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Components/SideBar/Sidebar';
import ProfileFormMain from '../Components/Profile-Form/ProfileFormMain';
import ApprovedTable from '../Components/Table/ApprovedTable';
function Approved() {
    return (

        <div className="profile-form">
            <Sidebar />
            <ApprovedTable/>
        </div>
    );
}
export default Approved;
