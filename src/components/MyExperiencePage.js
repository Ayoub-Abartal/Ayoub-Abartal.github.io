import React, { useState } from 'react'
import styled from 'styled-components';
import img from '../images/Experience_background.png'
import ExperienceComponent from '../subComponents/ExperienceComponent';
import HomeButton from '../subComponents/HomeButton';
import LogoComponent from '../subComponents/LogoComponent';
import Socialicons from '../subComponents/Socialicons';

const MainContainer = styled.div`

    background-size:cover;
    background-repeat:no-repeat;
    background-attachement:fixed;
    background-position:center;
    wdith:100vw;
    height:100vh;
    background: rgb(23,20,29);
    background: linear-gradient(90deg, rgba(23,20,29,1) 0%, rgba(23,21,28,1) 46%, rgba(57,55,64,1) 100%);
    `
const Container = styled.div`

display: flex;
justify-conten: center;
align:items:center;

`

const CardList = styled.div`
    display:flex;
    padding:3rem;

`

const Text = styled.h2`
color:white;
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
font-family: 'DM Mono', monospace;
position: absolute;
top:8rem;
left:4rem;


`



function MyExperiencePage() {
    const [click,setClick ]= useState(true)
    return (
        <MainContainer>
            <Container>
                
                <LogoComponent theme={'dark'}/>

                    <Text>
                    Experiences : 
                    </Text>
                <ExperienceComponent/>

            </Container>
        </MainContainer>
    );
}

export default MyExperiencePage
