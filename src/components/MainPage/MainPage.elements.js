import styled,{css,keyframes} from 'styled-components'
import { NavLink } from 'react-router-dom'


export const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

  

export const MainContainer = styled.div`
background: ${({theme}) => theme.body};
width:100vw;
height:100vh;
overflow:hidden;
position:reltive;

h1,h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif;
    font-weight:500;}
`

export const Container = styled.div`
padding: 2rem

`

export const Contact = styled(NavLink)`
color:${(props)=> props.theme.text};
position:absolute;
top:2rem;
right:calc(1rem + 2vw);
text-decoration:none;
z-index:1;
`

export const Experience = styled(NavLink)`
color: ${({theme})=> theme.text};
position: absolute;
top:60%;
right:calc(1rem);
transform : rotate(90deg) translate(-50%,-50%);
text-decoration:none;
z-index:1; 

`

export const PROJECT = styled(NavLink)`
color: ${({theme,click})=> click ? theme.body : theme.text};
position: absolute;
top:47%;
left:calc(1rem);
transform : rotate(-90deg) translate(-50%,-50%);
text-decoration:none;
z-index:1; 
`

export const Skill = styled(NavLink)`
color: ${({theme})=> theme.text};
text-decoration:none;
z-index:1;
font-family:"Pacifico"
`

export const BottomBar = styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;
display:flex;
justify-content:space-evenly;

`

export const About = styled(NavLink)`
    color: ${ props => props.click ? props.theme.body : props.theme.text} ;
    text-decoration:none;
    z-index:1; 
`
export const InteractiveLogo = styled.img``

export const Center = styled.button`
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
       
    }

    &>:last-child{
        color: ${(props)=> props.theme.text};
        padding-top:1rem;
    }
`

export const DarkDiv = styled.div`
    transition:height 1.5s ease,width 1s ease 0.5s;
    position:absolute;
    
    background-color:#02B2E2; 
  
    z-index:1;
    width: ${(props) => props.click  ? '100%' : '0%'};
    height: ${(props) => props.click ? '100%' : '0%'};
    @media screen and (min-width: 1200px){
        top:0;
        bottom:0;
        right:50%;
    }

    @media screen and (max-width: 900px){
        bottom:50%;
        right:0;
        left: 0;
        
    }
`