import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    const[breaktime, setBreaktime] = useState([0]);

    const handleBreak = (btime) => {
        setBreaktime(btime);
         localStorage.setItem('breaktime',btime);        

    }

    useEffect( () => {
        const quantity = localStorage.getItem('breaktime');
        if(quantity){
            setBreaktime(quantity);
        }
        else
        {
            setBreaktime(0);
        }
    }
    ,[])

    let total = 0;

    for(const course of cart)
    {
      total = total + course.Time ;
    }



    const showToastMessage = () => {

     //  toast message displayed

        if(total && breaktime)
        {
            toast.success('Successfully Completed All activities !', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });

        }

        // if exercise time and breaktime null no toast message will be displayed
    
    };



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
                    <li> <button onClick={() => handleBreak(10)} className='btn'>10min</button></li>
                    <li> <button onClick={() => handleBreak(20)} className='btn'>20min</button></li>
                    <li> <button onClick={() => handleBreak(25)} className='btn'>25min</button></li>
                    <li> <button onClick={() => handleBreak(30)} className='btn'>30min</button></li>
                    <li> <button onClick={() => handleBreak(40)} className='btn'>40min</button></li>
                    
                </div>

            </div>

            <div className="time-container">
                    <h3>Exercise Details</h3>
                    <div className='exercise-time'>
                       <h3>Exercise time: {total} min</h3>
                    </div>
                    <div className='break-time'>
                       <h3>Break time: {breaktime} min </h3>
                    </div>

                    <button onClick={showToastMessage} className='complete-btn'>
                        <p>Activity Completed</p>
                    </button>
                    <ToastContainer autoClose={false}/>

                
            </div>
        </div>
    );
};

export default Cart;