import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(title, quantity) {
  return {title, quantity };
}

const rows = [
  createData('iron', 10),
  
];

export default function BasicTable({products}) {
  const [ productsSt, setProductsSt ] = React.useState([])
  
  React.useEffect(() => {
    const newProductsSt = []
    for (let key in products) {
      newProductsSt.push(createData(key, products[key]))
    }
    setProductsSt(newProductsSt)
  }, [products])


  return (
    <TableContainer component={Paper} sx={{mt: 3}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Products</TableCell> */}
            <TableCell align="left">Title</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsSt.map((row) => (
            <TableRow
              align="left"
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='left'>
                {row.title}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell> 
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}