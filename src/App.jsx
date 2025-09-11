import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Project from './components/Project.jsx'
import ExpCard from './components/ExpCard.jsx'

const projects = [
  {
    title: "WRO Future Engineers",
    description: "funny rc car", 
    skills: "python", 
    img: "N/A"
  }, 
  {
    title: "WRO Future Engineers",
    description: "funny rc car", 
    skills: "python", 
    img: "N/A"
  }
]

const experiences = [
  {
    company: "Temp",
    position: "Software Engineer",
    description: "blah blah blah"
  }, 
  {
    company: "Temp",
    position: "Software Engineer",
    description: "blah blah blah"
  }
]
function App() {

  return (
    <>
      <div className="page-container">
        <div id="nav">
          <Navbar />
        </div>
        <div className="content-container">

          <div id="header"> 
            <div className="text">
              <div className="intro">Hello, I'm Brian Yin</div>
              <div className="intro-sub">First Year Computer Science Student at The University Of Waterloo</div>
            </div>
          </div>
          
          
          <div id="project-container">
              <h2>Projects</h2>
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
          </div>

          <div id="exp-container">
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
              <ExpCard key={index} {...exp}/>
            ))}
          </div>

          <div id="contact-container">
            <h2>Contact</h2>
          </div>
        </div>
      </div>
      
      
        
    </>
  )
}

export default App
