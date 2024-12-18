import React from 'react'
import styled from 'styled-components'
import { faCalendar, faCircle, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hackathon from '../../assets/hackathonImage.webp'

const Title = styled.h1`
    font-family: "Ruberoid";
    font-size: 3em;
    margin-bottom: 0;
    padding-bottom: 0;

    @media (min-width: 768px){
        font-size: 7em;
    }
`

const SubTitle = styled.p`
    font-family: "Ruberoid";
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 1.2em;
`

const HackContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 90%;
    align-items: center;
    background-color: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0,0,0,.03);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .5em;
    margin-top: 2em; 

    @media (min-width: 1000px){
        flex-direction: row;
    }

    img{
        width: 100%;
        border-radius: 8px;

        @media (min-width: 1000px){
            width: 50%;
        }
    }
`

const Sub = styled.div`
    margin: 0;
    margin-right: 4em;
    margin-bottom: 2em;
    padding: 0;
    width: 50%;
    padding: 2em;

    @media (min-width: 1000px){
        width: 40%;
        padding: 0;
    }

    h3{
        font-family: "Ruberoid";
        font-size: 1.5em;
        margin-bottom: 0;
        padding-bottom: 0;

        @media (min-width: 768px){
            font-size: 3em;
        }
    }
`

const FlexButton = styled.div`
    display: flex;
    width: 100%;
    gap: 3em;
    align-items: space-between;

    p{
        font-weight: bold;
    }
`

const Icon = styled(FontAwesomeIcon)`
    font-size: .3em;
    align-self: center;
`

const Line = styled.div`
    border-bottom: 1px solid #ececec;
    padding-bottom: 2em;
    margin-bottom: 1.5em;
`

const Button = styled.button`
  border-radius: 8px;
  border: none;
  font-size: 1em;
  font-family: "Ruberoid";
  font-weight: 500;
  cursor: pointer;
  width: max-content;
  text-align: center;
  padding: 1em;

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
    padding: .6em 1.3em;
  }
`

function Events1() {
  return (
    <div>
        <Title>Events</Title>
        <SubTitle>Hangout with the Celestia community IRL or online.</SubTitle>

        <HackContainer>
            <img src={Hackathon} alt='Hackathon'/>
            <Sub>
                <Line>
                    <h3>Celestia hackathon</h3>
                    <FlexButton>
                        <p><FontAwesomeIcon icon={faCalendar}/> Coming soon!!</p>
                        <Icon icon={faCircle}/>
                        <p><FontAwesomeIcon icon={faLocationDot}/> Online</p>
                    </FlexButton>
                </Line>
                
                <Button className='black'>View event</Button>
            </Sub>
        </HackContainer>
    </div>
  )
}

export default Events1