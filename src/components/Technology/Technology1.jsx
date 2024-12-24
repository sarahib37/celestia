import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    padding-top: 5em;
    text-align: center;
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

    p{
        width: 100%;
        padding-left: 0;
        font-size: 1.3em;
        font-family: Ruberoid;
        line-height: 1.5;
        margin: 0;
        
        @media (min-width: 1000px){
            width: 70%;
            font-size: 2em;
            padding-left: 5em;
        }
    }
`

function Technology1() {
  return (
    <Container>
        <div>
            <h2>Technology</h2>
        </div>
        
        <div>
            <p>Celestia is pioneering a new paradigm in blockchain design. A minimal, modular consensus layer for rollups.</p>
        </div>
    </Container>    
  )
}

export default Technology1