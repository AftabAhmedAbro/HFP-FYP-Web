import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Table.css';
import shadows from "@mui/material/styles/shadows";
import { OrderTablesData } from "../Data/Data";
// import { makeStyles } from "@mui/material";
function createData(cName, pName, sType, date,status, cost) {
  return { cName, pName, sType, date, status, cost };
}

const rows = [
  createData("Carla", "Dr.Tim", "Physician", "2 March 2023","Inompleted","Rs." + 500),
  createData("Yash", "Dr.Deny", "Therapist", "1 March 2023","Completed", "Rs." + 500),
  createData("Aftab", "Tom", "Pathologist", "1 March 2023","Completed", "Rs." + 500),
  createData("Imran Khan","Ahmed","Compounder","27 Febuary 2023","Completed","Rs." + 500),
  createData("Carla", "Dr.Tim", "Physician", "26 Febuary 2023","Completed", "Rs." + 500),
];
const myStyle=(status)=>{
    if(status=== 'Complete')
    {
        return{
            background: 'rgb(145 245 159 / 47%)',
            color: 'green',
        }
    }
    else if (status==='Incomplete')
    {   return{
        background: '#ffadad8f',
        color:'red', 
    }
        
    }
}

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
   {OrderTablesData.map((item,index)=>{
    return(
      <tr>
        <td>{item.id}</td>
        <td>{item.cName}</td>
        <td>{item.pName}</td>
        <td>{item.sType}</td>
        <td>{item.date}</td>
        <td>{item.cost}</td>
        <td className="status" style={myStyle(item.status)}>{item.status}</td>
      </tr>
    )
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
