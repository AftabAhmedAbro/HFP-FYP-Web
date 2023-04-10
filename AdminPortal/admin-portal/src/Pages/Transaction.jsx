import React from 'react'
import "../Components/Transactions/Transactions.css";
import Sidebar from '../Components/SideBar/Sidebar'
import TransMain from '../Components/Transactions/TransMain';
export default function Transaction() {
  return (
    <div>
       <div className='myDiv'>
        <Sidebar/>
        <TransMain/>        
    </div>
    </div>
  )
}
