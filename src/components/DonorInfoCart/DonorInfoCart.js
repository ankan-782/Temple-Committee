import React from 'react';
import './DonorInfoCart.css';

const DonorInfoCart = (props) => {
    const {img, name} = props.dononInfoCart;

    return (
        <div className="d-flex justify-space-between align-items-center cart-donor-info">
            <img src={img} className="cart-img" alt="" />
            <h5 className="ms-2">{name}</h5>
        </div>
    );
};

export default DonorInfoCart;