import React from 'react'
import "../Components/Dashboard.css";
import Sidebar from '../Components/Sidebar';
import MainDash from '../Components/Main/MainDash';
import Rightside from '../Components/RightSide/Rightside';
export default function Dashboard() {
  return (
    <div className='myDiv'>
      <div className='Glass'>
        <Sidebar/>
        <MainDash/>
        <Rightside/>
      </div>
    </div>
  )
}
