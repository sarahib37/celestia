import React, { useState } from 'react'
import Framework from '../../Framework'
import styled from 'styled-components'
import BuildCard from './BuildCard'

const Container = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 7em;
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
        font-size: .9em;
        font-weight: bold;
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        &.active{
            background: #7b2bf9;
            color: #fff;

        }
    }
`

const FrameWorkCards = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: left;

    @media (min-width: 768px) {
        flex-direction: row;
      }
`

const FinalButton = styled.button`
    background: #000;
    border: none;
    border-radius: 6px;
    color: #fff;
    display: inline-block;
    font-family: Ruberoid;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: .2px;
    line-height: 1.25em;
    padding: 1em 1.3em;
    text-align: center;
    text-decoration: none;
    transition: all .3s ease-in-out;
    margin-top: 3em;
    cursor: pointer;

    &:hover{
        background-color: #333;
      }
`

function Build2() {
    const [selectedFramework, setSelectedFramework] = useState('ALL')

    function handleSelectFramework(button){
        setSelectedFramework(button)
    }

  return (
    <Container>
        <Title>Choose a framework</Title>
        <SubTitle>Get started quickly by using Celestia with leading rollup frameworks.</SubTitle>
        <ButtonContainer>
            {
                ['ALL', 'ETHEREUM', 'SOVEREIGN'].map((button) => {
                    return(<button onClick={() => handleSelectFramework(button)} className={selectedFramework===button ? 'active' : null}>{button}</button>)
                })
            }
        </ButtonContainer>

        <FrameWorkCards>
            {
                Framework.map((framework) => {
                    if (selectedFramework === 'ALL' || framework.stack === selectedFramework) {
                        return <BuildCard key={framework.title} framework={framework} />;
                    }
                })
            }
        </FrameWorkCards>
        <FinalButton>Integrate with Celestia</FinalButton>
    </Container>
  )
}

export default Build2