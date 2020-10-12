import React from 'react';
import ReactDOM from 'react-dom';
import './billing.css';

class Billing extends React.Component {
    render() {
        return (
            <Items class="billing"/>
        );
    }
}

class Items extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h1>Billing Address</h1>
                    </li>
                    <Item id="firstname" label="First Name" placeholder="First Name"/>
                    <Item id="lastname" label="Last Name" placeholder="Last Name"/>
                    <Item id="email" label="Email" placeholder="name@example.com"/>
                    <Item id="address" label="Address" placeholder="1234 Main Street"/>
                    <li>
                        <label for="country">
                            Country
                        </label>
                        <select id="country" required>
                            <option value="">
                                Choose...
                            </option>
                            <option value="united states">
                                United States
                            </option>
                        </select>
                    </li>
                    <li>
                        <label for="state">
                            State
                        </label>
                        <select id="state" required>
                            <option value="">
                                Choose...
                            </option>
                            <option value="new york">
                                New York
                            </option>
                        </select>
                    </li>
                    <Item id="zip" label="Zip Code" placeholder="12345"/>
                </ul>
            </div>
        );
    }
}

function Item(props) {
        return (
            <li>
                <div>
                    <label for={props.id}>
                        {props.label}
                    </label>
                    <input type="text" id={props.id} placeholder={props.placeholder} required/>
                </div>
            </li>
        );
}

// Exporting the component 
export default Billing;