import React from 'react'
import styled from 'styled-components'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FrameCard = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 1.5em;
  padding-top: 2em;
  margin: 0 auto;
  backdrop-filter: blur(32px);
  background: hsla(0,0%,97%,.6);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 27%;
    margin-top: 2.3em;
  }
  

  p{
    font-weight: 300;
    font-size: .85em;
    line-height: 1.5;
    color: #393939;
  }

  button{
    display: flex;
    gap: .8em;
    border: none;
    background: inherit;
    font-weight: bold;
    font-size: .85em;
    font-family: Ruberoid;
    font-weight: 700;
    cursor: pointer;

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

const Image = styled.img`
  width: 20%;
`

const Title = styled.h3`
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  margin-top: 1.5em;
  font-family: Ruberoid;
`

const Buttons = styled.div`
  display: flex;
  gap: .5em;
  flex-direction: column;
  padding-top: 4em;
`

const Special = styled.p`
  background: linear-gradient(260deg,#802ef4 9.44%,#ed7fff 41.17%,#802ef4 70.97%);
  border-radius: 5em;
  font-family: Ruberoid;
  margin-top: -1em;
  padding: .5em 1em;
  text-align: center;
  width: max-content;
`

function BuildCard({framework, customButton}) {
  return (
    <FrameCard>
        <Image src={framework.logo} alt={framework.title}/>
        <Title>{framework.title}</Title>
        <p>{framework.sub}</p>
        <Buttons>
          {framework.button && framework.button.length === 0 && (
            <Special style={{color: "#fff", fontWeight: "bold", fontSize: ".9em"}}>
              Coming soon
            </Special>)}
            {framework.button &&
            framework.button.map((button, index) => (
                <button key={index}>
                  <span>{button}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                </button>
              ))}

            {customButton && (
              <button>
                <span>{customButton}</span>
                <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </button>
            )}
        </Buttons>
        
    </FrameCard>
  )
}

export default BuildCard