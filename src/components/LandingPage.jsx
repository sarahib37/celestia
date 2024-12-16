import React, {useEffect} from 'react'
import Landing1 from './Landing/Landing1'
import Landing2 from './Landing/Landing2'
import Landing3 from './Landing/Landing3'
import styled from 'styled-components'
import Landing4 from './Landing/Landing4'
import Landing5 from './Landing/Landing5'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7em;
`

function LandingPage({handleDeploy}) {

  useEffect(() => {
    window.scroll(0,0)
  })

  function handleExploreButton(){
    const target = document.getElementById('explore-celestia')
    if (target){
      target.scrollIntoView({behavior: 'smooth', block:'start'})
    }
  }

  return (
    <Container>
        <Landing1 handleButton={handleExploreButton}/>
        <Landing2 handleDeploy={handleDeploy}/>
        <Landing3 id='explore-celestia'/>
        <Landing4/>
        <Landing5/>
    </Container>
  )
}

export default LandingPage