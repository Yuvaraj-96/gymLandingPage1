import React,{useState} from 'react';
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials =()=>{
    const [selected, setSelected] = useState(0);
    const rlen= testimonialsData.length;
    return(
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stoke-text' >What they</span>
                <span>say about us</span>
                <span>{testimonialsData[0].review}</span>
                <span>
                    <span>
                      {testimonialsData[selected].name} 
                    </span>
                    { `  -  ${testimonialsData[selected].status}`}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt='' />
                <div className='arrows'>
                    <img onClick={()=>{ selected===0?setSelected(rlen-1):setSelected((prev)=>prev-1)}} src={leftArrow} alt="" />
                    <img onClick={()=>{ selected===rlen-1?setSelected(0):setSelected((next)=>next+1)}} src={rightArrow} alt="" />
                </div>
            </div>
        </div>       
    )
}

export default Testimonials