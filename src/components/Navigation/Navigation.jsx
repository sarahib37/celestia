import React from 'react';
import styled from 'styled-components';
import Navigate from '../../navigate';
import NavList from './NavList';

const Lists = styled.ul`
    display: ${({ openHamburger }) => (openHamburger ? 'flex' : 'none')};
    flex-direction: column;
    gap: 3em;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background: hsla(0,0%,100%,0.7);
    backdrop-filter: blur(4px);
    margin-top: -5em;
    list-style: none;
    font-family: Ruberoid;
    padding: 8em 3em;
    z-index: 100;

    @media (min-width: 992px) {
        display: flex;
        width: 100%;
        height: 0%;
        flex-direction: row;
        margin-top: 1em;
        backdrop-filter: blur(0px);
        position: static;
        background: transparent;
        color: #000;
        gap: 1em;
    }
`;

function Navigation({ openHamburger }) {
    return (
        <nav>
            <Lists openHamburger={openHamburger}>
                {Navigate.map((nav, index) => (
                    <NavList nav={nav} key={index} />
                ))}
            </Lists>
        </nav>
    );
}

export default Navigation;
