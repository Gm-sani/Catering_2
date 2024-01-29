import React from "react"
import Navbar from "./Component/Navbar"
import Welcome from "./Component/Welcome"
import About from "./Component/About"
import Menu from "./Component/Menu"
import { Route, Routes } from "react-router-dom"
import Contact from "./Component/Contact"



function App() {

  return (
    <>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Welcome/>}/>
    <Route path="about"  element={<About/>}/>
    <Route path="menu" element={ <Menu/>} />
    <Route path="cont" element={ <Contact/>} />
  </Routes>

 {/* <Welcome/>
 <About/>
  <Menu/>*/}
    </>
  )
}

export default App
