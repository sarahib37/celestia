import React, { useEffect } from 'react'
import styled from 'styled-components'
import Technology1 from './Technology/Technology1'
import Technology2 from './Technology/Technology2'
import Technology3 from './Technology/Technology3'

const Container = styled.section`
    margin-top: 7em;    
`

function Technology() {
    useEffect(() => {
        window.scroll(0,0)
      })

  return (
    <Container>
        <Technology1/>
        <Technology2/>
        <Technology3/>
    </Container>
  )
}

export default Technology