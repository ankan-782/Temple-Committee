import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Donation for building a temple</h1>
            <h5 className="text-danger fw-bold">Shajalal Fertilizer Project, Fenchuganj, Sylhet, Bangladesh</h5>
            <h3>Minimum budget: <b>1 crore</b></h3>
        </div>
    );
};

export default Header;