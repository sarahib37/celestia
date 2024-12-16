import React from 'react'
import LandingPage from './components/LandingPage'
import Heading from './components/Heading'
import Footer from './components/Footer'
import Build from './components/Build'
import Intro from './components/Intro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Scroll from './Scroll'
import styled from 'styled-components'

const Container = styled(Router)`
  min-width: 100vw;
`

function App() {
  function handleDeployButton(){
    const target = document.getElementById('deploy')
    if (target){
      target.scrollIntoView({behavior: 'smooth', block:'start'})
    }
  }

  return (
    <Container>
      <Scroll/>
      <Heading/>
      <Routes>
        <Route path='/' element={<LandingPage handleDeploy={handleDeployButton}/>}/>
        <Route path='/what-is-da' element={<Intro/>}/>
        <Route path='/build' element={<Build/>}/>
      </Routes>
      
      <Footer/>
    </Container>
  )
}

export default App