import React, {useState} from "react";
import styled from "styled-components";
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavSublist from "./NavSublist";
import { Link } from "react-router-dom";

const List = styled.li`
    cursor: pointer;
    font-size: 1.5em;

    @media (min-width: 992px){
        font-size: 1.1em;
    }
`

const Arrow = styled(FontAwesomeIcon)`
    padding: 0;
    transition: transform 0.4s ease-in-out;
    transform: ${({hover}) => (hover ? 'rotate(180deg)' : 'rotate(0deg)')}
`

const SubList = styled.div`
    display: ${({show}) => (show ? 'block' : 'none')};
    padding: 1em;
    background: rgba(250, 250, 250, 0.68);
    backdrop-filter: blur(.5em);
    text-decoration: none;
    color: inherit;
    width: 50%;
    font-size: .8em;
    border-radius: 30px;

    @media (min-width: 992px){
        
        position: fixed;
        width: 80%;
        top: ${({scrolled}) => (scrolled ? '70%' : '13%')};
        left: 0;
        top: 55%;
        font-size: 1.15em;
        font-size: ${({scrolled}) => (scrolled ? '1.5em' : '1.15em')};
        text-wrap: no-wrap;
        margin-left: 1em;
    }
    
`



function NavList({index, scrolled, nav}) {
    const [hover, setHover] = useState(null);
    
    function handleHover(index){
        setHover(index)
    }

    function handleNoHover(){
        setHover(null)
    }

    return(
    <List key={index} onMouseEnter={() => handleHover(index)} onMouseLeave={handleNoHover}>
        {nav.nav} <Arrow hover={hover === index} icon={hover === index ? faAngleUp : faAngleDown} />
        <SubList 
            show={hover === index} 
            scrolled={scrolled} 
            onMouseEnter={() => handleHover(index)} 
            onMouseLeave={handleNoHover}
        >
        {nav.subNav.map((sub, index) => 
        {
            return <Link to={sub.link}><NavSublist index={index} sub={sub}/></Link>
            }
        )}
        </SubList>
    </List>
    );
}
  
export default NavList