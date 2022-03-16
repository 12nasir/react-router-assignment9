import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() =>{
        fetch('Teachers.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data))
    }, [])
    return (
        <div className='home-child2'>
            {
                teachers.map(teacher => <Teacher teacher ={teacher}></Teacher>)
            }
        </div>
    );
};

export default Teachers;