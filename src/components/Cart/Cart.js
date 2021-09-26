import React from 'react';
import DonorInfoCart from '../DonorInfoCart/DonorInfoCart';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const donor of cart) {
        total = total + donor.donation;
    }
    return (
        <div className="donor-cart">
            <div className="donor-amount-info">
                <h5>Donors Added: <b>{cart.length}</b></h5> <br />
                <h5>Total donation Amount: </h5> <span className="cart-total-amount fs-4">{total}৳</span>
            </div>
            <div className="donor-info">
                {
                    cart.map(dononInfoCart => <DonorInfoCart dononInfoCart={dononInfoCart}></DonorInfoCart>)
                }
            </div>
        </div>
    );
};

export default Cart;