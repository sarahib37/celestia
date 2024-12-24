import React, { useEffect } from 'react'
import styled from 'styled-components'
import SocialBG from '../assets/CommunityBG.webp'
import Social1 from './Social/Social1'
import Social2 from './Social/Social2'
import Social3 from './Social/Social3'
import Social4 from './Social/Social4'

const Container = styled.section`
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 12em;

    @media (min-width: 768px){
        padding: 6em;
        padding-right: 9em;
        gap: 8em;
        margin-top: 0;
    }

    &:before{
        background: url(${SocialBG}) no-repeat;
        background-size: 100%;
        background-position: top center;
        content: "";
        height: 100%;
        left: -5%;
        position: absolute;
        top: 15%;
        right: 20%;
        width: 100%;
        z-index: -1;

        @media (min-width: 1000px){
            background-size: 40%;
            background-position: top right;
            top: 30%;
        }
    }
`

function Social() {
    useEffect(() => {
        window.scroll(0,0)
      })
  
    return (
    <Container>
        <Social1/>
        <Social2/>
        <Social3/> 
        <Social4/>
    </Container>
  )
}

export default Social