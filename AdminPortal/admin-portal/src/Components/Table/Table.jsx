import * as React from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OrderTablesData } from '../Data/Data';

export default function BasicTable() {
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
                    {OrderTablesData.map((item, index) => {
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
