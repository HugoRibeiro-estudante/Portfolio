import React from 'react'
import Background from './img/Ps2.png';



export default function Home(){
    
    return(

        <div className='container'>
            
            <div className='description'>
                <h3>Web Developer</h3>
                <p>Welcome my friend, this my <span>PORTFOLIO</span></p>

            </div>
            
            <div className='ps2' style={{backgroundImage: `url(${Background})`}}>
                <h1 className='name'>Hugo Ribeiro Alves</h1>
            </div>

        </div>

        
    )

}


