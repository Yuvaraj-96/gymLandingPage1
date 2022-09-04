import React from 'react';
import './Join.css';

const Join=()=>{

    return(
        <>
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr/>
                <div>
                    <span className='stoke-text' >Ready To </span>
                    <span>Level Up</span>
                </div>
                <div>
                    <span>Your Body </span>
                    <span className='stoke-text' >With us?</span>
                </div>
            </div>
            <div className="right-j">
                <form action="" className="email-container">
                    <input type="email" name="user_email" id="" placeholder='Enter your Email address' />
                    <button className="btn btn-j">Join Now</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Join;