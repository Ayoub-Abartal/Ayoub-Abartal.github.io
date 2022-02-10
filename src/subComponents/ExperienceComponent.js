import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../images/blue_me.svg';
import { Experiences } from '../data/ExperienceData';

const CardList = styled(motion.div)`
    display:flex;
    position:absolute;
    top:20%;

    padding:3rem;
    overflow-x: scroll;
`

const Card = styled(motion.article)`
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
    font-family: 'DM Mono', monospace;
    display: flex;
    position:relative;
    flex-direction:column;
    height:55vh;
    width: 300px;
    min-width:250px;
    padding:1.5rem;
    color:white;
    
    border-radius: 16px;
    background: #17141d;
    box-shadow: -1rem 0 3rem #000;
    
    transition :.2s;


    &:hover{
        transform: translateY(-2rem);
        cursor:pointer;
        background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
    }
  
    &:hover p{
       color:white;
    }


    &:hover~&{
        transform:translateX(130px);
    }

    &:not(:first-child){
        margin-left: -130px;
    }
`

const CardHeader = styled(motion.header)`
    margin-bottom: auto;

    & p{
        font-size: 14px;
        margin: 0 0 1rem;
        color: #7a7a8c;
    }

    & h2 {
        font-size: 20px;
        margin: .25rem 0 auto;
        text-decoration: none;
        color: inherit;
        border: 0;
        display: inline-block;
        cursor: pointer;
    }

    & h2:hover {
        background: linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%);
        text-shadow: none;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }

    & h4{
        padding-top:2rem;
    }
    
    & ul {
        list-style:none;
        padding-top:1rem;
    }

    & li{
        padding-left: 1rem;

    }

`

const CardInfo =  styled(motion.div)`
margin: 3rem 0 0;
display: grid;
grid-template-columns: 75px 1fr;
align-items: center;
position: relative;

     & img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        filter: grayscale(100%);
        display: block;
        overflow: hidden;
        margin: 16px 10px;
     }
`

const Avatar = styled(motion.div)`
`
const AuthorName = styled(motion.div)`
`
const AutorNamePrefix = styled(motion.div)`
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
`

const HalfCircle = styled.svg`
position: absolute;
bottom: 0;
left: 0;
width: 60px;
height: 48px;
fill: none;
stroke: #00d2ff;
stroke-width: 8;
stroke-linecap: round;
pointer-events: none;
`

const container = {
    hidden:{
        opacity:0
    },
    show:{
        opacity:1,
        transition:{
            type:"spring",
            staggerChildren:0.5,
            delayChildren: 0.5        
        },
    },
};

const item = {
    hidden:{
        opacity:0
    },
    show:{
        opacity:1,
    }
}


function ExperienceComponent() {
    return (
        <>
        
        <CardList variants={container}
            initial="hidden"
            animate="show"

        >
        {Experiences.map(experience =>{
            return <Card variants={item} key={experience.id} 
             
            >
            <CardHeader>
                <p>{experience.date}</p>
                <h2>{experience.JobTitle}</h2>
               <h4>Tasks: </h4>
               <ul>
                   {experience.tasks.map((task,index)=>(
                        <li key={index+20}>
                            <p> {task}</p>
                        </li>
                   ))}
               </ul>
            </CardHeader>
            
            <CardInfo >
                <Avatar>
                    <img src={Me} />
                </Avatar>
                <HalfCircle  viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </HalfCircle>

                <AuthorName>
                    <AutorNamePrefix>
                        <p>Company :</p>
                    </AutorNamePrefix>{experience.companyName}
                </AuthorName>
            </CardInfo>

        </Card>
        })
    }
       
        </CardList>
        </>
    )
}

export default ExperienceComponent
