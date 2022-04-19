import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, price, img } = service;
    return (
        <div className='g-5 col-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">price :{price}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div>
                    <Link to="/checkout" className="btn btn-primary text-center d-block ">Go to Check out</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;