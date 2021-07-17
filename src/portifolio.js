import emoji from 'react-easy-emoji';

const illustration = {
    animated: true
};

const greeting = {
    username: "Dorcis Kirigha",
    title: "Hi all, I'm Dorcis",
    subTitle: emoji(
        "A passionate Front-End Software Developer 🚀 having an experience of designing and building web applications with Javascript / ReactJs / NodeJs and some other cool libraries and frameworks."
    ),
    resumeLink: "https://docs.google.com/document/d/1VcFxKn3f--HAOLElt4BV7x7jEi_OBDE6AIM2cGnNXZw/edit?usp=sharing",
    displayGreeting: true
};

const socialMediaLinks = {
    github: "https://github.com/sammykirigha",
    linkedin: "https://www.linkedin.com/in/samuel-kirigha-2b25531a6/",
    gmail: "dkirigha18@gmail.com",
    facebook: "https://www.facebook.com/sammy.kirigha.33/",
    instagram: 'https://www.instagram.com/sammy94kirigha/',
    twitter: 'https://twitter.com/crigla1',
    display: true 
}

//Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
        ),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji(
            "⚡ Integration of third party services such as Firebase/ "
        )
    ],
    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        }, {
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
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "psql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        }
    ],
    display: true
    
};

const techStack = {
    viewSkillBars: true,
    experience: [
        {
            Stack: "Frontend / Design",
            progressPercentage: "90%"
        },
        {
            Stack: "Backend",
            progressPercentage: "50%"
        },
        {
            Stack: "Programming",
            progressPercentage: "60%"
        }
    ],
    displayCodersrank: true
};

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "FreeCodeCamp",
            logo: require("./assets/images/download.jpeg"),
            subHeader: "Computer Science engineering course and data structures",
            duration: "March 2020 - September 2020",
            desc: "Learned basics skills which formed my foundation to understanding and building morden web application and a keen interest to learn new skills",
        },
        {
            schoolName: "Karatina University",
            logo: require("./assets/images/download (1).png"),
            subHeader: "Bachelor of Science in Natural Resources Maanagement",
            duration: "September 2016 - April 2020",
            desc:
                "Though with a different background I have loved this industry passionately which me to take several courses from Udemy and freecodecamp. I have also taken a course about Software Engineering, front-end & back-end courses, data structures and algorithms...",
        }
    ]
};

const workExperience = {
    display: true,
    experience: [
        {
            role: "Intern ",
            company: "Kenya Wildlife Service",
            companylogo: require("./assets/images/kws.webp"),
            date: "March 2019 - September 2019",
            desc: "Taking part in environment and wildlife conservation initiatives",
            descBullets: [
                "Contributing to the collection of data from field, data entry, analysis and database management.",
                "Participated in various meetings and training activities.",
                "Managed work according to schedule and ensured compliance to the same.",
                "Worked in the department of Research, doing assessment and monitoring the water quality of Lake Nakuru."
            ]
        }
    ]
};

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "sammykirigha",
    showGithubProfile: "true",
    display: true
}

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Do you want to connect or say hi? My Inbox is open for all.",
    number: "+254707256013",
    email_address: "dkirigha18@gmail.com"
}


export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    techStack,
    educationInfo,
    contactInfo,
    openSource,
    workExperience
};