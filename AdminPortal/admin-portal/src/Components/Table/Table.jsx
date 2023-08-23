import * as React from 'react';
import { useEffect, useState } from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { OrderTablesData } from '../Data/Data';
import { getOrders } from '../firebase/users';
import {
    faCheckCircle,
    faSpinner,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
export let inProgressCount = 0;
export let ordersByMonth = {};
export default function BasicTable() {
    const [orderTablesData, setOrderTablesData] = useState([]);

    useEffect(function () {
        getOrders(function (orders) {
            console.warn(orders);
            setOrderTablesData(orders);
        });
    }, []);

    inProgressCount = orderTablesData.filter(
        (item) => item.status === 'In Progress',
    ).length;
    console.log(inProgressCount);

    // Process the orderTablesData array
    orderTablesData.forEach((item) => {
        const date = new Date(item.date);
        const month = date.getMonth(); // Get the month (0-11)

        // If the month entry doesn't exist, initialize it with a count of 1
        if (!ordersByMonth[month + 1]) {
            ordersByMonth[month + 1] = 1;
        } else {
            // If the month entry exists, increment the count
            ordersByMonth[month + 1]++;
        }
    });

    console.log(ordersByMonth); // This will give you a count of orders for each mon

    return (
        <div className="Table">
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
                    {orderTablesData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.appointID}</td>
                                <td>{item.cName}</td>
                                <td>{item.doctor}</td>
                                <td>{item.sType}</td>
                                <td>{item.date.toDate().toLocaleString()}</td>

                                <td>{item.cost}</td>
                                <td>
                                    <span style={{ marginRight: '5px' }}>
                                        {item.status}
                                    </span>
                                    {item.status === 'process' ? (
                                        <FontAwesomeIcon icon={faSpinner} />
                                    ) : item.status === 'completed' ? (
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    ) : item.status === 'cancelled' ? (
                                        <FontAwesomeIcon icon={faTimes} />
                                    ) : null}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Service Consumer</TableCell>
              <TableCell align="left">Service Provider</TableCell>
              <TableCell align="left">Service type</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.cName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.cName}
                </TableCell>
                <TableCell align="left">{row.pName}</TableCell>
                <TableCell align="left">{row.sType}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                    <span className="status" style={makeStyles(row.status)}>
                        {row.status}
                    </span>
                </TableCell>

                <TableCell align="left">{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
        </div>
    );
}
