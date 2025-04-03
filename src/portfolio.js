
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 9000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Prathmesh Gangarde",
  title: "Hi all, I'm Prathmesh",
  subTitle: (
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
     "https://drive.google.com/file/d/10WArwwqh7sJiJhhaaArzllpj7L5rlUsQ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pratham643",
  linkedin: "https://www.linkedin.com/in/pratham643/",
  gmail: "gangardepatil643@gmail.com",
  gitlab: "https://gitlab.com/Prathmesh_Ramesh_Gangarde",
  facebook: "https://www.facebook.com/pratham643.1",
  medium: "https://medium.com/@pratham643",
  stackoverflow: "https://stackoverflow.com/users/22854582/prathmesh-gangarde",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KIIT University",
      logo: require("./assets/images/kiitlogo.webp"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2022 -  Present",
      desc: "Currently Pursuing.",
      descBullets: [
        "Pursued BTech in Computer Science and Engineering, gaining a strong foundation in programming, algorithms, data structures, and software development.",
        "Engaged in hands-on projects, coursework, and technical training to develop problem-solving and technical skills relevant to the IT industry"
      ]
    },
    {
      schoolName: "NESK",
      logo: require("./assets/images/nesklogo.webp"),
      subHeader: "Intermediate",
      duration: "June 2020 - March 2022",
      desc: "Completed Higher Secondary Education with a focus on PCMB (Physics, Chemistry, Mathematics, Biology), building a strong foundation in science and analytical thinking",
      descBullets: ["Actively participated in academic projects and extracurricular activities, enhancing problem-solving and time-management skills."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
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
      role: "Software Testing",
      company: "RSL Solution PVT LTD",
      companylogo: require("./assets/images/RSLlogo.webp"),
      date: "May 2024 – July 2024",
      desc: "Completed an internship in software testing, gaining hands-on experience in test case design, execution, and defect tracking to ensure software quality.",
      descBullets: [
        "Designed and executed test cases, identified bugs, and ensured software quality through functional and regression testing.",
        "Collaborated with cross-functional teams to analyze requirements, report defects, and contribute to the software development lifecycle."
      ]
    },
   
    {
      role: "Web Developer Intern",
      company: "LetsGrowMore",
      companylogo: require("./assets/images/letsgrowlogo.webp"),
      date: "Jan 2022 – Sep 2022",
      desc: "Completed a web development internship, gaining hands-on experience in designing, developing, and maintaining responsive websites using HTML, CSS, JavaScript, and frameworks like React. Collaborated with teams to implement user-friendly interfaces, optimize website performance, and troubleshoot issues. Enhanced skills in front-end and back-end development while contributing to real-world projects."
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
  subtitle: "ENVISIONED AND CONCEPTUALIZED TECH SOLUTIONS FOR STARTUPS AND COMPANIES TO KICKSTART THEIR INNOVATIVE JOURNEYS.",
  projects: [
    {
      image: require("./assets/images/wedcard.webp"),
      projectName: "WedCard",
      projectDesc: "Wedcard offers customized graphic design solutions, blending AI and human expertise to create tailored designs that meet unique customer requirements. It simplifies the design process, delivering personalized and creative visuals for various needs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://wedcard.rf.gd/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/javaempire.webp"),
      projectName: "JavaEmpire Developers",
      projectDesc: "JavaEmpire Developers is a small startup specializing in web and app development, delivering innovative and customized digital solutions to meet client needs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://javaempire.vercel.app/"
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

  achievementsCards: [
    {
      title: "Smart India Hackathon Finalist",
      subtitle:
        "selected as developing RTN.",
      image: require("./assets/images/SIH-Logo.webp"),
      imageAlt: "SIH Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://alumniapi.mic.gov.in/api/certificatess/14700/64716"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/18VZMNPDk0oTx3G6peyCBcqJqMsw10gaK/view?usp=sharing"
        },
        {
          name: "SIH 2024",
          url: "https://sih.gov.in/sih2024"
        }
      ]
    },
    {
      title: "FedEx Smart Hackathon",
      subtitle:
        "Developed a dynamic routing system to optimize fuel efficiency and ensure smooth, timely parcel delivery.",
      image: require("./assets/images/fedex.webp"),
      imageAlt: "FedEx Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1I2nZPyvYCVpPw_waGh2bcHoRW2cApTen/view?usp=sharing"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@pratham643/https-devswag-io-ae0350d8c585",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@pratham643",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
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
      subtitle: "Codelab at GDG DevFest Pune 2012",
      slides_url: "https://bit.ly/pratham643",
      event_url: "https://www.facebook.com/pratham643.1"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "ALL ABOUT MYSELF, WEB-DEVELOPMENT AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/Take-Your-Career-From-Accidental-to-Intentional-e2gc46j/a-ab0rp4s"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9322985002",
  email_address: "gangardepatil643@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Pratham643_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
