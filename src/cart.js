import React from 'react';
import ReactDOM from 'react-dom';
import './cart.css';

class Cart extends React.Component {
    render() {
        return (
            <div class="cart">
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
                        <h1>Your Cart</h1>
                    </li>
                    <Item name="Product 1" desc="Description" price="$10"/>
                    <Item name="Second Product" desc="Description" price="$20"/>
                    <Item name="Promo Code" desc="Description" price="-$5"/>
                    <Item name="Total" price="$25"/>
                    <li>
                        <form>
                            <input type="text" placeholder="Promo Code" />
                            <button type="submit">
                                Redeem
                            </button>
                        </form> 
                    </li>
                </ul>
            </div>
        );
    }
}

function Item(props) {
        return (
            <li>
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

// Exporting the component 
export default Cart;