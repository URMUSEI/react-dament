import React, { Component } from 'react';
import Customer from './Coms/Customer';
import './App.css';
import { Paper } from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
// import {  } from 

// const styles = theme => ({
//     root: {
//         width: '100%',
//         margiTop: theme.spacing.unit*3,
//         overflowX: "auto"
//     },
//     table: {
//         minWidth: 1080
//     }
// })

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

class App extends Component {
    render() {
    
        return(
            <Paper>
            <Table>
                <TableHead>
                    <TableCell>번호</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>생년월일</TableCell>
                    <TableCell>성별</TableCell>
                    <TableCell>직업</TableCell>
                </TableHead>
                <TableBody>
                {customers.map(c=>{return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
                </TableBody>
            </Table>
            </Paper>
        );
        }
    }

export default App;