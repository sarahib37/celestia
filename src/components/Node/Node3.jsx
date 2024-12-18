import React from 'react'
import styled from 'styled-components'
import NodeList from '../../NodeList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ResourceContainer = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;lk;
    margin-bottom: 1.5em;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 0 4.5em;
        padding-top: 3em;
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

const Title = styled.h1`
    font-size: 2.7em;
    text-align: left;
    margin: 0;
    margin-top: 1em;
    margin-bottom: .6em;
    padding: .5em;
    font-family: "Ruberoid";
    line-height: 1.05;

    @media (min-width: 768px) {
      margin-top: 1em;
      font-size: 3em;
      text-align: center;
      padding: 0;
      margin-bottom: 0;
    }

    @media (min-width: 1000px) {
      margin-top: 0;
      font-size: 5em;
      text-align: center;
      padding: 0;
    }
`

function Node3() {
  return (
    <>
        <Title>Join the network</Title>
        <ResourceContainer>
            {
                NodeList.map((resource) => {
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
    </>
  )
}

export default Node3