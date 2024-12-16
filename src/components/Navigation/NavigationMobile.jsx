import React from "react";
import styled from "styled-components";
import Navigate from '../../navigate';
import NavList from "./NavList";

const Lists = styled.ul`
    backdrop-filter: blur(10px);
     background-color: hsla(0,0%,100%,.95);
    background: red;
    height: 100vh;
    left: 0;
    position: fixed;
    top: ${({ openHamburger }) => (openHamburger ? "0" : "-200vh")};
    min-width: 100vw;
    z-index: 100;
    list-style: none;
    display: block;
    transition: top 0.5s ease-in-out; 
    padding: 2em;
    font-size: 2em !important;
`

function NavigationMobile({scrolled, openHamburger}) {

    return (<nav>
        <Lists scrolled={scrolled}>
            {Navigate.map((nav, index) => {
            return(
                <NavList openHamburger={openHamburger} nav={nav} index={index} scrolled={scrolled} key={index}/>)
            })}
        </Lists>
    </nav>);
}

export default NavigationMobile