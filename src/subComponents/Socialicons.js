import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter } from '../components/AllSvgs'
import { darkTheme } from '../theme'

const Icons = styled.div`
display:flex;
flex-direction:column;
align-items:center;

position: fixed;
bottom:0;
left:2rem;
z-index:3;
`

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color:${(props)=> props.color === 'dark' ? darkTheme.text : darkTheme.body}
`

function Socialicons(props) {

    return (
        <Icons>
            <div>
                <NavLink style={{color:'inherit'}} to="/" >
                    <Github  width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </div>

            <div>
                <NavLink style={{color:'inherit'}} to="/">
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </div>

            <div>
                <NavLink style={{color:'inherit'}} to="/">
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
                </NavLink>
            </div>
            <Line color={props.theme}/>
        </Icons>
    )
}

export default Socialicons
