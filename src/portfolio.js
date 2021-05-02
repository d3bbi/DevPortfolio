  
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Deborah Rimei",
  title: emoji("Ciao World 🌍"),
  subTitle: emoji("I'm a Computer Science student aspiring to make an impact as a software developer. "+
  "I am currently working full-time at UPS, but I always find the time to code on my projects. My next step is to find a challanging environment that will value my skills and "+
  " facilitate my technical and professional growth."),
  resumeLink: "https://drive.google.com/file/d/1XMRv-yrN62xVMhj_kKjJ2zpuZYg4QJ4z/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/d3bbi",
  linkedin: "https://www.linkedin.com/in/deborah-rimei/",
  gmail: "de12bbi@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "How I invest my time",
  subTitle: emoji("WHAT I AM CURRENTLY FOCUSING ON"),
  skills: [
    emoji("👩‍💻 Completing a weather chatbot that retrieves weather forecast from the OpenWeather API. The chatbot is implemented using JQuery, Ajax and PHP"),
    emoji("👩‍💻 Building a dynamic website for a childcare institute. Using PHP to manage the different user level access."),
    emoji("👩‍💻 Learning SalesForce and collecting new badges on TrailHead. Currently having 4100 points and 15 badges on the platform."),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Girffith College Dublin",
      logo: require("./assets/images/griffithLogo.jpg"),
      subHeader: "BSc (Hons) Computer Science",
      duration: "September 2019 - April 2023",
      desc: "This BSc (Hons) is a 4-year program designed to equip students with a thorough understanding of the key principles of computer science.",
      PPA: "First year completed with PPA 85%.",
      descBullets: [
        "Object Oriented programming – Java",
        "Web Design - HTML, CSS, JavaScript, PHP",
        "Software Development - Java, GitLab",
        "Relational Databases - MySQL",
        "Computer hardware",
        "System Analysis and Design",        
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java",  //Insert stack or technology you have experience in
      progressPercentage: "65%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "HTML/CSS",
      progressPercentage: "65%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "50%"
    },
    {
      Stack: "ReactJS",
      progressPercentage: "30%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "55%"
    }

  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "d3bbi", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME PROJECTS I WORKED ON",
  projects: [
    {
      title: "Recipes App",
      image: require("./assets/images/recipesApp.png"),
      link: "https://d3bbi.github.io/recipes-app/",
      description: "You don't know what to cook for dinner? Look up recipes with this app. You just need to enter an ingredient in the search bar."+
      "Edemam API used to develope this project.",
      languages: "JAVASCRIPT • HTML • CSS • REACT",
    },
    {
      title: "Shopping List",
      image: require("./assets/images/Grocery.png"),
      link: "https://d3bbi.github.io/ShoppingList/",
      description: "A simple shopping List with basic functionality as enter a new item,strikethrough completed items and delete items.",
      languages: "JAVASCRIPT • HTML • CSS",
    },
    {
      title: "Background Generator",
      image: require("./assets/images/bGenerator.png"),
      link: "https://d3bbi.github.io/Background-generator/",
      description: "This page can come in handy if you need to choose the best colours combinations for the background.",
      languages: "JAVASCRIPT • HTML • CSS",
    },
    {
      title: "My Father, My Hero",
      image: require("./assets/images/MyFatherWebsite.png"),
      link: "https://d3bbi.github.io/MyHeroMyFather/",
      description: "This is the first website I developed during my first year in college."+
      " The site is entirely dedicated to my father, one of the most important figures in my life."+
      " The paragraphs throughout the websites are lorem ipsum for privacy porpuses.",
      languages: "HTML • CSS",
    },

  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        // { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    }
  ]
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+353 858505259",
  email_address: "deborah_rimei@hotmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo };
