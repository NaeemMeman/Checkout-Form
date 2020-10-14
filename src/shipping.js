import React from 'react';
import ReactDOM from 'react-dom';
import './shipping.css';

class Shipping extends React.Component {
    render() {
        return (
            <Items class="shipping"/>
        );
    }
}

class Items extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h1>Shipping Address</h1>
                    </li>
                    <Item id="address" label="Address" placeholder="1234 Main Street"/>
                    <li>
                        <label for="country">
                            <h2>Country</h2>
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
                            <h2>State</h2>
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
                <label for={props.id}>
                    <h2>{props.label}</h2>
                </label>
                <input type="text" id={props.id} placeholder={props.placeholder} required/>
            </li>
        );
}

// Exporting the component 
export default Shipping;