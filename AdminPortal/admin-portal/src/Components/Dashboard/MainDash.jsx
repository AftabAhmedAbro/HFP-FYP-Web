import React from 'react';
import './MainDash.css';
import Cards from '../Cards/Cards';
import DashNav from './DashNav';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);
ChartJS.register(ArcElement, Tooltip, Legend);
const MainDash = () => {
    return (
        <div className="MainDash">
            <div>
                <DashNav />
                <Cards />
            </div>
            <div className="flex">
                <div className="chart-div">
                    <TransactionChart1 />
                </div>
                <div className="chart-div">
                    <OrderChart1 />
                </div>
                <div className="chart-div">
                    <OrderChart1 />
                </div>
            </div>
        </div>
    );
};
function OrderChart1() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Orders Monthly Growth',
            },
        },
    };
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ];
    const data = {
        labels,
        datasets: [
            {
                label: 'Therapists',
                data: [69, 32, 89, 50, 33, 33, 100],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Physicians',
                data: [100, 70, 200, 150, 333, 229, 400],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div style={{ width: '24rem', height: '12rem', background: '#DFDDDE' }}>
            <Line options={options} data={data} />
        </div>
    );
}
function TransactionChart1() {
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
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Transactions',
            },
        },
    };

    return (
        <div style={{ width: '270px', height: '200px', background: '#DFDDDE' }}>
            <Pie data={data} options={options} />
        </div>
    );
}

export default MainDash;
