import React from 'react';
import '../Components/Orders/Order.css';
import Sidebar from '../Components/SideBar/Sidebar';
import OrdersMain from '../Components/Orders/OrdersMain';
export default function Orders() {
    return (
        <div className="orderDiv">
            <Sidebar />
            <OrdersMain />
        </div>
    );
}
