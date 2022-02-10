import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {HomeIcon} from '../components/AllSvgs'
import Img from '../images/page-daccueil.png';

function HomeButton() {

    const Home = styled.button`
        position: fixed;
        top: 2rem;
        left: 50%;
        transform: translate(-50%,0);
        padding:0.3rem;
        border:none;
        width:2.5rem;
        height:2.5rem;
        
        display: flex;
        justify-content:center;
        align-items: center;
        z-index:3;

        cursor:pointer;
    `
    return (
        <Home>
            <NavLink to="/">
                <img src={Img} height={28} width= {30} />
            </NavLink>
        </Home>
    )
}

export default HomeButton
