import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CelestiaLogo from '../assets/CelestiaLogo.svg';
import '../assets/fonts/stylesheet.css';
import Navigation from './Navigation/Navigation';
import { Link } from 'react-router-dom';

const Container = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    align-items: center;
    justify-content: space-between;
    padding: ${({ scrolled }) => (scrolled ? '1em' : '2em 0')};
    background-color: ${({ scrolled }) => (scrolled ? 'rgba(255, 255, 255, 0.9)' : 'hsla(0,0%,100%,0)')};
    backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(1em)' : 'none')};
    transition: all 0.6s ease-in-out;
    gap: 3em;

    @media (min-width: 992px){
      padding: ${({ scrolled }) => (scrolled ? '1em 4.5em' : '2em')};
      align-item: flex-start;
      height: 10%;
    }

    img {
        width: ${({ scrolled }) => (scrolled ? '50%' : '100%')};
        cursor: pointer;
        z-index: 101;
        transition: transform 0.4s ease-in-out;
        transform: ${({ scrolled }) => (scrolled ? 'scale(1.1)' : 'scale(1)')};

        @media (min-width: 992px){
          width: 100%;
        }
    }
`;

const Hamburger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20px;
    width: 30px;
    z-index: 101;
    cursor: pointer;
    background-color: #000;
    padding: .5em .3em;
    border-radius: 5px;
    margin-left: 2em;

    div {
        height: 3px;
        width: 70%;
        background-color: #fff;
        transition: all 0.3s ease-in-out;

        &:nth-child(1) {
            transform: ${({ openHamburger }) => (openHamburger ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
        }
        &:nth-child(2) {
            opacity: ${({ openHamburger }) => (openHamburger ? '0' : '1')};
        }
        &:nth-child(3) {
            transform: ${({ openHamburger }) => (openHamburger ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
        }
    }

    @media (min-width: 992px) {
        display: none;
    }
`;

function Heading() {
    const [scrolled, setScrolled] = useState(false);
    const [openHamburger, setOpenHamburger] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 160);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container scrolled={scrolled}>
            <Hamburger openHamburger={openHamburger} onClick={() => setOpenHamburger((prev) => !prev)}>
                <div />
                <div />
                <div />
            </Hamburger>
            <Link to="/">
                <img src={CelestiaLogo} alt="Celestia Logo" />
            </Link>
            <Navigation scrolled={scrolled} openHamburger={openHamburger} />
        </Container>
    );
}

export default Heading;
