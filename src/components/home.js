import React from 'react'
import Background from './img/Ps2.png';
import Hugo from './img/eu.jpeg';


export default function Home(){
    
    return(

        <div className='container'>
            
            <div className='description'>

                <img src={Hugo} alt='Foto minha'/>
                <h3>Web Developer</h3>
                <p>Welcome my friend, this my <span>PORTFOLIO</span></p>

            </div>
            
            <div className='ps2' style={{backgroundImage: `url(${Background})`}}>
                <h1 className='name'>Hugo Ribeiro Alves</h1>
            </div>

        </div>

        
    )

}


