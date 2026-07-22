import React from 'react'
import Navbar from "./assets/components/Navbar.jsx";
import Home from './assets/components/Home.jsx';
import Skills from "./assets/Skills.jsx";
import Project from './assets/components/project.jsx';
import About from './assets/components/About.jsx';
import ContactMe from './assets/components/contactme.jsx';



const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
        <Home/>
        <About/>
        <Project/>
        <Skills/>
        <ContactMe/>
      </main>
    </>
  )
}

export default App
