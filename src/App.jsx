import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function App() {
  const [count, setCount] = useState(0)
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef}></Navbar>
    <div ref={homeRef}>
      <Home scrollToSection={scrollToSection} aboutRef={aboutRef}/>
    </div>
    <div ref={aboutRef} style={{ scrollMarginTop: "80px" }}>
      <About/>
    </div>
    <div ref={projectRef} style={{ scrollMarginTop: "80px" }}>
      <Projects/>
    </div>
    <div ref={contactRef} style={{ scrollMarginTop: "80px"}}>
      <Contact/>
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
