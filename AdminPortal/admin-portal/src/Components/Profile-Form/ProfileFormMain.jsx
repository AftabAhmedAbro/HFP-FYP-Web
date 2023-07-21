import React, { useState } from 'react';
import './ProfileFormMain.css';
import { saveProfile } from '../firebase/users';
function ProfileFormMain() {
    
    const [profileData, setProfileData] = useState({
        name:'',
        address:'',
        busines_id:'',
        contact:''

    })
    const [loading, setLoading] = useState(false);
    const handleChange = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setProfileData({...profileData, [key]:value})
    }

    const updateData = (e)=>{
        e.preventDefault();
        const userData = JSON.parse(sessionStorage.getItem("user"));
        saveProfile(profileData, userData.email, setLoading);
    }
    return (
        <div className="main-container">
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h4>Edit Profile</h4>
                    </div>

                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="img">Select profile image: </label>
                                <input type="file" id="img" name="img" accept="image/*"onChange={(e)=>{
                                    setProfileData({...profileData, image:e.target.files[0]})
                                }}/>                                    
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control" 
                                    name='name'
                                    id="name"
                                    value={profileData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bus_id">Business ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="bus_id"
                                    name='busines_id'
                                    value={profileData.busines_id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Business Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name='address'
                                    value={profileData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contact"
                                    name='contact'
                                    value={profileData.contact}
                                    onChange={handleChange}
                                />
                            </div>
                        
                            <button type="submit" className="btn btn-primary" onClick={updateData} disabled={loading}>
                                {loading?"Updating Info...":"Update Info"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileFormMain;
