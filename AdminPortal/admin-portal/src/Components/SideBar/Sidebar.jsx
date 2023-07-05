import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth, signOut } from 'firebase/auth';
import {
    faClipboardList,
    faMoneyCheckAlt,
    faUsers,
    faChartLine,
    faPowerOff,
    faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { SideBarData } from '../Data/Data';
import { useState } from 'react';
import { auth } from '../firebaseAuth';
const Sidebar = () => {
    const [selected, setSelected] = useState();
    const auth = getAuth();
    const navigate = useNavigate();
    const navigationPage = (index) => {
        if (index == 0) {
            return navigate('/dashboard');
        } else if (index == 1) {
            return navigate('/orders');
        } else if (index === 2) {
            return navigate('/transaction');
        } else if (index === 3) {
            return navigate('/requests');
        }
    };

    return (
        <div className="Sidebar">

        <span>
      
          Healthcare <span>Freelace</span> Service Platform

        </span>
        
            <div className="logo">
                <img src='' alt="" />
            </div>

            <div className="menu">
                {SideBarData.map((item, index) => {
                    return (
                        <div
                            className={
                                selected === index
                                    ? 'menuItem active'
                                    : 'menuItem'
                            }
                            key={index}
                            onClick={() => {
                                setSelected(index);
                                navigationPage(index);
                            }}>
                            <div>
                                <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <span>{item.name}</span>
                        </div>
                    );
                })}

                {/* 
        <div className="menuItem active " onClick={()=>{
          handleButtonClick
          navigate('/dashboard')
        }}>
          <div>
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <span>Dashboard</span>
          
        </div>
        <div className="menuItem active" onClick={()=>{
          navigate('/orders')
        }}>
          <div>
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
          <span>Orders</span>
          
        </div>
        <div className="menuItem active" onClick={()=>{

          navigate('/transaction')
        }}>
          <div>
            <FontAwesomeIcon icon={faMoneyCheckAlt} />
          </div>
          <span>Transactions</span>
          
        </div>
        <div className="menuItem active">
          <div>
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <span>Requests</span>
          
        </div>
        <div className="menuItem active">
          <div>
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <span>Messages</span>
          
        </div>
        <div className="menuItem active" onClick={()=>{
          navigate('/')
        }}>
          <div>
            <FontAwesomeIcon icon={faPowerOff} />
          </div>
          <span>Logout</span>
          
        </div> */}
            </div>
        </div>
    );
};

export default Sidebar;
