import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TransactionTable.css';
import { retrieveTransactionData } from '../firebase/transactions';
export let initialFalseStatusCount = 0;
export let totalTrasactions = 0;
const TransactionTable = () => {
    const [data, setData] = useState([]);
    const [selectedRowData, setSelectedRowData] = useState([]); // State to store selected row data

    useEffect(() => {
        retrieveTransactionData()
            .then((transactionData) => {
                const updatedData = transactionData.map((item) => ({
                    ...item,
                    buttonText: 'Send',
                    isButtonDisabled: false,
                }));
                setData(updatedData);

                // Calculate the initial false status row count
                initialFalseStatusCount = transactionData.reduce(
                    (count, item) => {
                        if (!item.status) {
                            return count + 1;
                        }
                        return count;
                    },
                    0,
                );
            })
            .catch((error) => {
                console.log('Error retrieving transaction data:', error);
                setData([]);
            });
    }, []);

    const handleClick = (id) => {
        // ... (rest of the function)
        const updatedData = data.map((item) => {
            if (item.ID === id) {
                return {
                    ...item,
                    buttonText: 'Sending...',
                    isButtonDisabled: true,
                };
            }
            return item;
        });
        console.log(initialFalseStatusCount);
        setData(updatedData);

        // Simulating an asynchronous action
        setTimeout(() => {
            setData((prevData) => {
                const completedData = prevData.map((item) => {
                    if (item.ID === id) {
                        return {
                            ...item,
                            buttonText: 'Payment Done',
                            isButtonDisabled: true,
                        };
                    }
                    return item;
                });
                return completedData;
            });
        }, 2000);

        // Store the selected row data in the selectedRowData state
        const selectedRow = data.find((item) => item.ID === id);
        setSelectedRowData(selectedRow);
        console.log(selectedRowData);
    };

    return (
        <div className="Table">
            <table className="table">
                {/* ... (table headers) */}
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Sender</th>
                        <th scope="col">Recipient</th>
                        <th scope="col">Service</th>
                        <th scope="col">Order Dates (start-end)</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Amount sent to recipient</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => {
                        totalTrasactions = data.length;
                        const date = item.date.toDate(); // Convert Firestore Timestamp to Date
                        const formattedDate = date.toLocaleDateString('en-US'); // Format date as mm/dd/yyyy
                        const r_amount = item.amount;
                        const recipient_amount =
                            r_amount - r_amount * (20 / 100);

                        return (
                            <tr key={item.id}>
                                <td>{item.ID}</td>
                                <td>{item.sender}</td>
                                <td>{item.recipient}</td>
                                <td>{item.service}</td>
                                <td>
                                    {formattedDate} - {formattedDate}
                                </td>
                                <td>{item.amount}</td>
                                <td>{recipient_amount}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleClick(item.ID)}
                                        disabled={item.isButtonDisabled}>
                                        {item.buttonText}
                                    </button>
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
