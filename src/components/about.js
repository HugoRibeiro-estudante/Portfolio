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
import Block from './block';
import Avatar from './img/avatar.png'


export default function About() {

   
    var modal = document.getElementById("myModal");
    
    let myInfo = [
        {
          "title": "XP (Experiências Profissionais)",
          "body": "Em minha trajetória me deparei com muitos desafios e muitas funções diferentes. Entre elas as que mais se destacam foram Assitente de Logística onde ficava responsável por diversas atividades como faturamento, entrada de notas, lançamento de depesas de frotas e demais; e também como Assistente Administrativo atualmente tenho a responsabilidade de localizar pagamentos realizados por clientes e baixas suas faturas no sistema.",
          "link": "link teste",
          
        },
        {
          "title": "Next Level (Pretendo ser programador)",
          "body": "Indenpente das minhas funções eu sempre gostei de melhorar os processos com as ferramentas a meu alcance, que na maioria das vezes era o Excel, a medida que foi descobrindo as muitas possibilidades de criações e automações e fui colocando em prática fui me apaixonando, foi ai que então me despertei para a programação. Pelo mesmo busco dar o próximo passo, obter uma oportunidade nessa área e poder me desenvolver mais",
          "link": new Date('2017-01-03'),
          
        },
        {
            "title": "Boss (Me tornar um expert)",
            "body": "Pretendo me tornar um excelente profissional, compreender as melhores práticas de programação, os conceitos e termos tecnicos, e ter a capacidade de construir grandes aplicações que possam melhorar a vida das pessoas.",
            "link": new Date('2017-01-03'),
            
        },
        {
            "title": "A.S Refrigeração (Freelancer)",
            "body": "Em uma das disciplinas do meu curso tive a oportunidade de desenvolver um projeto de web site estático e aproveitei para criar um projeto real para um conhecido, para a empresa A.S refrigeração. Nesse projeto foram usados somente <b>HTML e CSS</b>",
            "link": "http://hugosistemasparainternet.dx.am/AsRefrigeracao",
            
        },
        {
            "title": "PostApp (Aplicação desenvolvida no curso)",
            "body": "Em um displicina de projeto do meu curso, eu e meu grupo desenvolvemos o sistema de posts que demos o nome de PostApp, o mesmo foi criado utilizando HTML, CSS, Boostrap, Thymeleaf, Spring Boot, MySQL. ",
            "link": "https://postapp-iftm.herokuapp.com/",
            
        },
        {
            "title": "Mobile (Desenvolver um app mobile)",
            "body": "O próximo projeto que pretendo desenvolver será um App Mobile, ando estudando e terei uma disciplina direcionada a isso, prentendo usar React Native e Java para desenvolve-la",
            "link": new Date('2017-01-03'),
            
        },
        {
            "title": "Um desafio (Pretendo desenvolver uma app grande)",
            "body": "Futuramente pretendo desenvolver um aplicativo que possa solucionar um problema ou melhorar alguns processos para facilitar a vida das pessoas",
            "link": new Date('2017-01-03'),
            
        },
        {
            "title": "Logística (Em 2019 me formei em Logística)",
            "body": "Algum tempo depois de sair do ensino médio, depois de algum esforço consegui um bolsa integral para cursar Tecnologia em Logísta pela faculdade Uniessa. Ao longo do curso aprendi muitos conceitos, calculos e ferramentas que utilizo hoje em dia, inclusive aprendi alguns conceitos de computação na disciplina de <b>Engenharia de Dados aplicada à gestão</b> e alguns conceitos de Marketing na disciplina de <b>Marketing Digital e comercio eletrônico</b>",
            "link": new Date('2017-01-03'),
            
        },    
        {
            "title": "Sistemas para Internet (Em 2022 comecei a graduação em SPI)",
            "body": "Após cursar 2 semestres de Licenciatura em Computação pelo <b>IFTM campus Uberlândia Centro</b>, acabei mudando para o curso de <b>Sistemas para Internet</b> dentro da mesma instituição. Nesse curso tenho ótimos professores e aprenderei linguagens, Bibliotecas, Frameworks e conceitos atuais como React Js, React Native, Spring Boot, Bootstrap, banco de dados Relacionais e não Relacionais, UX / UI, Intelengência Artificial, entre outras.",
            "link": new Date('2017-01-03'),
            
        },    
        {
            "title": "Computação (Pretendo fazer Pós em Computação)",
            "body": "",
            "link": new Date('2017-01-03'),
            
        },
        {
            "title": "Inteligencia Artificial (Pretendo fazer Pós em IA)",
            "body": "",
            "link": new Date('2017-01-03'),
            
        },
    ]

    const updateBlock = r => {

        modal = document.getElementById("myModal");
        console.log(r);
        openModal(r);

    };

    function openModal(r){
        modal.classList.remove("hidden");
        document.getElementById("innerModal").innerHTML = `
        <h1>${myInfo[parseInt(r)].title}</h1>`+
        `<p>${myInfo[parseInt(r)].body}</p>`+
        `<a href=${myInfo[parseInt(r)].link} target="_blank">Ver Mais sobre ...</a>
        <img src=${Avatar} alt='Avatar' width=${120}/>`;
    }

    
    // When the user clicks on <span> (x), close the modal
    function close() {
        modal.classList.add("hidden");
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    }

    return (

        <section>

            <div id="myModal" className="modal hidden">
            <span id="close" onClick={close}>&times;</span>
                <div className="modal-content" id='innerModal'>
                    
                
                   
                </div>
                
            </div>

            <div className='titles'>
                <h3>Professional</h3>
                <h3>Projects</h3>
                <h3>Graduation</h3>
            </div>

            <div className='about'>

                <img src={Mk} alt="MK" width={80} className="mk mk1" />

                <div>
                    <Block handleData={updateBlock} number='2' image={Question}></Block>

                    <Block handleData={updateBlock} number='1' image={Developer}></Block>

                    <Block handleData={updateBlock} number='0' image={Job}></Block>

                </div>


                <img src={Mk} alt="MK" width={80} className="mk mk2" />

                <div>
                    <Block handleData={updateBlock} number='6' image={Question}></Block>

                    <Block handleData={updateBlock} number='5' image={Mobile}></Block>

                    <Block handleData={updateBlock} number='4' image={PostApp}></Block>

                    <Block handleData={updateBlock} number='3' image={Freelance}></Block>

                </div>

                <img src={Mk} alt="MK" width={80} className="mk mk1" />

                <div>
                    <Block handleData={updateBlock} number='10' image={Question}></Block>

                    <Block handleData={updateBlock} number='9' image={Question}></Block>

                    <Block handleData={updateBlock} number='8' image={Code}></Block>

                    <Block handleData={updateBlock} number='7' image={Logistc}></Block>

                </div>
            </div>
        </section>
    )

}