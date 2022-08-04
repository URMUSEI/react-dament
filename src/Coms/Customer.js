import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.no}</TableCell>
                <TableCell>{this.props.mail}</TableCell>
                <TableCell>{this.props.pwd}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;