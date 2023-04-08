import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src="" alt="" />
        <span>
          Healthcare <span>Freelace</span> Service Platform 
        </span>
      </div>

      <div className="menu">
        <div className="menuItem active " onClick={()=>{
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
          <span>Payments</span>
          
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
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
