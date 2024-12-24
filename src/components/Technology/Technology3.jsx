import React from 'react'
import TechnologyList from '../../TechnologyList'
import styled from 'styled-components'

const Container = styled.div`
    padding: 0 5em;
    display: flex;
    gap: 3em;
    flex-wrap: wrap;
    width: 73%;
`

const TechContainer = styled.div`
    width: 40%;
    img{
        width: 60%;
    }

    @media (min-width: 1000px){
        width: 28%;
    }

    h3{
        font-size: 1.5em;
        font-family: Ruberoid;
        font-weight: 500;
    }

    p{
        font-size: 1.1em;
        font-weight: 400;
    }
`


function Technology3() {
  return (
    <Container>
        {
            TechnologyList.map((tech) => {
                return (
                    <TechContainer>
                        <img src={tech.image} alt={tech.title}/>
                        <h3>{tech.title}</h3>
                        <p>{tech.description}</p>
                    </TechContainer>
                )
            })
        }
    </Container>
  )
}

export default Technology3