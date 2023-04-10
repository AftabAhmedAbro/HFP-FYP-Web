import React from 'react'
import Table from '../Table/Table'
import './OrdersMain.css'
const OrdersMain = () => {
  return (
    <div className="OrdersMain">
      <div className='heading1 fixed-top'>
      <h1>Orders</h1>
      </div>  
      <Table/>       
    </div>
  )
}

export default OrdersMain
