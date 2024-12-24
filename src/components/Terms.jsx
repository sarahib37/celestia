import React, { useEffect } from 'react'
import Terms1 from './Terms/Terms1'
import styled from 'styled-components'
import Terms2 from './Terms/Terms2'

const Container = styled.section`
    margin-top: 7em;    
`

function Terms() {
    useEffect(() => {
        window.scroll(0,0)
      })

  return (
    <Container>
        <Terms1/>
        <Terms2/>
    </Container>
  )
}

export default Terms