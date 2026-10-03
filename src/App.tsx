import './App.css'
import ClickSpark from './components/ClickSpark'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Testimonials from './pages/Testimonials'

function App() {

  return (
    <div className='relative container m-auto'>
      <ClickSpark
  sparkColor="#000000"
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={500}
>
     <Home/>
     <About/>
     <Projects/>
     <Skills/>
     <Education/>
     <Testimonials/>
     <Services/>
     <Contact/>
     </ClickSpark>
    </div>
  )
}

export default App
