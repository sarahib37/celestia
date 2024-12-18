import React from 'react'
import NodeImage from '../../assets/NodeImage.webp'
import styled from 'styled-components'

const FlexContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    padding: 1em;

    @media (min-width: 1000px){
        flex-direction: row;
        padding: 5em;
        padding-top: 0;
    }

    img{
        width: 100%;

        @media (min-width: 1000px){
            width: 50%;
        }
    }

    h2{
        font-size: 2em;
        font-family: "Ruberoid";
        line-height: 1;
        margin: 0;
        padding: 0;

        @media (min-width: 768px){
            font-size: 3em;
        }

        @media (min-width: 1000px){
            font-size: 4.5em;
        }
    }

    p{
        font-family: "Ruberoid";
        font-weight: 300;
        font-size: .9em;
        margin: 0;
        padding-top: 1em;
        padding-bottom: 0;
    }
`

function Node2() {
  return (
    <FlexContainer>
        <img src={NodeImage} alt='Light node'/>
        <div>
            <h2>What is a light node?</h2>
            <p>Light nodes allow anyone to directly verify data availability and interact with Celestia without centralized gateways or RPC providers.</p>
            <p>Data availability sampling enables Celestia to securely increase throughput for rollups as new light nodes join the network over time.</p>
            <p>Each rollup on Celestia uses a light node to directly publish and retrieve transaction data.</p>
        </div>
    </FlexContainer>
  )
}

export default Node2