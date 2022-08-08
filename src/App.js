import React, { Component } from 'react';
import Customer from './Coms/Customer';
import './App.css';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';

const customers = [{
    'id':1,
    'image': 'https://paceimg.com/64/64/any',
    'name': '나동빈',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
},
{
    'id':1,
    'image': 'https://paceimg.com/64/64/any',
    'name': '나동빈',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
},
{
    'id':1,
    'image': 'https://paceimg.com/64/64/any',
    'name': '나동빈',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
}]

function App () {
        return(
            <div>
                {customers.map(c=>{return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
            </div>
        );
    }

export default App;