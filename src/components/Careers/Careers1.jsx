import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    padding: 0;
    gap: 3em;

    @media (min-width: 1000px){
      flex-direction: row;
      text-align: left;
      padding: 5em;
    }

    @media (min-width: 1200px){
      gap: 12em;
    }
    
    h2, h3{
        font-family: Ruberoid;
        padding: 0;
        margin: 0;
    }

    h2{
        font-size: 2em;
        font-weight: 500;
        margin-bottom: .5em;

        @media (min-width: 400px){
          font-size: 3.5em;
      }
    }

    h3{
        font-size: 1.8em;
        font-weight: 400;
    }

    p{
        width: 100%;
        padding-left: 0;
        font-size: 1.3em;
        font-family: Ruberoid;
        line-height: 1.5;
        margin: 0; 
        
        @media (min-width: 1000px){
          width: 60%;
          font-size: 2em;
          padding-left: 8em;
      }
    }
`

const Button = styled.button`
  border-radius: 8px;
  border: none;
  font-size: 1em;
  font-family: "Ruberoid";
  font-weight: 500;
  cursor: pointer;
  width: max-content;
  text-align: center;
  padding: 1em;

  &:hover {
    background-color: #000;
    color: #ffffff;
  }

  &.black {
    background-color: #000;
    color: #ffffff;
    font-weight: bold;

    &:hover {
      background-color: #333;
    }
  }

  @media (min-width: 768px) {
    width: auto;
    padding: .6em 1.3em;
  }
`

const Sub = styled(FontAwesomeIcon)`
  padding-right: 1em;
  padding-left: 1em;
  transform: rotate(-45deg);
`

function Careers1() {
  return (
    <Container>
        <div>
            <h2>Careers</h2>
            <Button className='black'>SEE PERKS <Sub icon={faArrowDown} className="arrow" /></Button>
        </div>
        
        <div>
            <p>Join Celestia to shape the future of blockchains and decentralized applications. Work with top experts in a dynamic environment.</p>
        </div>
    </Container>    
  )
}

export default Careers1