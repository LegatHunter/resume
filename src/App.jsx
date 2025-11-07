import "./App.sass"
import Menu from "./Components/Menu/Menu.jsx"
import Aside from "./Components/Aside/Aside.jsx"
import Main from "./Components/Main/Main.jsx"
import Home from "./Components/Main/Home/Home.jsx"
import About from "./Components/Main/About/About.jsx"
import Works from "./Components/Main/Works/Works.jsx"
import Contact from "./Components/Main/Contact/Contact.jsx"

export default function App() {
  return (
    <>
      <Menu />
      <Main>
        <Home />
        <About />
        <Works></Works>
        <Contact />
      </Main>
      <Aside />
    </>
  )
}
