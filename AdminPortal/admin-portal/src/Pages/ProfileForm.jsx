import React from 'react';
import '../Components/Profile-Form/ProfileForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Components/SideBar/Sidebar';
import ProfileFormMain from '../Components/Profile-Form/ProfileFormMain';
function ProfileForm() {
    return (
        <div className="profile-form">
            <Sidebar />
            <ProfileFormMain />
        </div>
    );
}
export default ProfileForm;
