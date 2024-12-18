import React, {useEffect} from 'react'
import styled from 'styled-components'
import Node1 from './Node/Node1'
import Node2 from './Node/Node2'
import Node3 from './Node/Node3'
import Node4 from './Node/Node4'

const Container = styled.section`
  display: flex;
  flex-direction: column;
`

function RunNode(){

  useEffect(() => {
    window.scroll(0,0)
  })

  return (
    <Container>
        <Node1/>
        <Node2/>
        <Node3/>
        <Node4/>
    </Container>
  )
}

export default RunNode