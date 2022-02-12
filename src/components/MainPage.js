import {motion} from 'framer-motion'
import styled,{css,keyframes} from 'styled-components'
import React, {useState} from 'react'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import Socialicons from '../subComponents/Socialicons'
import { NavLink } from 'react-router-dom'
import Intro from './Intro'
//import {InteractiveLogo} from './AllSvgs'
import {MainContainer,
        Container,
        DarkDiv,
        Center,
        Contact,
        Experience,
        PROJECT,
        Skill,
        BottomBar,
        About,
        InteractiveLogo
    } from './MainPage/MainPage.elements'

  
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
