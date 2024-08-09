import Home from './Components/Home'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Contact from './Components/Contact'


export default function App() {
  return (
    <>
      <NavBar />
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </>
  )
}