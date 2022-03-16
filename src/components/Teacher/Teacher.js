import React, { createContext, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CrestContext } from '../../App';

const Teacher = (props) => {
    const [ornaments] = useContext(CrestContext);
    const history = useHistory();
    const {img, name, category, age} = props.teacher;
    const handleSetButton = () => {
        history.push('/home');
    }
    return (
        <div className='container1'>
            <img className='images' src={img} alt="" />
            <h3>{name}</h3>
            <h5>{category}</h5>
            <p>Age: {age}</p>
            <p>{ornaments}</p>
            <Button onClick={() => handleSetButton()}>Back to home</Button>
        </div>
        );
       
};

export default Teacher;