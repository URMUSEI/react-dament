import logo from './logo.svg';
import Customer from './Coms/Customer'
import React, { Component } from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const customers = [{
  'id':'1',
  'no':'1',
  'mail':'2',
  'pwd':'3'
},
{
  'id':'2',
  'no':'1',
  'mail':'2',
  'pwd':'3'
},
{
  'id':'3',
  'no':'1',
  'mail':'2',
  'pwd':'3'
}]

function App() {
  return (
    <div>
      <Table>
        <TableBody>
     { customers.map(c => { return ( <Customer key={c.id} id={c.id} no={c.no} mail={c.mail} pwd={c.pwd} /> ) }) }
     </TableBody>
     </Table>
    </div>
  );
}

export default App;
