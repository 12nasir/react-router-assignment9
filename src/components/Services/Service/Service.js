import React from 'react';

const Service = (props) => {
    const {name, phone, img, price, id} = props.home;
        return (
        <div>
            <img className='images' src={img} alt="" />
            <h3>{name}</h3>
            <h4>Contact us: {phone}</h4>
            <h4>Price: ${price}</h4>
        </div>
    );
};

export default Service;