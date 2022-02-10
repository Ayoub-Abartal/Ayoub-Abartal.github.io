import React from 'react'
import styled from 'styled-components'
//import Me  from '../images/Character06.svg';
import Me from '../images/blue_me.svg';
import {motion} from 'framer-motion'

const Box = styled(motion.div)`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width : 55vw;
    height:55vh;
    display: flex;
    z-index:1;


    background: linear-gradient(
        to right,
        ${props=>props.theme.body} 50%,
        ${props=>props.theme.text} 50%) bottom,
    linear-gradient(
        to right,
        ${props=>props.theme.body} 50%,
        ${props=>props.theme.text} 50%) top;
        border-left: 2px solid ${props => props.theme.body};
        border-right: 2px solid ${props => props.theme.text};
    
    background-repeat:no-repeat;
    background-size:100% 2px;
`

const SubBox = styled.div`
    width : 50%;
    position:relative;
    display:flex;

    .pic{
        position:absolute;
        bottom:0;
        left:50%;
        transform:translate(-50%, 0%);
        width:100%;
        height:auto;
    }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
        font-size: calc(0.5rem + 1.5vw);
        font-weight:300;
    }

`

function Intro() {
    return (
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{ type: 'spring', duration:2 ,delay:1}}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I am Ayoub Abartal,</h3>
                    <h6>a Web Developper who enjoy solving problems.</h6>

                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1, delay:2}}
                >
                    <img className="pic" src={Me}/>
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
