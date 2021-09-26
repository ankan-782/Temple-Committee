import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Donor from '../Donor/Donor';
import './Donors.css'

const Donors = () => {
    //state declaration
    const [donors, setDonors] = useState([]);
    const [cart, setCart] = useState([]);

    //data load using useEffect
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDonors(data));
    }, [])

    const handleCalculateTotalInCart = product => { 
        const newCart = [...cart];
        if(!newCart.includes(product)){
            newCart.push(product); //adding product to cart if product isn't available already in the cart
        }
        setCart(newCart);
    }

    return (
        <div className="donors-container">
            <div className="donors-info-container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        donors.map(donor => <Donor
                            key={donor.key}
                            donor={donor}
                            btnFunc={handleCalculateTotalInCart}
                        ></Donor>)
                    }
                </div>
            </div>
            <div className="donors-cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Donors;