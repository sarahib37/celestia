import React from 'react'
import LandingPage from './components/LandingPage'
import Heading from './components/Heading'
import Footer from './components/Footer'
import Build from './components/Build'
import Intro from './components/Intro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Scroll from './Scroll'
import styled from 'styled-components'
import RunNode from './components/NodeRun'
import Events from './components/Events'
import Social from './components/Social'

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
        <Route path='/node' element={<RunNode/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/social' element={<Social/>}/>
      </Routes>
      
      <Footer/>
    </Container>
  )
}

export default App