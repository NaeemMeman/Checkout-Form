import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './cart.js';
import Billing from './billing.js';
import Payment from './payment.js';
import Shipping from './shipping.js';

class Form extends React.Component {
    constructor() {
        super();
        
        this.state={
            checked: false
        };
        this.handleChange=this.handleChange.bind(this);
    }
    
    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }
    
    render() {
        const content=this.state.checked ?
            <Shipping/>
            : null;
        return (
            <div class="form-container">
                <div class="column-container">
                    <Cart/>
                </div>
                <form class="column-container">
                    <Billing/>
                    <ul>
                        <li>
                            <label>
                                Shipping Address is the same as Billing Address.
                            </label>
                            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                        </li>
                    </ul>
                    {content}
                    <Payment/>
                    <ul>
                        <li>
                            <button type="submit">
                                Continue to Checkout
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);