import React from 'react';
import { RecentOrderTablesData } from '../Data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RecentOrders.css';
export default function RecentOrders() {
    return (
        <div className="Table">
            <div className="rctOrders">Recent Orders</div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Service Consumer</th>
                        <th scope="col">Service Provider</th>
                        <th scope="col">Service Type</th>
                        <th scope="col">Date</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {RecentOrderTablesData.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.cName}</td>
                                <td>{item.pName}</td>
                                <td>{item.sType}</td>
                                <td>{item.date}</td>
                                <td>{item.cost}</td>
                                <td>
                                    <FontAwesomeIcon icon={item.status} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
