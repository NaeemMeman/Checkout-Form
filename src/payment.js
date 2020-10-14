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
                    <li>
                    <Item2 id="credit" type="radio" label="Credit Card" name="payment"/>
                    <Item2 id="debit" type="radio" label="Debit Card" name="payment"/>
                    <Item2 id="paypal" type="radio" label="Paypal" name="payment"/>
                    </li>
                    <Item id="name" type="text" label="Name on card" placeholder=""/>
                    <Item id="ccn" type="text" label="Credit card number" placeholder=""/>
                    <Item id="expiration" type="text" label="Expiration" placeholder=""/>
                    <Item id="cvv" type="text" label="CVV" placeholder=""/>
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
                <input type={props.type} id={props.id} placeholder={props.placeholder} name={props.name} required/>
            </li>
        );
}

function Item2(props) {
        return (
            <div>
                <label for={props.id}>
                    <h3>{props.label}</h3>
                </label>
                <input type={props.type} id={props.id} placeholder={props.placeholder} name={props.name} required/>
            </div>
        );
}


// Exporting the component 
export default Payment;