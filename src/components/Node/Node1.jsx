import React from 'react'
import styled from 'styled-components'
import NodeBG from '../../assets/nodeBG.webp'

const Container = styled.section`
  
  position: relative;
  padding: 1em; 
  padding-top: 21em;
  padding-bottom: 0;
  z-index: 1;

  @media (min-width: 478px){
    padding: 3em;
    padding-top: 15em;
    padding-right: 35em;
  }

  @media (min-width: 1000px){
    position: relative;
    padding: 5em;
    padding-top: 15em;
    padding-bottom: 0;
    z-index: 1;
  }

  &:before {
    background: url(${NodeBG}) no-repeat;
    background-size: 170%;
    background-position: top right;
    content: "";
    height: 100%;
    right: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;

    @media (min-width: 478px){
      background-size: 100%;
      background-position: top right;
      left: 20%;
      right: 0;
    }

    @media (min-width: 1000px){
      background-size: 60%;
      background-position: right;
      left: 0;
      right: 0;
    }
  } 

  h2{
    
    font-size: 1em;
  }
`

const Title = styled.h1`
    font-size: 2em;
    margin: 0;
    padding: 0;
    font-family: "Ruberoid";
    line-height: 1.05;

    @media (min-width: 478px){
      font-size: 4.5em;
    }

    @media (min-width: 1000px){
      font-size: 7em;
      padding-right: 15em;
    }
`

const SubTitle = styled.p`
    padding-right: 5em;
    padding-top: 1em;
    font-family: "Ruberoid";
    font-weight: 500;
    font-size: .85em;
    word-spacing: 2px;
    line-height: 1.5;

    @media (min-width: 478px){
      font-size: 1em;
      padding-right: 10em;
      width: 100%;
      min-width: max-content;
    }

    @media (min-width: 1000px){
      font-size: 1.2em;
      padding-right: 47em;
    }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: flex-start;
  margin-bottom: 3em;

  @media (min-width: 478px){
    flex-direction: row;
    align-items: center;
    width: max-content;
  }
`

const Button = styled.button`
  border-radius: 8px;
  border: none;
  padding: 0.8em 1.2em;
  font-size: 1em;
  font-family: "Ruberoid";
  font-weight: 500;
  cursor: pointer;
  width: max-content;
  text-align: center;

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
    padding: 0.9em 1.5em;
  }
`

function Node1() {
  return (
    <Container>
        <Title>Directly verify</Title>
        <SubTitle>Join the network or integrate the Celestia light node.</SubTitle>
        <Buttons>
            <Button className='black'>Run a node</Button>
            <Button>Integrate</Button>
        </Buttons>
    </Container>
  )
}

export default Node1