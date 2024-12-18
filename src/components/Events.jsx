import React from 'react'
import styled from 'styled-components'
import Events1 from './Events/Events1'
import Events2 from './Events/Events2'

const Container = styled.section`
    margin-top: 5em;
    padding: 0;
    padding-left: 1em;
    padding-right: 1em;
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3em;

    @media (min-width: 768px){
        padding-left: 5em;
        padding-top: 1em;
    }
`


function Events() {
  return (
    <Container>
        <Events1/>
        <Events2/>
    </Container>
  )
}

export default Events