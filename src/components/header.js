import React from 'react';
import LinkedIn from './img/LinkedIn.png';
import GitHub from './img/GitHub.png';
import WhatsApp from './img/WhatsApp.png';
import Instagram from './img/Instagram.png';

export default function Header(){

    return(

        <header>
            <nav>
                <a href='https://www.linkedin.com/in/hugo-ribeiro-alves/' target='_blank'><img src={LinkedIn} alt="LinkedIn"/></a>
                <a href='https://github.com/HugoRibeiro-estudante/' target='_blank'><img src={GitHub} alt="GitHub"/></a>
                <a href='https://wa.me/5534993379793' target='_blank'><img src={WhatsApp} alt="WhatsApp"/></a>
                <a href='https://www.instagram.com/hug0_rib3ir0/' target='_blank'><img src={Instagram} alt="Instagram"/></a>
            </nav>
        </header>

    )

}