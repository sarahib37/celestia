import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    justify-content: space-between;
    padding: 5em;
    background-color: #000;

    @media (min-width: 1000px){
      flex-direction: row;
    }

    h3{
        font-size: 2.5em;
        font-weight: 400;
        font-family: Ruberoid;
        padding: 0;
        color: #fff;
    }

    ul{
        width: 50%;
    }

    li{
        border-top: 1.5px solid #fff;
        padding: 3em 0;
        font-size: .9em;
        list-style: none;
        color: #fff;
        display: flex;
        gap: 2em;
    }
`

const Sub = styled(FontAwesomeIcon)`
  padding-right: 1em;
  padding-left: 1em;
  transform: rotate(45deg);
`

const Button = styled.button`
  border-radius: 50em;
  border: none;
  font-size: .8em;
  font-family: "Ruberoid";
  font-weight: 500;
  cursor: pointer;
  width: max-content;
  text-align: center;
  padding: 1em;
  background-color: #7b2bf9;
  color: white;

  &:hover {
    background-color: #000;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: .6em 1.3em;
  }
`

function Careers3() {
  return (
    <Container>
        <div>
            <h3>Perks</h3>
            <Button>CURRENT OPENINGS <Sub icon={faArrowUp} className="arrow" /></Button>
        </div>
        
        <ul>
            <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 left-2.5"><path d="M6.67055 0H9.37609V6.49697L15.1603 4.46061L16 7.12727L10.1224 9.16364L13.7143 14.303L11.5685 16L8.02332 10.7636L4.47813 16L2.28571 14.303L5.87755 9.16364L0 7.12727L0.83965 4.46061L6.67055 6.49697V0Z" fill="#ffffff"></path></svg> 
                <span>Employment benefits</span>
            </li>
            <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 left-2.5"><path d="M6.67055 0H9.37609V6.49697L15.1603 4.46061L16 7.12727L10.1224 9.16364L13.7143 14.303L11.5685 16L8.02332 10.7636L4.47813 16L2.28571 14.303L5.87755 9.16364L0 7.12727L0.83965 4.46061L6.67055 6.49697V0Z" fill="#ffffff"></path></svg> 
                <span>4 weeks annual vacation</span>
            </li>
            <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 left-2.5"><path d="M6.67055 0H9.37609V6.49697L15.1603 4.46061L16 7.12727L10.1224 9.16364L13.7143 14.303L11.5685 16L8.02332 10.7636L4.47813 16L2.28571 14.303L5.87755 9.16364L0 7.12727L0.83965 4.46061L6.67055 6.49697V0Z" fill="#ffffff"></path></svg> 
                <span>Meaningful long-term compensation package</span>
            </li>
            <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 left-2.5"><path d="M6.67055 0H9.37609V6.49697L15.1603 4.46061L16 7.12727L10.1224 9.16364L13.7143 14.303L11.5685 16L8.02332 10.7636L4.47813 16L2.28571 14.303L5.87755 9.16364L0 7.12727L0.83965 4.46061L6.67055 6.49697V0Z" fill="#ffffff"></path></svg> 
                <span>Flexible and remote work environment</span>
            </li>
        </ul>
    </Container>
  )
}

export default Careers3