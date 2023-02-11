import React from "react";


export default function Block(props){

    function send(){

        //alert(props.name);
        props.handleData(props.number);
    }



    return(
        <div className='block tooltip'>
            <img src={props.image} alt={props.number}/>
            <span className='tooltiptext' onClick={send}>Clique-me</span>
        </div>
    )
}