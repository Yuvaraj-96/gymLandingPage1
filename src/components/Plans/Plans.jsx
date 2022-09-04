import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans=()=>{

    return(
        <div  className='plans-container' >
            <div className='programs-header' style={{gap:'2rem'}}>
                <span className='stoke-text'>Ready to start</span>
                <span>your journey</span>
                <span className='stoke-text'>now with us</span>
            </div>
            <div className='plans'>
                {plansData.map((plan,i)=>(
                    <div className='plan'>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>
                        <div className='features' >
                            {plan.features.map((feature,i)=>(
                                <div className='feature'>
                                    <img src={whiteTick} alt='' />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>{`See more benefits ->`}</span>
                        </div>
                        <button className='btn'>Join now</button>
                    </div>
                ))}

            </div>

            {/* <div className='plancard'>
                <div className='card-container'>
                 <div>
                     <img src="" alt="" />
                     <span>basic plan</span>
                     <span>Card 1</span>
                 </div>
                 <div>
                 <img src="" alt="" />
                     <span>Card 2</span>
                 </div> 
                 <div>
                 <img src="" alt="" />
                     <span>Card 3</span>
                 </div> 
                 </div>               
            </div> */}
            
                           
        </div>
    )

}

export default Plans;

