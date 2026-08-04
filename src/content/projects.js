/** @type {import('./types').Project[]} */
export const projects = [
  {
    title: 'Conduit',
    year: '2026',
    category: 'software',
    blurb:
      'A distributed load testing simulation including a c++ load balancer, go distributed testing platform, and a React web dashboard',
    highlights: [
      'Layer 4 TCP load balancer built with C++ and raw socket library',
      'go testing agent tracking load balancer performance',
      'React dashboard receiving test results from the load tester via websockets',
    ],
    tech: ['C++', 'Golang', 'React', 'Typescript'],
    links: {
      github: 'https://github.com/Brain256/conduit',
    },
    featured: true,
  },
  {
    title: 'AI expense tracking pipeline',
    year: '2026',
    category: 'software',
    blurb:
      'An AI pipeline tracking and classifying expenses via Google Wallet transaction notifications',
    highlights: [
      'Kotlin android service reading and forwarding transaction notifications',
      'FastAPI ingestion server classifying a transaction via a groq API call and saving the data within Supabase',
      'Next.js dashboard displaying expense data from supabase over time',
    ],
    tech: ['Next.js', 'FastAPI', 'Kotlin', 'Supabase'],
    links: {
      github: 'https://github.com/Brain256/Smart-Finance-Tracker',
    },
    featured: true,
  },
  {
    title: 'Punch Perfect',
    year: '2025',
    category: 'software',
    blurb:
      'A boxing game you play with your webcam and no controller. It reads your pose in real time, so the only equipment is a laptop and enough room to swing.',
    highlights: [
      'Real-time pose detection with MediaPipe.js',
      'Targets, reaction, and fruit-ninja game modes',
      'Scores and leaderboards backed by Supabase',
    ],
    tech: ['JavaScript', 'React', 'MediaPipe.js', 'Node.js', 'Express', 'Supabase'],
    links: {
      github: 'https://github.com/AaronXu07/CV-Boxing-Game',
      live: 'https://punchperfect.vercel.app/',
    },
    featured: true,
  },
  {
    title: 'WRO Future Engineers',
    year: '2024',
    category: 'hardware',
    blurb:
      'A self-driving RC car for the World Robot Olympiad. Placed 1st in Canada and 5th in the world.',
    highlights: [
      'Autonomous navigation in Python with OpenCV for lane and obstacle detection',
      'PD controller for steering',
      'Ran on a Raspberry Pi with everything onboard',
    ],
    tech: ['Python', 'OpenCV', 'Raspberry Pi'],
    links: {
      github: 'https://github.com/kylln20/WRO_FE_2023-24',
      youtube: 'https://www.youtube.com/watch?v=WGgbSJJY70c',
    },
    featured: true,
  },
  {
    title: "2x2 Rubik's Cube Solver",
    year: '2024',
    category: 'hardware',
    blurb:
      "A 3D-printed robot that looks at a scrambled 2x2 cube and solves it. Reading the colours reliably turned out to be harder than the solving.",
    tech: ['Python', 'OpenCV', 'C++', 'Arduino'],
    links: {
      github: 'https://github.com/Brain256/2x2-Solver',
      youtube: 'https://www.youtube.com/shorts/pykEr9slMbM',
    },
  },
  {
    title: '2D Crossy Road',
    year: '2023',
    category: 'software',
    blurb:
      'A top-down take on Crossy Road, drawn entirely with p5.js. Final project for grade 12 computer science.',
    tech: ['JavaScript', 'p5.js', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/Brain256/2D-Crossy-Road',
      live: 'https://2d-crossy-road.vercel.app/',
    },
  },
  {
    title: 'Face Recognition Door Lock',
    year: '2023',
    category: 'hardware',
    blurb:
      'An ESP32 web server that drives a relay to unlock a door when it recognizes your face.',
    tech: ['ESP32', 'C++'],
    links: {
      github: 'https://github.com/Brain256/Face-Detection-Door-Lock',
      youtube: 'https://www.youtube.com/watch?v=OrecraZhADc',
    },
  },
]
