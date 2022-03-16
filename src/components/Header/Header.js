import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const element = <FontAwesomeIcon icon={faPen} />

    return (
        <div className='header'>
            <h6><span> {element} i</span>Learning</h6>
            <nav className='header-container'>
                <NavLink to="/home" 
                activeStyle={{
                    fontWeight: "bold",
                    color: "orange"
                  }}>Home
                </NavLink>
                <NavLink to="/about" activeStyle={{
                    fontWeight: "bold",
                    color: "orange"
                  }}>About</NavLink>
                <NavLink to="/service" activeStyle={{
                    fontWeight: "bold",
                    color: "orange"
                  }}>Services</NavLink>
                <NavLink to="/teachers" activeStyle={{
                    fontWeight: "bold",
                    color: "orange"
                  }}>Teachers</NavLink>
            </nav>
        </div>
    );
};

export default Header;