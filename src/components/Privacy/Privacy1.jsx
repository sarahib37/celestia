import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    padding: .5em;
    gap: 3em;

    @media (min-width: 1000px){
        flex-direction: row;
        padding: 5em;
        gap: 12em;
    }
    
    h2, h3{
        font-family: Ruberoid;
        padding: 0;
        margin: 0;
    }

    h2{
        font-size: 2em;
        font-weight: 500;

        @media (min-width: 500px){
            font-size: 3.5em;
        }
    }

    h3{
        font-size: 1em;
        font-weight: 400;

        @media (min-width: 500px){
            font-size: 1.8em;
        }
    }

    p{
        width: 30em;
        font-size: .7em;
        line-height: 1.8;

        @media (min-width: 500px){
            font-size: 1em;
        }
    }
`

function Privacy1() {
  return (
    <Container>
        <h2>Privacy Policy</h2>
        <div>
            <h3>Last Revised on January 16, 2023</h3>
            <p>This Privacy Policy for Strange Loop Labs AG (<b>“Company”</b>, <b>“we”</b>, <b>“us”</b>, or <b>“our”</b>) describes how we collect, use, and disclose information about users of the Company’s website (celestia.org) and any other applications, services, tools and features we operate (collectively, the <b>“Services”</b>). For the purposes of this Privacy Policy, <b>“you”</b> and <b>“your”</b> means you as the user of the Services and for the purpose of applicable data protection laws, we are the data controller.</p>
        </div>
    </Container>    
  )
}

export default Privacy1