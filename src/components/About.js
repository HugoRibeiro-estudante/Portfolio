import React from 'react';
import Question from './img/Help.png';
import Logistc from './img/TrackOrder.png';
import Developer from './img/Developer.png';
import Freelance from './img/Snowflake.png';
import Mobile from './img/Mobile.png';
import Code from './img/CodeFile.png';
import Job from './img/Business.png';
import PostApp from './img/PostApp.png';
import Mk from './img/mk.png';


export default function About(){

    return(

        <section className='about'>
            
            <div>
                <img src={Mk} alt="MK"/>
                <div className='block'><img src={Question} alt=""/></div>
                <div className='block'><img src={Developer} alt=""/></div>
                <div className='block'><img src={Job} alt=""/></div>
                
            </div>

            <div>
                <div className='block'><img src={Question} alt=""/></div>
                <div className='block'><img src={Mobile} alt=""/></div>
                <div className='block'><img src={PostApp} alt=""/></div>
                <div className='block'><img src={Freelance} alt=""/></div>
                
            </div>

            <div>
                <div className='block'><img src={Question} alt=""/></div>
                <div className='block'><img src={Question} alt=""/></div>
                <div className='block'><img src={Code} alt=""/></div>
                <div className='block'><img src={Logistc} alt=""/></div>
            </div>

        </section>
    )

}