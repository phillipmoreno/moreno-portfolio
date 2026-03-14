import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer'

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
    <Footer/>
    </>
  )
}

export default App
