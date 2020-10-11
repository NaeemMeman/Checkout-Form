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
                    <Item name="Product 1" desc="Description" price="$10"/>
                    <Item name="Second Product" desc="Description" price="$20"/>
                    <Item name="Promo Code" desc="Description" price="-$5"/>
                    <Item name="Total" price="$25"/>
                </ul>
            </div>
        );
    }
}

function Item(props) {
        const style = {
            backgroundColor: "white",
            margin: 5,
            positon: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingLeft: "15px",
            paddingRight: "15px",
        }
        return (
            <li style={style}>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>
                <div>
                    <h2>{props.price}</h2>
                </div>
            </li>
        );
}



ReactDOM.render(
  <Form />,
  document.getElementById('root')
);