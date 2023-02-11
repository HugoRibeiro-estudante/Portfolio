import React from 'react';
import About from './About';
import Home from './home';
import Audio from './audio';
import MusicHome from './Music/hadouken.mp3'
import Skills from './skills';

export default function Body(){

    return(
        <>
            <Home></Home>
            <Audio music={MusicHome}/>
            <About></About>
            <Skills></Skills>
            
        </>
    )

}