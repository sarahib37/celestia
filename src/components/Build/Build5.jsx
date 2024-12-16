import React from 'react'
import Contact from '../../assets/contact.svg'
import styled from 'styled-components'

const Container = styled.div`
    width: 86%;
    display: flex;
    margin: 0 auto;
    margin-bottom: 5em;
    padding: 1.5em;
    padding-top: 2em;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    align-items: center;
    margin-top: 4.3em;
    backdrop-filter: blur(32px);
    border: 1px solid hsla(0,0%,97%,.6);
    box-shadow: 0px 0px 1px black;
    background: white;
    border-radius: 8px;

    img{
        width: 50%;
        margin: 0;
        padding: 0;

        @media (min-width: 768px) {
            width: 10%;
          }
    }
`

const SubContainer = styled.div`
    display: flex;
    gap: 2em;   
    width: 50%;

    h3{
        font-family: Ruberoid;
        font-size: 1em;
        margin: 0;
        padding: 0;

        @media (min-width: 768px) {
            font-size: 2em;
          }
    }

    p{
        padding: 0;
        margin: 0;
        font-size: .7em;
        white-space: no-wrap;

        @media (min-width: 768px) {
            font-size: 1.3em;
          }
    }
`

const Button = styled.button`
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
    padding: .5em;
    text-align: center;
    text-decoration: none;
    transition: all .3s ease-in-out;
    cursor: pointer;

    @media (min-width: 768px) {
        padding: 1em 1.5em;
      }

    &:hover{
        background-color: #333;
      }
`

function Build5() {
  return (
    <Container>
        <SubContainer>
            <img src={Contact} alt='contact'/>
            <div>
                <h3>Explore your options</h3>
                <p>Contact us to find solutions for your app's needs.</p>
            </div>
        </SubContainer>
        
        <Button>Get In Touch</Button>
    </Container>
  )
}

export default Build5