import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import useHome from '../../Hooks/useHome';
import Home from '../Home/Home';
import Service from './Service/Service';
import {tools} from '../../data'


const Services = () => {
    const [homes, setHomes] = useHome();
    const location = useLocation();
    const serviceId = Number(location.pathname.split('/')[2]);

    const [service, setService] = useState({});
    const history = useHistory();
    useEffect(() => {
        const newData = tools.find(tool =>tool.id == serviceId)
        setService(newData)

    }, []);
    console.log({homes})
    const handleButton = () =>{
        history.push('/home');
    }
    return (
        
       <div>
           <div className='home-child2'>
                {
                    homes.map(home => <Service home ={home}></Service>)
                }
           </div>
           <div className='container1'>
            <img className='images' src={service?.img} alt="" />
            <h3>{service?.name}</h3>
            <h4>Price: ${service?.price}</h4>
            <h4>Contact us: {service?.phone}</h4>
            <h5><small>Visit me: {service?.Website}</small></h5>
            <h5><small>Email: {service?.email}</small></h5>
            
            <Button onClick={()=> handleButton()} variant='primary'>Submit</Button>
            </div>
        </div>
    );
};

export default Services;