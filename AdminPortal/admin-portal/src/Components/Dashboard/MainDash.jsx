import React from 'react';
import './MainDash.css';
import Cards from '../Cards/Cards';
import DashNav from './DashNav';
import RecentOrders from './RecentOrders';
import Rightside from '../RightSide/Rightside';
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
import { BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(BarElement);
ChartJS.register(ArcElement, Tooltip, Legend);
const MainDash = () => {
    return (
        <div>
            <div>
                <DashNav />
            </div>
            <div class="flex-container">
                <div class="flex-item1">
                    <Cards />
                    <div className="flex">
                        <div className="chart-div">
                            <TransactionChart1 />
                        </div>
                        <div className="chart-div">
                            <OrderChart1 />
                        </div>
                        <div className="chart-div">
                            <ServicesChart1 />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <RecentOrders />
                        </div>
                        <div>
                            <Rightside />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// services Chart function
function ServicesChart1() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Top services',
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
                label: 'Physician',
                data: [100, 70, 40, 200, 120, 40, 67],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Therapists',
                data: [20, 30, 29, 50, 84, 29, 32],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <div style={{ width: '22rem', height: '15rem', background: '#DFDDDE' }}>
            <Bar options={options} data={data} />
        </div>
    );
}

//Order chart function
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
                label: '# of Orders',
                data: [100, 70, 200, 150, 333, 229, 400],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div style={{ width: '22rem', height: '15rem', background: '#DFDDDE' }}>
            <Line options={options} data={data} />
        </div>
    );
}

//Transaction chart functions
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
        <div style={{ width: '20rem', height: '15rem', background: '#DFDDDE' }}>
            <Pie data={data} options={options} />
        </div>
    );
}

export default MainDash;
