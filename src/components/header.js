import React from 'react';
import LinkedIn from './img/LinkedIn.png';
import GitHub from './img/GitHub.png';
import WhatsApp from './img/WhatsApp.png';
import Instagram from './img/Instagram.png';

export default function Header(){

    return(

        <header>
            <nav>
                <img src={LinkedIn} alt="LinkedIn"/>
                <img src={GitHub} alt="GitHub"/>
                <img src={WhatsApp} alt="WhatsApp"/>
                <img src={Instagram} alt="Instagram"/>
             
            </nav>
        </header>

    )

}