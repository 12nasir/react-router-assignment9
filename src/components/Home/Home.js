import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Homes from '../Homes/Homes';
import './Home.css';

const Home = () => {
    const [persons, setPersons] = useState([]);
    const history = useHistory();
    useEffect(() =>{
        fetch('tools.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    }, []);
    const hanleButtonClick =() => {
            history.push('/about');
    }
    return (
        
        <div >
           <div className='home-child1'>
                <div className='home-child'>
                    <h1>IMPROVE YOUR ENGLISH</h1>
                    <h1> <span>SKILL WITH </span> US SOON</h1>
                    <p>Our language center offers group and personal lessons in English and other modern languages for all ages and levels of knowledge. Your abilities will only increase when you work hard. Only we will help and guided to you.</p>
                    <Button onClick={() => hanleButtonClick()}>Know us</Button>
                </div>
               <img src="https://alashaery.files.wordpress.com/2016/11/learn-english.jpg" alt="" />
           </div>
            
           <div className='home-child2'>
            {
                persons.map(person => <Homes
                person={person}
                ></Homes>)
            }
           </div>
        </div>
    );
};

export default Home;