import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name, description, image,Age,Time} = props.course;
    const {handleAddtocart} = props;
    return (
        <div className='course'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>For age: <b>{Age}</b></p>
            <p>Time Required: <b>{Time} min</b></p>

            <button onClick={ () => handleAddtocart(props.course)} className='btn-container'>
                Add to Cart
            </button>
        </div>
    );
};

export default Course;