
import './App.css'
import Navbar from './components/Navbar.jsx'
import Project from './components/Project.jsx'
import ExpCard from './components/ExpCard.jsx'

const projects = [
  {
    title: "WRO Future Engineers",
    description: "autonomous car competition", 
    skills: "python", 
    img: "src/assets/linkedin.svg",
    link: "https://github.com/kylln20/WRO_FE_2023-24"
  }, 
  {
    title: "Punch Perfect",
    description: "motion detecting boxing game", 
    skills: "python", 
    img: "src/assets/linkedin.svg", 
    link: "https://github.com/AaronXu07/CV-Boxing-Game"
  },
  {
    title: "2D Crossy Road",
    description: "Web Game inspired by Crossy Road from a top down perspective", 
    skills: "python", 
    img: "src/assets/linkedin.svg",
    link: "https://2d-crossy-road.vercel.app/"
  },
  {
    title: "2x2 Rubik's Cube Solver",
    description: "Arduino Robot designed to solve a 2x2 Rubik's Cube", 
    skills: "python", 
    img: "src/assets/linkedin.svg", 
    link: "https://github.com/Brain256/2x2-Solver"
  }
]

const experiences = [
  {
    company: "Leo Wong's Taekwondo & Krav Maga",
    position: "Assistant Taekwondo Instructor",
    description: "blah blah blah"
  }, 
  {
    company: "Explorer Robotics Club",
    position: "Assistant Python Instructor",
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
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/brian-yin-1ab26a223/">
                <img src="src/assets/linkedin.svg" width="50px" height="50px" alt="Linkedin"/>
              </a>
              <div>Brian Yin</div>
              <a href="https://github.com/Brain256">
                <img src="src/assets/github.svg" width="50px" height="50px" alt="Github"/>
              </a>
              <div>Brain256</div>
              <a href="mailto:brianyin256@gmail.com">
                <img src="src/assets/gmail.png" width="50" height="50" alt="Email" />
              </a>
              <div>brianyin256@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      
      
        
    </>
  )
}

export default App
