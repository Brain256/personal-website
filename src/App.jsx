import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Project from './Project.jsx'

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

function App() {

  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className="content-container">

          <div className="header"> 
            <div className="text">
              <div className="intro">Hello, I'm Brian Yin</div>
              <div className="intro-sub">First Year Computer Science Student at The University Of Waterloo</div>
            </div>
          </div>
          
          
          <div className="project-container">
              <h2>Projects</h2>
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
          </div>
        </div>
      </div>
      
      
        
    </>
  )
}

export default App
