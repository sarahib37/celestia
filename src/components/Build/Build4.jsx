import React, { useState } from 'react'
import Framework from '../../Framework2'
import styled from 'styled-components'
import BuildCard from './BuildCard'

const Container = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 7em;
    position: relative;
    z-index: 1;
`

const Title = styled.h2`
    font-size: 2.5em;
    margin: 0;
    padding: 0;
    font-family: Ruberoid;

    @media (min-width: 768px) {
        font-size: 4.8em;
      }
`

const SubTitle = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 300;
`

const ButtonContainer = styled.div`
    margin: 2em;
    display: flex;

    button{
        padding: .5em 1em;
        padding-top: .7em;
        border-radius: 5px;
        border: none;
        background: inherit;
        font-family: Ruberoid;
        font-size: .5em;
        font-weight: bold;
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        @media (min-width: 768px) {
            font-size: .9em;
          }

        &.active{
            background: #7b2bf9;
            color: #fff;

        }
    }
`

const FrameWorkCards = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 2em;
`

function Build4({id}) {
    const [selectedFramework, setSelectedFramework] = useState('ALL')

    function handleSelectFramework(button){
        setSelectedFramework(button)
    }

  return (
    <Container id={id}>
        <Title>Rollups-as-a-Service</Title>
        <SubTitle>Deploy end-to-end on managed infrastructure using a Rollup-as-a-Service provider.</SubTitle>
        <ButtonContainer>
            {
                ['ALL', 'ARBITRUM ORBIT', 'OP STACK', 'POLYGON CDK', 'STARKNET STACK'].map((button) => {
                    return(
                        <button 
                            onClick={() => handleSelectFramework(button)} 
                            className={selectedFramework===button ? 'active' : null} 
                        >
                            {button}
                        </button>
                    )
                })
            }
        </ButtonContainer>

        <FrameWorkCards>
            {
                Framework.map((framework) => {
                    if (selectedFramework === 'ALL' || framework.stack.includes(selectedFramework)) {
                        return <BuildCard key={framework.title} framework={framework} customButton="Explore"/>;
                    }
                })
            }
        </FrameWorkCards>
    </Container>
  )
}

export default Build4