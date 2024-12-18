import React from 'react'
import styled from 'styled-components'
import Ecosystem from '../../assets/ecosystem.webp'

const Ctn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5em;
    align-items: center;
    z-index: 1;
    position: relative;

    @media (min-width: 1000px){
      flex-direction: row;
    }

    img{
        width: 100%;

        @media (min-width: 1000px){
          width: 43%;
        }
    }

    p, h2{
        margin: 0;
        padding: 0;
    }

    h2{
        font-size: 2.5em;

        @media (min-width: 1000px){
          font-size: 4.5em;
        }
    }

    p{
        font-weight: 300;
        margin: 2em 0;
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

function Social4() {
  return (
    <Ctn>
        <img src={Ecosystem} alt='Ecosystem'/>
        <div>
            <h2>Ecosystem</h2>
            <p>Discover a wide range of apps and services built in the Celestia ecosystem.</p>
            <Button className='black'>Dive in</Button>
        </div>
    </Ctn>  
  )
}

export default Social4