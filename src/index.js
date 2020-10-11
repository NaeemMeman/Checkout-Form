import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component {
    render() {
        return (
            <div class="form-container">
                <div class="column-container">
                    <Cart/>
                </div>
                <div class="column-container">
                    <Billing/>
                    <Payment/>
                </div>
            </div>
        );
    }
}

class Cart extends React.Component {
    render() {
        return (
            <div class="green">
                <Items/>
            </div>
        );
    }
}

class Billing extends React.Component {
    render() {
        return (
            <div class="red">
                Red
            </div>
        );
    }
}

class Payment extends React.Component {
    render() {
        return (
            <div class="blue">
                Blue
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
                        <Item/>
                    </li>
                    <li>
                        <Item/>
                    </li>
                    <li>
                        <Item/>
                    </li>
                    <li>
                        <Item/>
                    </li>
                </ul>
            </div>
        );
    }
}

class Item extends React.Component {
    render() {
        return (
            <div>
                Item
            </div>
        );
    }
}



ReactDOM.render(
  <Form />,
  document.getElementById('root')
);