import './App.css'
import Navbar from './components/Navbar.jsx'
import Project from './components/Project.jsx'
import ExpCard from './components/ExpCard.jsx'

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const projects = [
  {
    title: "Punch Perfect",
    description: ["Pose-Detection boxing game only requiring a webcam", "utilizes MediaPipe.js for real-time pose detection", "Includes game mode such as targets mode, reaction mode, and fruit ninja mode"], 
    skills: ["Javascript", "React", "MediaPipe.js", "Node.js", "Express.js", "Supabase (PostgreSQL)"],
    github: "https://github.com/AaronXu07/CV-Boxing-Game",
    website: 'https://punchperfect.vercel.app/', 
    youtube: null,
  },
  {
    title: "WRO Future Engineers",
    description: ["National and international self-driving RC car competition", "Achieved 1st in Canada and 5th in the World in 2024", "Developed autonomous navigation software of vehicle using Python and OpenCV computer vision", "utilized a PD controller for smooth steering navigation"], 
    skills: ["Python", "OpenCV", "Raspberry Pi"], 
    github: "https://github.com/kylln20/WRO_FE_2023-24",
    website:null, 
    youtube:"https://www.youtube.com/watch?v=WGgbSJJY70c"
  }, 
  {
    title: "2x2 Rubik's Cube Solver",
    description: ["Created a robot using 3D-printed parts to solve a 2x2 Rubik's cube", "implements BFS to find quickest first side and uses Ortega method for the remainer", "Utilizes OpenCV to detect colors of each face", "Implements serial communication for commanding motor movements with the arduino UNO"], 
    skills: ["Python", "OpenCV", "C++", "Arduino"], 
    github: "https://github.com/Brain256/2x2-Solver",
    website: null, 
    youtube: "https://www.youtube.com/shorts/pykEr9slMbM"
  },
  {
    title: "2D Crossy Road",
    description: ["Web Game inspired by Crossy Road from a top down perspective", "Made using the p5 Javascript library for its drawing functionality", "Final project for grade 12 computer science class"], 
    skills: ["P5 Javascript", "HTML", "CSS"], 
    github: "https://github.com/Brain256/2D-Crossy-Road",
    website: "https://2d-crossy-road.vercel.app/",
    youtube: null
  },
  {
    title: "Face Recognition Door Lock",
    description: ["Implemented the ESP32 web server to control a relay unlocking a door lock via face recognition"], 
    skills: ["ESP32", "C++"], 
    github: 'https://github.com/Brain256/Face-Detection-Door-Lock',
    website: null, 
    youtube: "https://www.youtube.com/watch?v=OrecraZhADc"
  },

]

const experiences = [
  {
    company: "UW Orbital",
    position: "Ground Station Software Developer",
    description: ["Contributed towards development of ground station software", "Developed user authentication pages on the Amateur Radio Operator (ARO) Website", "Created a backend configuration manager and fixed issues with the logger middleware"],

  }, 
  {
    company: "Leo Wong's Taekwondo & Krav Maga",
    position: "Assistant Taekwondo Instructor",
    description: ["Taught classes of 40+ students from ages up to 18 years old", "Recieved First Degree Black Belt Certification", "Guided students through learning discipline, skills, forms and techniques"],

  }, 
  {
    company: "Explorer Robotics Club",
    position: "Assistant Python Instructor",
    description: ["Assisted students in small groups to solve programming problems", "Taught basics of syntax, data structures, and algorithsms in Python", "Managed online classes by keeping track of recordings and attendance"],
  }
]

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // blue background
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: { value: "rgb(255, 255, 255)" },
        links: {
          color: "rgb(255,255,255)",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 150,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
      )}

      <div className="page-container">
        

        <div id="nav">
          <Navbar />
        </div>
        <div className="content-container">

          <div id="header"> 
            <div className="text">
              <div className="intro">Hello, I'm Brian Yin</div>
              <div className="intro-sub">
                First Year Computer Science Student at The University Of Waterloo
              </div>
            </div>
          </div>

          <h2>Projects</h2>

          <div id="project-container">
            
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>

          <h2>Experience</h2>

          <div id="exp-container">
            
            {experiences.map((exp, index) => (
              <ExpCard key={index} {...exp}/>
            ))}
          </div>

          <h2>Contact Me</h2>

          <div id="contact-container">
            
            <div className="contact-links">
              <div>
                <a href="https://www.linkedin.com/in/brian-yin-1ab26a223/">
                  <img className="contact-imgs" src="/linkedin.svg" width="40" alt="Linkedin"/>
                </a>
                <div>Brian Yin</div>
              </div>
              <div>
                <a href="https://github.com/Brain256">
                  <img className="contact-imgs" src="/github.svg" width="40" alt="Github"/>
                </a>
                <div>Brain256</div>
              </div>
              <div>
                <img className="contact-imgs" src="/gmail.png" width="50" alt="Email" />
                <div>brianyin256@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
