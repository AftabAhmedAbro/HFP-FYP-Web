import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import DashNav from './DashNav'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const MainDash = () => {
  return (
    <div className="MainDash">
      <div>
      <DashNav/>
      </div>
        
        <Cards/>
        <div className='flex'>
          <div className='card'>
            <div className="card-body">
              <h5 className='card-title'>Transactions</h5>
              <PieChart1/>
            </div>
          
          </div>
          <div className='card'>
            <div className="card-body">
              <h5 className='card-title'>Transactions</h5>
              <PieChart1/>
            </div>
          
          </div>
        
          
        </div>
    </div>
  )
}
function PieChart1(){
  const data = {
    labels: ['Successful', 'Pending'],
    datasets: [
      {
        label: '# of Votes',
        data: [19, 12],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

 

  return (
    <div style={{ width: '300px', height: '200px' }}>
      <Pie data={data}/>
    </div>
  );
}
export default MainDash
