import React, { useEffect } from 'react'
import styled from 'styled-components'
import Privacy1 from './Privacy/Privacy1'
import Privacy2 from './Privacy/Privacy2'

const Container = styled.section`
    margin-top: 7em;    
`

function Privacy() {

    useEffect(() => {
        window.scroll(0,0)
      })

  return (
    <Container>
        <Privacy1/>
        <Privacy2/>
    </Container>
  )
}

export default Privacy