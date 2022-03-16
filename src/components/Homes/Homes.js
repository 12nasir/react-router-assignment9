import React from 'react';
import './Homes.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Homes = (props) => {
    const {name, img, phone, price, id} = props.person;
    const url = `/service/${id}`;
    const history = useHistory();
    const handleHomesButton = () =>{
        history.push(url);
    }
    return (
    <div className='container1'>
        <img className='images' src={img} alt="" />
        <h3>{name}</h3>
        <h4>Contact us: {phone}</h4>
        <h4>Price: ${price}</h4>
        <br />
        <Button onClick={() => handleHomesButton()}>See details</Button>
    </div>
    );
};

export default Homes;