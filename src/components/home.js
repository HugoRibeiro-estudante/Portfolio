import React from 'react'
import Background from './img/ps2.png';

export default function Home(){
    
    return(

        <div className='container'>
            <div className='description'>
            
                <p>Welcome my friend, this my <span>PORTFOLIO</span></p>
                <p>Eu sou estudante do curso de SPI(Sistemas para Internet) no IFTM - Uberlândia Centro</p>

            </div>
            
            <div className='ps2' style={{backgroundImage: `url(${Background})`}}>
                <p>My name is</p>
                <h1 className='name'>Hugo Ribeiro Alves</h1>
            </div>
        </div>
    )

}


