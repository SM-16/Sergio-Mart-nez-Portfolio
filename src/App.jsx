import { useState } from 'react'
import Greeting from './components/greeting'
import OtherSkills from './components/otherSkills'
import Projects from './components/projects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <Greeting/>
      <OtherSkills/>
      <Projects/>
    </div>
  )
}

export default App
