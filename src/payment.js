import React from 'react';
import ReactDOM from 'react-dom';
import './payment.css';

class Payment extends React.Component {
    render() {
        return (
            <div class="blue">
                <Items/>
            </div>
        );
    }
}


class Items extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h1>Payment</h1>
                    </li>
                    <Item id="name" label="Name on card" placeholder=""/>
                    <Item id="ccn" label="Credit card number" placeholder=""/>
                    <Item id="expiration" label="Expiration" placeholder=""/>
                    <Item id="cvv" label="CVV" placeholder=""/>
                </ul>
            </div>
        );
    }
}

function Item(props) {
        return (
            <li>
                <label for={props.id}>
                    <h2>{props.label}</h2>
                </label>
                <input type="text" id={props.id} placeholder={props.placeholder} required/>
            </li>
        );
}

// Exporting the component 
export default Payment;