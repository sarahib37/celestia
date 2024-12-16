import React, { useEffect } from 'react'
import Build1 from './Build/Build1'
import Build2 from './Build/Build2'
import Build3 from './Build/Build3'
import Build4 from './Build/Build4'
import Build5 from './Build/Build5'

function Build() {

  useEffect(() => {
    window.scroll(0,0)
  })

  return (
    <div>
        <Build1/>
        <Build2/>
        <Build3/>
        <Build4 id='deploy'/>
        <Build5/>
    </div>
  )
}

export default Build