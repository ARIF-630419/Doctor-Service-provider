import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, price, img } = service;
    return (
        <div className='g-5 col-12 col-md-6 col-lg-4'>
            <div class="card" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h5 class="card-title">price :{price}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div>
                    <a href="#" class="btn btn-primary ">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Service;