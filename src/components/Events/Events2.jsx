import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4em;
    align-items: center;
    justify-content: center;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 6.5em;
    justify-content: center;
    align-item: center;

    @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    h3{
        font-family: "Ruberoid";
        font-size: 1.5em;
        text-align: center;
        font-weight: 700;
        margin: 0;

        @media (min-width: 768px){
            font-size: 3em;
        }
    }

    a{
        background: #fff;
        border: 1px solid #e3e3e3;
        border-radius: 8px;
        box-shadow: 0 2px 2px rgba(0,0,0,.03);
        color: #000;
        font-family: "Ruberoid";
        font-size: 1em;
        font-weight: 700;
        height: fit-content;
        letter-spacing: .2px;
        line-height: 1;
        padding: .8em 1em;
        transition: background-color .3s ease;
        cursor: pointer;
        
        &:hover{
            background: #f1f1f1;
            .arrow{
                color: #7b2bf9;
                transform: rotate(0deg);
            }
        }
        
        .arrow{
            transform: rotate(-45deg);
            color: #7b2bf9;
        }
        
    }
`

const Past = styled.a`
    background: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0,0,0,.03);
    color: #000;
    font-family: "Ruberoid";
    font-size: 1em;
    font-weight: 700;
    height: fit-content;
    letter-spacing: .2px;
    line-height: 1;
    padding: .8em 1em;
    transition: background-color .3s ease;
    margin: 0 auto;

    &:hover{
        background: #f1f1f1;
        .arrow{
            color: #7b2bf9;
            transform: rotate(0deg);
        }
    }
    
    .arrow{
        transform: rotate(-45deg);
        color: #7b2bf9;
    }
`

function Events2() {
  return (
    <Container>
        <FlexContainer>
            <h3>Community events</h3>
            <a>Submit your Event  <FontAwesomeIcon icon={faArrowRight} className="arrow" /></a>
        </FlexContainer>

        <Past>View Past Events <FontAwesomeIcon icon={faArrowRight} className="arrow"/></Past>
    </Container>
  )
}

export default Events2