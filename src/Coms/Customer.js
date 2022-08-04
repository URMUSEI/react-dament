import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile mail={this.props.mail} id={this.props.id} />
                <CustomerInfo no={this.props.no} mail={this.props.mail} pwd={this.props.pwd} />
            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render() {
        return (
            <div>
                <h2>{this.props.mail}({this.props.id})</h2>
            </div>
        )
    }
}
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.no}</p>
                <p>{this.props.mail}</p>
                <p>{this.props.pwd}</p>
            </div>
        )
    }
}

export default Customer;