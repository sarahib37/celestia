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

function Terms1() {
  return (
    <Container>
        <h2>Terms of Service</h2>
        <div>
            <h3>Last Revised on January 16, 2023</h3>
            <p>Welcome to the Terms of Service (these “Terms”) for the Celestia website and documentation accessible at https://celestia.org/ (the “Website”) as operated on behalf of Strange Loop Labs AG (“Company”, “we”, or “us”). The Website and any content, documentation, tools, features and functionality offered on or through our Website are collectively referred to as the “Services”.</p>
        </div>
    </Container>    
  )
}

export default Terms1