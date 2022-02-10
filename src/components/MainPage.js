import {motion} from 'framer-motion'
import styled,{css,keyframes} from 'styled-components'
import React, {useState} from 'react'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import Socialicons from '../subComponents/Socialicons'
import { NavLink } from 'react-router-dom'
import Intro from './Intro'
//import {InteractiveLogo} from './AllSvgs'

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

  

const MainContainer = styled.div`
background: ${({theme}) => theme.body};
width:100vw;
height:100vh;
overflow:hidden;
position:reltive;

h1,h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif;
    font-weight:500;}
`

const Container = styled.div`
padding: 2rem

`

const Contact = styled(NavLink)`
color:${(props)=> props.theme.text};
position:absolute;
top:2rem;
right:calc(1rem + 2vw);
text-decoration:none;
z-index:1;

`

const Experience = styled(NavLink)`
color: ${({theme})=> theme.text};
position: absolute;
top:60%;
right:calc(1rem);
transform : rotate(90deg) translate(-50%,-50%);
text-decoration:none;
z-index:1; 

`

const PROJECT = styled(NavLink)`
color: ${({theme,click})=> click ? theme.body : theme.text};
position: absolute;
top:47%;
left:calc(1rem);
transform : rotate(-90deg) translate(-50%,-50%);
text-decoration:none;
z-index:1; 
`

const Skill = styled(NavLink)`
color: ${({theme})=> theme.text};
text-decoration:none;
z-index:1;
font-family:"Pacifico"
`

const BottomBar = styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;
display:flex;
justify-content:space-evenly;

`

const About = styled(NavLink)`
    color: ${ props => props.click ? props.theme.body : props.theme.text} ;
    text-decoration:none;
    z-index:1; 
`
const InteractiveLogo = styled.img``

const Center = styled.button`
    position:absolute;
    top:${({click})=> click ? '88%' : '50%'};
    left:${({click})=> click ? '94%' : '50%'};
    transform: translate(-50%,-50%) ${({click})=> click ? 'scale(0.5)' : 'scale(1)'};
    border:none;
    outline:none;
    background-color:${(props)=>props.theme.body};
    cursor:pointer;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition:all 2s ease;

    &>:first-child{
        ;
    }

    &>:last-child{
        color: ${(props)=> props.theme.text};
        padding-top:1rem;
    }
`

const DarkDiv = styled.div`
    transition:height 1.5s ease,width 1s ease 0.5s;
    position:absolute;
    top:0;
    background-color:#02B2E2; 
    bottom:0;
    right:50%;
    width: ${(props)=> props.click  ? '100%' : '0%'};
    height: ${(props)=> props.click ? '100%' : '0%'};;
    z-index:1;
`
  
    //   #C51E14                     

    //                 <InteractiveLogo fill="#676FA3" onClick={handleClick} height={250} width={250} > </InteractiveLogo>

function MainPage() {

    const [click,setClick] = useState(false);

    const handleClick= () =>{
        setClick(!click)
    }


    return (
        <MainContainer>
            <Container>
                <HomeButton/>
                <LogoComponent theme={click ? 'dark' : 'light'}/>
                <Socialicons theme={click ? 'dark' : 'light'}/>
                
                <DarkDiv click={click} />
                
                <Center click={click} >
                    <InteractiveLogo  src={require('../images/portfolio_logo.gif')} alt="loading" onClick={handleClick}></InteractiveLogo>
                    <span>  click here  </span>
                </Center>

                <Contact pathname='' target="_blank" to="/">
                    <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}}>Say hi..</motion.h2>
                </Contact>
                <Experience to="/experiences">
                    <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}}>Experiences</motion.h2>
                </Experience>
                <PROJECT click={click} to="/project">
                    <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        Projects</motion.h2>
                </PROJECT>
                <BottomBar>
                    <About to="/" click={click}>
                        <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}}>About</motion.h2>
                    </About>
                    <Skill to="/">
                        <motion.h2 whileHover={{scale:1.2}} whileTap={{scale:0.9}}>Skills</motion.h2>
                    </Skill>
                </BottomBar>


            </Container>
            {click ? <Intro/> : null}
        </MainContainer>
    )
}

export default MainPage
