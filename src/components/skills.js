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


        if(end === 1){
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
                <img src={left} onClick={change} style={{cursor: "pointer"}} alt="left"/>
                <p id="panel">Front-end</p>
                <img src={rigth} onClick={change} style={{cursor: "pointer"}} alt="rigth"/>

            </div>

            <div className="skills">

                <img src={pacman} width="20%" alt="pacman"/>
                <div className="displayEnd" id="front">    
                    <img src={figma} alt="figma"/>
                    <img src={html} alt="html"/>
                    <img src={css} alt="css"/>
                    <img src={js} alt="js"/>
                    <img src={rct} alt="react"/>
                </div>
                <div className="hidden" id="back">    
                    <img src={java} alt="java"/>
                    <img src={spring} alt="spring"/>
                    <img src={mySQL} alt="mySql"/>
                </div>

            </div>
        </section>
    )
}