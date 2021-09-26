import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
import './Donor.css'

const Donor = (props) => {
    const { name, img, age, designation, place, donation } = props.donor;
    return (
        <div className="col">
            <div class="card h-100 donor">
                <div className="p-3 d-flex justify-content-center">
                    <img src={img} className="donor-img" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-title text-center">{name}</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">Age: <b>{age}</b></p>
                    <p className="card-text">Designation: <br /> <small className=" designation">{designation}</small></p>
                    <p className="card-text">Place: <br /><b>{place}</b></p>
                </div>
                <div className="px-3">
                    <p className="card-title">Donates: <span className="ms-2 text-danger fs-5 fw-bold">{donation}৳</span></p>
                </div>
                <div className="card-footer text-center py-3">
                    <button onClick={ () => props.btnFunc(props.donor)} className="btn btn-danger"><FontAwesomeIcon icon={faDonate} /> Calculate total in cart</button>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn ms-2"><i className="fab fa-facebook-f fs-4"></i></button>
                        <button className="btn ms-2"><i className="fab fa-linkedin-in fs-4"></i></button>
                        <button className="btn ms-2"><i className="fab fa-twitter fs-4"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;