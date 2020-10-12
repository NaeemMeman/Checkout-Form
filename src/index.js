import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './cart.js';
import Billing from './billing.js';

class Form extends React.Component {
    render() {
        return (
            <div class="form-container">
                <div class="column-container">
                    <Cart/>
                </div>
                <form class="column-container">
                        <Billing/>
                        <Payment/>
                </form>
            </div>
        );
    }
}

class Payment extends React.Component {
    render() {
        return (
            <div>
                <Billing/>
            </div>
        );
    }
}


ReactDOM.render(
  <Form />,
  document.getElementById('root')
);