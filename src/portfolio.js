/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import  "./index.css";

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
 

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nitish",
  title: "Hi, I'm Nitish",
  subTitle: emoji(
    "Full Stack Developer 🚀 focused on building secure, scalable, and conversion-driven web applications. Experienced with React, Next.js, TypeScript, NextAuth.js, Node.js, JWT authentication, and payment integrations like Easebuzz."
  ),
  resumeLink: "/Nitish_Resume.pdf",
  displayGreeting: true
};

// Social Media 


const socialMediaLinks = {
  github: "https://github.com/NITISH03061999",
  linkedin: "www.linkedin.com/in/nitish-dhaka-7b3902162",
  gmail: "nitishdhaka162@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER with MERN STACK FOCUSED ON SCALABLE AND SECURE WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build high-performance, SEO-optimized websites for travel, visa, and business platforms"
    ),
    emoji(
      "⚡ Develop modern, responsive Frontend UI/UX using React, Next.js, and advanced design systems"
    ),
    emoji(
      "⚡ Create scalable backend systems with REST APIs, authentication, and secure data handling"
    ),
    emoji(
      "⚡ Implement secure authentication using NextAuth.js, JWT, and password hashing with bcrypt"
    ),
    emoji(
      "⚡ Integrate third-party services like payment gateways (Easebuzz), Firebase, and hosting platforms (Hostinger)"
    ),
    emoji(
      "⚡ Optimize websites for performance, conversions, and search engine ranking (SEO + Core Web Vitals)"
    )
  ],

  softwareSkills: [
      {
      skillName: "NextJS",
      fontAwesomeClassname: "fab fa-react"
    },
     {
      skillName: "Nextauth",
      fontAwesomeClassname: "fas fa-user-lock"
    },
     {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code" // best match icon
    },                    
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
    skillName: "Tailwind CSS",
    fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
        {
      skillName: "BcryptJS",
      fontAwesomeClassname: "fas fa-lock" // best match icon
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
  
    {
      skillName: "Mongoose",
      fontAwesomeClassname: "fas fa-database" // best match icon
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
   
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Panipat Institute of Engineering & Technology",
      logo: require("./assets/images/piet.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2020 - September 2023",
      desc: "Completed Bachelors in Computer Science. Learnt various skills such as DBMS, C++, MERN Stack etc.",
     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },


    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section




const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Sanram Travels Pvt Ltd",
     companylogo: require("./assets/images/sanramlogo.png"),
      date: "June 2025 – Present",
      desc: "Develop, maintain, and enhance company websites and web applications. Collaborate with cross-functional teams to gather requirements and implement new features. Ensure website performance, security, and responsiveness across various devices and browsers.",
  
    },
    {
      role: "Web Developer",
      company: "Frusome|MAK Foods",
      companylogo: require("./assets/images/2025-01-10.png"),
      date: "March 2024 – June 2025",
      desc: "Designed and developed a responsive and high-performance website for Frusome using React, Vite, and Tailwind CSS. Integrated React Router DOM for seamless navigation and multi-page architecture."
    },
    {
      role: "Web Developer Intern",
      company: "Techmind Softwares",
      companylogo: require("./assets/images/techmind.png"),
      date: "Sep 2023 – March 2024",
      desc: "React JS, Mongo DB, Bootstrap, REST API, JWT, Thunder Client, Bcrypt.JS, Mongoose.     	Developed a full-stack application handling core functionalities such as API creation, business logic implementation, and database management."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/sanramlogo.png"),
      projectName: "Sanram Travels ",
  projectDesc: `
 The platform features a fully responsive UI with optimized performance using server-side rendering (SSR) and dynamic routing. Implemented secure authentication using NextAuth.js with JSON Web Tokens for session management, along with password encryption using bcryptjs to ensure data security.

Integrated RESTful APIs for dynamic content handling and built modular, reusable components to maintain scalability and clean architecture. The application also includes form handling, validation, and lead management features tailored for travel business needs.
`,

      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.sanramtravels.com/search"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/2025-01-10.png"),
      projectName: "Fruesome",
 projectDesc: `
 Built a modern, responsive fruit-cream eCommerce website using React, Vite, and Tailwind CSS, delivering fast load performance and a seamless user experience across devices.

Implemented dynamic client-side routing using React Router to enable smooth navigation without page reloads. Enhanced UI/UX with smooth scrolling and interactive animations using React Scroll and Framer Motion.

Integrated secure authentication and user data handling using JSON Web Tokens for session management and bcryptjs for password encryption. Implemented robust form validation to ensure data integrity and improve user input accuracy.

Structured the application with reusable components and clean architecture, focusing on performance optimization, scalability, and maintainability.
`,

      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.frusome.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [{}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a job? My Inbox is open for all.",
  number: "+91-8813928508",
  email_address: "nitishdhaka162@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,

  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
