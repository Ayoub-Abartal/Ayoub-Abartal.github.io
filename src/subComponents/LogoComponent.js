import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../theme'

function LogoComponent(props) {

    const Logo = styled.h1`
        display: inline-block;
        color: ${({color}) => color === 'dark' ? darkTheme.text : darkTheme.body };
        font-family: 'Pacifico',cursive;
        position: fixed;
        left:2rem;
        top:2rem;
        z-index:3;
    `
    
    return (
        <Logo color={props.theme}>
            DIM
        </Logo>
    )
}

export default LogoComponent
