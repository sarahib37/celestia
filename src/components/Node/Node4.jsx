import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import NodeList2 from '../../NodeList2'

const Container = styled.section`
    padding: 1em;
    padding-bottom: 0;
    z-index: 1;
    position: relative;

    @media (min-width: 768px) {
      padding: 5em;
    }
`

const ResourceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 1.5em;
    z-index: 1;
    position: relative;

    @media (min-width: 768px) {
        flex-direction: row;
        width: auto;
      }
`

const BuildCard = styled.div`
    background: hsla(0,0%,100%,.5);
    backdrop-filter: blur(1.2em);
    border: 1px solid hsla(0,0%,47%,.15);
    border-radius: 8px;
    padding: 2em;
    line-height: 1;
    width: 70%; 

    @media (min-width: 768px) {
      width: 30%;
    }

    h3{
        padding: 0;
        margin: 0;
        font-family: Ruberoid;
        font-size: 1.2em;
        margin-top: 1em;
    }

    p{
        font-weight: 200;
        font-size: .9em;
        padding-top: .3em;
        margin-bottom: 1.5em;
        line-height: 1.5;
    }

    .arrow{
        color: #7b2bf9;
        
    }

    a{
        text-decoration: none;
        color: inherit;
        pointer: cursor;
        font-family: Ruberoid;
        font-weight: bold;
        font-size: .9em;
        padding-top: .8em;
        display: flex;
        width: max-content;
        gap: .3em;

        &:hover{
        }
        
    }

    img{
      width: 20%;

      @media (min-width: 1000px) {
        width: 12%;
      }
    }
`

const Button = styled.div`
  display: flex;
  gap: .5em;
  flex-direction: column;
  margin-top: 2.5em;

  a{
    display: flex;
    gap: .8em;
    border: none;
    background: inherit;
    font-weight: bold;
    font-size: .85em;
    font-family: Ruberoid;
    font-weight: 700;

    &:hover{
      color: #7b2bf9;
      .arrow{
        transform: rotate(0deg);
      }
    }

    .arrow{
      transform: rotate(-45deg);
      color: #7b2bf9;
    }
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1000px) {
   flex-direction: row;
  }

  h1{
    font-size: 2.5em;
    margin: 0;
    padding: 0;
    font-family: "Ruberoid";
    line-height: 1;

    @media (min-width: 768px) {
      font-size: 4.3em;
      line-height: 1;
    }

    @media (min-width: 1000px) {
      font-size: 4.3em;
    }
  }
`

const Button2 = styled.button`
  border-radius: 8px;
  border: none;
  font-size: 1.3em;
  font-family: "Ruberoid";
  font-weight: 500;
  cursor: pointer;
  width: max-content;
  text-align: center;
  padding: .8em 1.5em;
  margin-top: 1em;

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
    width: max-content;
  }

  @media (min-width: 1000px) {
    width: auto;
    padding: 0 1.5em;
    font-size: 1em;
    margin: 0;
  }
`

const SubTitle = styled.p`
  padding-top: 1em;
  padding-bottom: 2.5em;
  font-size: 1.1em;
  font-weight: 300;
  
`

function Node4() {
  return (
    <Container>
        <FlexContainer>
            <h1>Light nodes for developers</h1>
            <Button2 className='black'>Start light node</Button2>
        </FlexContainer>
        <SubTitle>How developers can use a Celestia light node for their chain</SubTitle>
        <ResourceContainer>
            {
                NodeList2.map((resource) => {
                    return(
                        <BuildCard>
                            <img src={resource.image} alt={resource.title}/>
                            <h3>{resource.title}</h3>
                            <p>{resource.sub}</p>
                            <Button><a><span>{resource.button}</span> <FontAwesomeIcon icon={faArrowRight} className='arrow'/></a></Button>
                        </BuildCard>
                    )
                })
            }
        </ResourceContainer>
    </Container>
  )
}

export default Node4