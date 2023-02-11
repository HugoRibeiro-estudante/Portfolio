import React from "react";
import css from './img/Css.png';
import figma from './img/Figma.png';
import html from './img/Html5.png';
import js from './img/JavaScript.png';
import left from './img/left.png';
import pacman from './img/pacman.gif';
import rct from './img/React.png';
import rigth from './img/rigth.png';
import mySQL from './img/MySQL.png';
import java from './img/Java.png';
import spring from './img/SpringBoot.png';



export default function Skills(){

    
   
    var end = 1;

    const change = () =>{

        

        var backEnd = document.getElementById("back");
        var frontEnd = document.getElementById("front");
        var panel = document.getElementById("panel");


        if(end == 1){
            //MUDA PARA O BACK
            end = 2;
            backEnd.classList.remove("hidden");
            backEnd.classList.add("displayEnd");
            frontEnd.classList.add("hidden");
            frontEnd.classList.remove("displayEnd");
            panel.innerHTML = "Back-End";


        }else{
            //MUDA PARA O FRONT
            end = 1;
            frontEnd.classList.remove("hidden");
            frontEnd.classList.add("displayEnd");
            backEnd.classList.add("hidden");
            backEnd.classList.remove("displayEnd");
            panel.innerHTML = "Front-End";


        } 

    }


    return(
        <section>
            <div className="end">
                <img src={left} onClick={change} style={{cursor: "pointer"}}/>
                <p id="panel">Front-end</p>
                <img src={rigth} onClick={change} style={{cursor: "pointer"}}/>

            </div>

            <div className="skills">

                <img src={pacman} width="20%"/>
                <div className="displayEnd" id="front">    
                    <img src={figma} alt="text"/>
                    <img src={html} alt="text"/>
                    <img src={css} alt="text"/>
                    <img src={js} alt="text"/>
                    <img src={rct} alt="text"/>
                </div>
                <div className="hidden" id="back">    
                    <img src={java} alt="text"/>
                    <img src={spring} alt="text"/>
                    <img src={mySQL} alt="text"/>
                </div>

            </div>
        </section>
    )
}