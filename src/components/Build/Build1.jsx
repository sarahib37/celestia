import React from 'react';
import styled from 'styled-components';
import BuildBG from '../../assets/BuildBG.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Container = styled.section`
    width: 100%;

    &:before{
    background-image: url(${BuildBG});
    background-size: cover;
    content: "";
    height: 130%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    padding-bottom: 10em;
    }

    h1{
        font-size: 3em;
        padding: 0 1em; 
        margin-top: 3em;

        @media (min-width: 768px) {
            text-align: center;
            font-size: 7em;
            margin-top: 1em;
          }
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    gap: 2em;
    justify-content: center;

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
    padding: 2em 2.3em;
    line-height: 1;

    

    h3{
        padding: 0;
        margin: 0;
        font-family: Ruberoid;
        font-size: 1.8em;
        margin-bottom: -.4em;
    }

    p{
        font-weight: 200;
        font-size: 1em;
        padding-top: .3em;
        margin-bottom: 1.5em;
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
            gap: 1em;
            transition: all .2s ease-in-out;
        }
        
    }
`

function Build1() {
    const build = [
        {
            title: "Build",
            sub: "Pick a rollup framework to begin building.",
            button: "Choose"
        },
        {
            title: "Integrate",
            sub: "Plug Celestia into your existing chain.",
            button: "Start"
        },
        {
            title: "Deploy",
            sub: "Explore Rollup-as-a-Service to deploy quickly.",
            button: "Explore"
        }
    ]
  return (
    <Container>
        <h1>Build whatever</h1>

        <FlexContainer>
            {
                build.map((build) => {
                    return(
                        <BuildCard>
                            <h3>{build.title}</h3>
                            <p>{build.sub}</p>
                            <a href='#' target='_blank'><span>{build.button}</span> <FontAwesomeIcon icon={faArrowDown} className='arrow'/></a>
                        </BuildCard>
                    )
                })
            }

            

        </FlexContainer>
    </Container>
  )
}

export default Build1