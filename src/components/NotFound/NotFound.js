import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory();


    const hadleNotFound = () =>{
        history.push('/home');
    }
    return (
        <div>
            <h2>404</h2>
            <h4>Page not found</h4>
            <Button onClick={() => hadleNotFound()}>See first</Button>

        </div>
    );
};

export default NotFound;