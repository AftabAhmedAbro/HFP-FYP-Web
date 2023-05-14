import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TransactionTable.css';
import { TransactionTableData } from '../Data/Data';
const TransactionTable = () => {
    return (
        <div className="Table">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Sender</th>
                        <th scope="col">Recipient</th>
                        <th scope="col">Service</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {TransactionTableData.map((item, index) => {
                        return (
                            <tr>
                                <th>{item.id}</th>
                                <td>{item.sender}</td>
                                <td>{item.recipient}</td>
                                <td>{item.service}</td>
                                <td>{item.date}</td>
                                <td>{item.amount}</td>
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
};

export default TransactionTable;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './TransactionTable.css';
// import { TransactionTableData } from '../Data/Data';
// import transactionData from '../firebase/transactions';
// const TransactionTable = () => {
//     return (
//         <div className="Table">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">#id</th>
//                         <th scope="col">Sender</th>
//                         <th scope="col">Recipient</th>
//                         <th scope="col">Service</th>
//                         <th scope="col">Date</th>
//                         <th scope="col">Amount</th>
//                         <th scope="col">Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {transactionData.map((item, index) => {
//                         return (
//                             <tr>
//                                 <th>{item.id}</th>
//                                 <td>{item.sender}</td>
//                                 <td>{item.reciever}</td>
//                                 <td>{item.service}</td>
//                                 <td>{item.date}</td>
//                                 <td>{item.amount}</td>
//                                 <td>
//                                     <FontAwesomeIcon icon={item.status} />
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TransactionTable;
