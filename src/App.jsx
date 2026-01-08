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
    youtube: "https://www.youtube.com/watch?v=OrecraZhADc",
    compact: true
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

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ids = ['about', 'projects', 'career'];
    let current = window.location.hash.replace('#', '') || '';

    const getOffsets = () =>
      ids.map((id) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.offsetTop : Number.POSITIVE_INFINITY };
      });

    let offsets = getOffsets();

    const recalc = () => {
      offsets = getOffsets();
    };

    let ticking = false;

    const update = () => {
      ticking = false;
      const lock = window.__hashLock;
      if (lock && Date.now() < lock.until) {
        // Keep the URL locked to the clicked target during programmatic scroll
        const target = lock.target;
        if (target && window.location.hash !== `#${target}`) {
          const url = `${window.location.pathname}${window.location.search}#${target}`;
          history.replaceState(null, '', url);
        }
        return;
      }
      const band = window.scrollY + window.innerHeight * 0.3;
      let active = ids[0];

      for (const { id, top } of offsets) {
        if (top <= band) active = id;
      }

      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 1) {
        active = ids[ids.length - 1];
      }

      if (active && active !== current) {
        current = active;
        const url = `${window.location.pathname}${window.location.search}#${active}`;
        history.replaceState(null, '', url);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      recalc();
      update();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

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

          <div id="about"> 
            <div className="hero-card">
              <div className="text">
                <div className="intro">Hello, I'm</div>
                <h1 className="hero-name"><span className="name-gradient">Brian Yin</span></h1>
                <div className="intro-sub">
                  1st Year CS @ The University of Waterloo
                </div>
              </div>
              <div id="contact-container" className="reveal" style={{transitionDelay: '120ms'}}>
                <div className="contact-links">
                  <div className="contact-item">
                    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/brian-yin-1ab26a223/" target="_blank" rel="noreferrer noopener">
                      <img className="contact-imgs" src="/hero-icons/icons8-linkedin-30.png" width="40" alt="LinkedIn"/>
                    </a>
                    <div>LinkedIn</div>
                  </div>
                   <div className="contact-item">
                    <a aria-label="Email" href="mailto:brianyin256@gmail.com" title="brianyin256@gmail.com">
                      <img className="contact-imgs" src="/hero-icons/icons8-email-50.png" width="40" alt="Email" />
                    </a>
                    <div>Email</div>
                  </div>
                  <div className="contact-item">
                    <a aria-label="GitHub" href="https://github.com/Brain256" target="_blank" rel="noreferrer noopener">
                      <img className="contact-imgs" src="/hero-icons/icons8-github-30.png" width="40" alt="GitHub"/>
                    </a>
                    <div>GitHub</div>
                  </div>
                </div>
              </div>
              <div className="info-placeholders">
                <a
                  className="chip icon"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Resume (PDF)"
                  title="Resume (PDF)"
                >
                  <img src="/hero-icons/icons8-resume-50.png" alt="Resume" />
                  Resume
                </a>
                <span className="chip icon" title="Phone">
                  <img src="/hero-icons/icons8-phone-50.png" alt="Phone" />
                  +1 437-340-8960
                </span>
                <span className="chip icon" title="location">
                  <img src="/hero-icons/icons8-location-50.png" alt="Location" />
                  Waterloo, ON
                </span>
              </div>
            </div>
          </div>

          <h2 className="reveal">Projects</h2>

          <div id="projects">
            
            {projects.map((project, index) => (
              <div key={index} className={`reveal tile ${project.compact ? 'compact' : ''}`} style={{ transitionDelay: `${index * 80}ms` }}>
                <Project {...project} compact={project.compact} />
              </div>
            ))}
          </div>

          <h2 className="reveal">Experience</h2>

          <div id="career">
            
            {experiences.map((exp, index) => (
              <div key={index} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                <ExpCard {...exp}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
