import React, { useEffect } from 'react'
import styled from 'styled-components'
import Careers1 from './Careers/Careers1'
import Careers2 from './Careers/Careers2'
import Careers3 from './Careers/Careers3'

const Container = styled.section`
    margin-top: 7em;    
`

function Careers() {
    useEffect(() => {
        window.scroll(0,0)
      })

  return (
    <Container>
        <Careers1/>
        <Careers2/>
        <Careers3/>
    </Container>
  )
}

export default Careers