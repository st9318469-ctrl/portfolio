import React from 'react'
import Navbar from "./assets/components/Navbar.jsx";
import Home from './assets/components/Home.jsx';
import Skills from "./components/Skills.jsx";
import Project from './assets/components/Project.jsx';
import About from './assets/components/About.jsx';
import ContactMe from './assets/components/contactme.jsx';



const App = () => {
  return (
    <>
       <Navbar />
      <main className="min-h-screen bg-slate-950 pt-24 text-white">
        <section id="home" className="px-6">
          <Home/>
          <Skills/>
          <Project/>
          <About/>
          <ContactMe/>
          

        </section>
      </main>
    </>
  )
}

export default App
