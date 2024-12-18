import React from 'react'
import styled from 'styled-components'

const Ctn = styled.div`
    padding-top: 8em;
    margin-bottom: 10em;

    h1{
        font-size: 3em;
        line-height: 1;
        font-family: "Ruberoid";
        margin: 0;
        padding: 0;
        margin-top: 1.8em;

        @media (min-width: 768px){
            font-size: 7em;
        }
    }

    p{
        font-family: "Ruberoid";
        font-weight: 500;
        width: 25em;
        font-size: .7em;

        @media (min-width: 768px){
            font-size: 1.1em;
        }
    }
`

function Social1() {
  return (
    <Ctn>
        <h1>Celestia Community</h1>
        <p>Discover community hubs, discussion forums, and resources that are used by the global Celestia community.</p>
    </Ctn>
  )
}

export default Social1