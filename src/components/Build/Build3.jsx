import React from 'react'
import Resources from '../../Resources'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const BuildCard = styled.div`
    background: hsla(0,0%,100%,.5);
    backdrop-filter: blur(1.2em);
    border: 1px solid hsla(0,0%,47%,.15);
    border-radius: 8px;
    padding: 2em;
    line-height: 1;
    width: 30%; 

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
`

const Title = styled.h2`
    font-size: 2.5em;
    margin: 1em 0;
    text-align: center;
    padding: 0;
    font-family: Ruberoid;

    @media (min-width: 768px) {
        font-size: 4.8em;
      }
`

const ResourceContainer = styled.div`
    padding: 0 1.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 1.5em;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 0 4.5em;
        width: auto;
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

const Resource = styled.div`
    background: #f7f7f7;
    border-radius: 8px;
    padding: 2em;
    width: 100%;
    margin-bottom: .5em;
`

const ResourceContainer2 = styled.div`
    padding: 0 1.5em;
    display: column;
    gap: 3em;
    margin-top: 2em; 
    width: 60%;
    align-items: center;
    justify-content: center
    margin: 0 auto;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 0 4.5em;
        width: auto;
        margin-top: 2em;
        gap: 1em;
        display: flex;
      }
    

    h3{
        font-size: 2em;
        font-family: Ruberoid;
        margin: 0;
    }

    p{
        margin: 0;
    }

    button{
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
    }
`

function Build3() {
    const Resource2 = [
        {
            title: "Blobstream",
            sub: 'Use Celestia as the DA layer for your Ethereum L2.',
            button: 'Blobstream documentation'
        },

        {
            title: "Node API",
            sub: 'Use the celestia-node API to publish and retrieve transactions from Celestia.',
            button: 'Node API Documentation'
        }
    ]

  return (
    <>
        <Title>Developer resources</Title>
        <ResourceContainer>
            {
                Resources.map((resource) => {
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
        <ResourceContainer2>   
            {Resource2.map((resource) => {
                return(
                    <Resource>
                        <h3>{resource.title}</h3>
                        <p>{resource.sub}</p>
                        <button>{resource.button}</button>
                    </Resource>
                )
            })}
        </ResourceContainer2>  
    </>
  )
}

export default Build3