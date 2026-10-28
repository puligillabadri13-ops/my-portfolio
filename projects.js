/**
 * ==============================================================================
 * Badri Puligilla - Portfolio Configuration & Data File
 * ==============================================================================
 * Edit this file to update your personal details, skills, projects, certificates,
 * and social links without needing to modify the HTML structure.
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // 1. Personal & Academic Information
  personal: {
    fullName: "Badri Puligilla",
    shortName: "Badri",
    initials: "BP",
    degree: "B.Tech",
    branch: "Computer Science and Engineering (Data Science) — CSE (DS)",
    level: "First-year B.Tech Student",
    institution: "Malla Reddy Deemed to be University",
    collegeEmail: "26HEU08R160@mrdu.edu.in",
    githubUrl: "https://github.com/puligillabadri13-ops",
    linkedinUrl: "https://www.linkedin.com/in/puligilla-badri-34a9a9416",
    
    // Typing animation phrases on the Hero banner
    typingPhrases: [
      "Python Learner",
      "Aspiring Developer",
      "B.Tech CSE (DS) Student",
      "Future Data Science Professional"
    ],
    
    // Official About Me narrative
    aboutNarrative: `Hi, I'm Badri Puligilla, a first-year B.Tech CSE (Data Science) student at Malla Reddy Deemed to be University. I'm learning Python and web development using HTML and CSS, and I enjoy building simple, useful projects that solve everyday problems. I'm interested in beginner-friendly internship programs, practical learning experiences, and opportunities to improve my programming skills. I'm continuously working on strengthening my technical knowledge and building projects that demonstrate my progress.`,
    
    // Highlights for the About Cards
    aboutCards: [
      {
        icon: "fa-graduation-cap",
        title: "Degree Program",
        value: "B.Tech",
        subtitle: "First-Year Undergraduate"
      },
      {
        icon: "fa-database",
        title: "Specialization",
        value: "CSE (Data Science)",
        subtitle: "Focus on AI & Analytics Foundations"
      },
      {
        icon: "fa-university",
        title: "Institution",
        value: "Malla Reddy Deemed to be University",
        subtitle: "Hyderabad, India"
      },
      {
        icon: "fa-laptop-code",
        title: "Current Focus",
        value: "Python & Web Development",
        subtitle: "HTML5, CSS3, Problem Solving"
      },
      {
        icon: "fa-bullseye",
        title: "Career Goal",
        value: "Practical Learning & Internships",
        subtitle: "Hands-on experience & mentorship"
      }
    ]
  },

  // 2. Technical Skills Configuration
  skills: [
    {
      id: "python",
      name: "Python",
      category: "Programming",
      status: "Learning & Practicing",
      badgeColor: "blue",
      description: "Learning Python programming fundamentals, problem-solving, functions, loops, data structures, and beginner-level program development.",
      highlights: ["Syntax & Logic", "Functions & Loops", "Data Structures", "Problem Solving"],
      iconSvg: `
        <svg viewBox="0 0 128 128" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M63.4 3.1c-15.6 0-25 6.8-25 19.8v10.3h25.4v3.4H24.3C8.7 36.6 0 46 0 61.6c0 15.6 8.7 25 24.3 25h7v-12.2c0-11.6 9.8-21 21.4-21h25.5c4.7 0 8.4-3.8 8.4-8.5V22.9c0-13-11.8-19.8-23.2-19.8zm-13.6 7.7a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4z" fill="url(#python-grad-1)"/>
          <path d="M64.6 124.9c15.6 0 25-6.8 25-19.8V94.8H64.2v-3.4h39.5c15.6 0 24.3-9.4 24.3-25 0-15.6-8.7-25-24.3-25h-7v12.2c0 11.6-9.8 21-21.4 21H49.8c-4.7 0-8.4 3.8-8.4 8.5v22c0 13 11.8 19.8 23.2 19.8zm13.6-7.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4z" fill="url(#python-grad-2)"/>
          <defs>
            <linearGradient id="python-grad-1" x1="10" y1="5" x2="70" y2="60" gradientUnits="userSpaceOnUse">
              <stop stop-color="#38bdf8"/>
              <stop offset="1" stop-color="#2563eb"/>
            </linearGradient>
            <linearGradient id="python-grad-2" x1="118" y1="123" x2="58" y2="68" gradientUnits="userSpaceOnUse">
              <stop stop-color="#facc15"/>
              <stop offset="1" stop-color="#ca8a04"/>
            </linearGradient>
          </defs>
        </svg>
      `
    },
    {
      id: "html",
      name: "HTML5",
      category: "Frontend Structure",
      status: "Learning & Building",
      badgeColor: "orange",
      description: "Learning to structure web pages using HTML elements and semantic layouts.",
      highlights: ["Semantic Elements", "Forms & Validation", "DOM Structure", "Accessibility"],
      iconSvg: `
        <svg viewBox="0 0 128 128" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.7 115.8L7.9 0h112.2l-11.8 115.8L64 128l-44.3-12.2z" fill="#E34F26"/>
          <path d="M64 117.3l34.4-9.5 9.5-93.5H64v103z" fill="#EF652A"/>
          <path d="M64 52.8H47.1l-1.2-13.2H64V26.4H31.7l3.6 40.1H64V52.8zm0 37.3l-18.4-5-1.2-13.1H31.2l2.3 26 30.5 8.5v-16.4z" fill="#ECECEC"/>
          <path d="M64 52.8h16.9l-1.6 17.8-15.3 4.1v13.7l27.5-7.6 3.6-41.2H64v13.2zm0-26.4v13.2h32.3l1.2-13.2H64z" fill="#fff"/>
        </svg>
      `
    },
    {
      id: "css",
      name: "CSS3",
      category: "Styling & Design",
      status: "Learning & Styling",
      badgeColor: "purple",
      description: "Learning webpage styling, responsive layouts, animations, transitions, and modern visual design.",
      highlights: ["Flexbox & Grid", "Responsive Design", "Transitions & Keyframes", "Glassmorphism UI"],
      iconSvg: `
        <svg viewBox="0 0 128 128" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.7 115.8L7.9 0h112.2l-11.8 115.8L64 128l-44.3-12.2z" fill="#1572B6"/>
          <path d="M64 117.3l34.4-9.5 9.5-93.5H64v103z" fill="#33A9DC"/>
          <path d="M64 52.8H47.1l-1.2-13.2H64V26.4H31.7l3.6 40.1H64V52.8zm0 37.3l-18.4-5-1.2-13.1H31.2l2.3 26 30.5 8.5v-16.4z" fill="#ECECEC"/>
          <path d="M64 26.4v13.2h32.3l-1.2 13.2H64v13.2h17l-1.6 17.8-15.4 4.1v13.7l27.5-7.6 3.6-41.2.3-3.6 1-10.8H64z" fill="#fff"/>
        </svg>
      `
    }
  ],

  // Currently Learning / Exploring Badges
  currentlyLearning: [
    { title: "Data Structures in Python", icon: "fa-code-branch" },
    { title: "Git & GitHub Version Control", icon: "fa-git-alt" },
    { title: "JavaScript Fundamentals", icon: "fa-brands fa-js" },
    { title: "Foundations of Data Science", icon: "fa-chart-pie" }
  ],

  // 3. Projects Configuration
  // --------------------------------------------------------------------------
  // INSTRUCTIONS TO UPDATE PROJECT LINKS:
  // - Replace "YOUR_STUDY_PLANNER_PROJECT_URL" with your live deployment URL
  //   (e.g., "https://puligillabadri13-ops.github.io/study-planner")
  // - Replace "YOUR_SIH_PROJECT_URL" with your live project/presentation URL
  // - Add githubUrl if you have a public repository link
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "student-study-planner",
      title: "Student Study Planner & Task Manager",
      status: "Student Project",
      statusClass: "status-active",
      description: "A student-focused productivity web application designed to help students organise daily academic work, track coding practice, monitor task progress, and manage reminders. It aims to make daily study routines more organised and consistent.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      
      // PROJECT URLS:
      // Edit liveUrl and githubUrl below.
      // If kept as placeholder or empty, the site displays a friendly "Link Coming Soon" notice.
      liveUrl: "YOUR_STUDY_PLANNER_PROJECT_URL",
      githubUrl: "",
      
      // Aesthetic SVG illustration rendered cleanly if no external image file is provided
      visualType: "planner-illustration",
      keyPoints: [
        "Daily academic schedule tracker",
        "Coding practice milestone monitor",
        "Task prioritization & reminder system",
        "Clean, distraction-free interface"
      ]
    },
    {
      id: "sih-2026-runtime-rebels",
      title: "SIH 2026 – RUNTIME REBELS",
      status: "Hackathon Concept",
      statusClass: "status-hackathon",
      description: "A Smart Education project concept focused on creating a digital platform where societal challenges can be shared and students, universities, and industry partners can collaborate to develop solutions.",
      
      // Specific Hackathon Meta details
      teamName: "RUNTIME REBELS",
      theme: "Smart Education",
      problemStatementId: "SIH26043",
      focus: "Collaborative problem-solving and university-industry partnerships",
      
      technologies: ["Smart Education", "Collaborative Platform", "Web Concept", "Data Science Ready"],
      
      // PROJECT URLS:
      liveUrl: "YOUR_SIH_PROJECT_URL",
      githubUrl: "",
      
      visualType: "sih-illustration",
      keyPoints: [
        "Theme: Smart Education (SIH26043)",
        "Team: RUNTIME REBELS",
        "University & Industry partnership bridge",
        "Societal challenge solution incubator"
      ]
    }
  ],

  // 4. Certificates & Achievements Configuration
  // --------------------------------------------------------------------------
  // INSTRUCTIONS TO UPDATE CERTIFICATES:
  // - Set certificateUrl to your certificate credential link or file path if available
  // - Leave certificateUrl empty or placeholder to display "Participation / Learning"
  // --------------------------------------------------------------------------
  certificates: [
    {
      id: "cert-python",
      title: "Python Course",
      category: "Programming Coursework",
      statusBadge: "Foundations Completed",
      description: "Completed or participated in a Python learning course focused on programming fundamentals and building a foundation for further practice.",
      icon: "fa-brands fa-python",
      accent: "cyan",
      certificateUrl: "" // Leave empty or add your certificate URL here
    },
    {
      id: "cert-denovate",
      title: "Denovate Event Participation",
      category: "Innovation & Tech Event",
      statusBadge: "Event Participant",
      description: "Participation in the Denovate event, representing an opportunity to explore innovation, technical ideas, and collaborative learning.",
      icon: "fa-lightbulb",
      accent: "purple",
      certificateUrl: "" // Leave empty or add your event URL here
    },
    {
      id: "cert-data-science",
      title: "Introduction to Basic Data Science",
      category: "Foundational Learning",
      statusBadge: "Core Concepts",
      description: "An introductory learning experience covering foundational data science concepts and helping build an understanding of the field.",
      icon: "fa-chart-network",
      accent: "blue",
      certificateUrl: "" // Leave empty or add your certificate URL here
    }
  ],

  // 5. Internship & Learning Opportunities
  opportunities: {
    heading: "Open to Learning Opportunities",
    description: "As a first-year B.Tech CSE (Data Science) student, I'm looking for beginner-friendly internships, Python training opportunities, and practical projects that help me develop my programming and web development skills. I'm eager to learn from experienced developers, contribute to meaningful projects, and grow through hands-on experience.",
    cards: [
      {
        title: "Python Internships",
        icon: "fa-brands fa-python",
        description: "Entry-level roles or training programs to practice Python programming, automation scripts, and problem-solving."
      },
      {
        title: "Beginner Web Development Internships",
        icon: "fa-code",
        description: "Opportunities to build clean, responsive frontends using HTML5, CSS3, and beginner JavaScript."
      },
      {
        title: "Student Projects",
        icon: "fa-diagram-project",
        description: "Hands-on academic and collaborative projects addressing real challenges with practical code."
      },
      {
        title: "Technical Learning Programs",
        icon: "fa-graduation-cap",
        description: "Structured mentorship, bootcamps, workshops, and guidance from experienced software professionals."
      },
      {
        title: "Collaborative Opportunities",
        icon: "fa-users-gear",
        description: "Team hackathons, open-source beginner issues, and peer study groups solving real problems."
      }
    ]
  }
};

// Freeze the configuration to prevent accidental mutations in runtime
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_DATA);
}
