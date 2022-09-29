import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import logo from '../../images/instruct.png'
import './Exercises.css'
import Cart from '../Cart/Cart';

const Exercises = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddtocart = (course) =>{
        const Newcart = [...cart , course];
        setCart (Newcart);
    }


    useEffect( () => {
              fetch('exercise.json')
              .then(res => res.json())
              .then(data => setCourses(data))
    },[])

    return (
        <div className='Exercise-Container'>
            <div className="Course-Container">
            {
                courses.map( course => <Course 
                                        course = {course} 
                                        key={course.id}
                                        handleAddtocart = {handleAddtocart}
                                        
                                        ></Course>)
            }

            </div>

            <div className="Cart-Container">
            
            <div className='instructor-intro'>
                <div>
                <img src={logo} alt="" />
                </div>
                <div>
                <h3>Tasfia Nuzhat</h3>
                <p>Chittagong,Bangladesh</p>
                </div>
            </div>
                <Cart cart={cart} ></Cart>
            <div>

            </div>
                   
            </div>
            
            
        </div>
    );
};

export default Exercises;