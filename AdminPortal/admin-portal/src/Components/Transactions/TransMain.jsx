import React from 'react'
import './TransMain.css'
import TransactionTable from '../Table/TransactionTable'
const TransMain = () => {
  return (
    <div className='TransMain'>
      <div className='heading1'>
      <h1>Transactions</h1>
      </div>
      <TransactionTable/>
    
      
    </div>
  )
}

export default TransMain
