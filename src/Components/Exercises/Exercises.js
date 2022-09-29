import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Exercises.css'

const Exercises = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
              fetch('exercise.json')
              .then(res => res.json())
              .then(data => setCourses(data))
    },[])

    return (
        <div className='Exercise-Container'>
            <div className="Course-Container">
            {
                courses.map( course => <Course course = {course}></Course>)
            }

            </div>
            <div className="Cart-Container">
                <h1>Cart menu</h1>
            </div>
            
            
        </div>
    );
};

export default Exercises;