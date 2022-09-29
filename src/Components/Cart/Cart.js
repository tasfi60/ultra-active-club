import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <div className="instructor-details">
                  <h3>50kg <small>weight</small></h3>
                  <h3>5.1  <small>height</small></h3>
                  <h3>24yrs <small>Age</small></h3>
            </div>
            <div className="break-container">
                <h3>Add a break</h3>
                <div className='break-btn'>
                    <li> <button className='btn'>10s</button></li>
                    <li> <button className='btn'>20s</button></li>
                    <li> <button className='btn'>30s</button></li>
                    <li> <button className='btn'>40s</button></li>
                    <li> <button className='btn'>50s</button></li>
                    
                </div>

            </div>

            <div className="time-container">
                    <h3>Exercise Details</h3>
                    <div className='exercise-time'>
                       <h3>Exercise time: </h3>
                    </div>
                    <div className='break-time'>
                       <h3>Break time: </h3>
                    </div>

                    <button className='complete-btn'>
                        <p>Activity Completed</p>
                    </button>

                
            </div>
        </div>
    );
};

export default Cart;