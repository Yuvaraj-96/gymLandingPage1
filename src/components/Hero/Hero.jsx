import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back  from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
   <div className="hero">
       <div className="left-h">
       <Header/>
       <div className="the-best-ad">
           <div></div>
           <span>The best fitness center in town</span>
       </div>
       <div className="hero-text">
           <div>
               <span className='stoke-text'>Shape </span>
               <span>Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
            <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
       </div>
       <div className="figures">
           <div>
               <span>+140</span>
               <span>Expert coachs</span>
            </div>
           <div>
               <span>+978</span>
               <span>Members</span>
            </div>
           <div>
               <span>+50</span>
               <span>Fitness programs</span>
            </div>
       </div>
       <div className="hero-buttons">
           <button className="btn">Get Started</button>
           <button className="btn">Learn More</button>
       </div>

       </div>
       <div className="right-h">
           <button className="btn">Join Now</button>

           <div className="heart-rate">
               <img src={Heart} alt="Heart Image" />
               <span>Heart Rate</span>
               <span>116 bpm</span>
            </div>

            <img src={hero_image} alt="" className='hero-image' />
            <img src={hero_image_back} alt="" className='hero-image-back'/>

            <div className="calories">
                <img src={Calories} alt=" Calories" />
                <div>
                   <span>Calories Burned</span>
                   <span>229 Kcal</span>
                </div>
            </div>



        </div>
       
   </div>
  )
}

export default Hero