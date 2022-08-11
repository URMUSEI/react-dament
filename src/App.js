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
    'mail': 'n@gmail.com',
    'pwd': '12345678',
    'birthday': '000000',
    'gender': '남',
    'btn': <button>b</button>
},
{
    'id':2,
    'mail': 'm@naver.com',
    'pwd': '12345678',
    'birthday': '000000',
    'gender': '남'
},
{
    'id':3,
    'mail': 'm@gmail.com',
    'pwd': '12345678',
    'birthday': '000000',
    'gender': '여'
}]

class App extends Component {
    render() {
    
        return(
            <Paper>
            <Table>
                <TableHead>
                    <TableCell>번호</TableCell>
                    <TableCell>메일</TableCell>
                    <TableCell>비밀번호</TableCell>
                    <TableCell>생년월일</TableCell>
                    <TableCell>성별</TableCell>
                    
                    <TableCell>유저 관리</TableCell>
                </TableHead>
                <TableBody>
                {customers.map(c=>{return(<Customer key={c.id} id={c.id} mail={c.mail} pwd={c.pwd} gender={c.gender} birthday={c.birthday} btn={c.btn}/>)})}
                </TableBody>
            </Table>
            </Paper>
        );
        }
    }

export default App;