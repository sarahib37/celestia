import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    background: linear-gradient(84deg,#da1bca,#7b2bf9,#7b2bf9,#36cef0,#f7cc97);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 4em;
    margin: 0 auto;
    width: 70%;
    font-weight: 400;

    @media (min-width: 1200px){
      font-size: 7em;
    }
`

const Sub = styled.h3`
    width: 50%;
    font-size: 1.4em;
    font-weight: 400;
    padding-left: 8em;

    @media (min-width: 1200px){
      padding-left: 20em;
      font-size: 1.9em;
    }
`

function Careers2() {
  return (
    <div>
        <Title>Make chains as easy to deploy as smart contracts</Title>
        <Sub>Join our team of leading engineers, researchers and entrepreneurs in pioneering the first modular blockchain design.</Sub>
    </div>
  )
}

export default Careers2