export const info = [
  {
    company: "Live Current Media",
    url: "https://www.livecurrent.com/",
    role: "Full-Stack Engineer",
    startDate: {
      month: "October",
      year: "2022",
    },
    endDate: "Present",
    jobDescription: [
      "Collaborate alongside engineering team to re-architect new and existing features utilizing full stack technologies focused on handling real time video streaming in cross-platform electron application.",
      "Modernized applications streamer to viewer synchronization enabling seamless real time video sharing across sessions.",
      'Improved processes of sites main "Discover" page when relaying information from active stream sessions with WebSockets.',
      "Diagnosed performance issues of applications AWS Lambda architecture and provided suggestions for Docker and Kubernetes deployment.",
      "Worked closely with the UI UX team to create front end React components directly from Figma mockups and offer design suggestions.",
      "Optimized applications party search feature with Elasticsearch.",
    ],
  },
  {
    company: "Mozilla Hubs",
    url: "https://hubs.mozilla.com/",
    role: "Open Source Contributor",
    startDate: {
      month: "June",
      year: "2022",
    },
    endDate: "Present",
    jobDescription: [
      "Collaborated alongside the community manager at Mozilla to engineer a screen record feature into hubs virtual meeting space.",
      "Engineered the logic with React hooks to define a record mode state which toggles a minimal UI designed for camera operators in a hub world to record meetings and events.",
      "Led pair coding meetings with a group of passionate engineers to architect designs, apply logic, and respond to suggested changes by lead engineers.",
    ],
  },
  {
    company: "MillerPhoto",
    url: "https://www.miller.photo/",
    role: "Media Production Lead",
    startDate: {
      month: "September",
      year: "2019",
    },
    endDate: {
      month: "September",
      year: "2022",
    },
    jobDescription: [
      "Led the production of marketing content for 300+ clients across the real estate industry including designing listing websites, still imagery, video, and drone services.",
      "Collaborated with the media team to capitalize on market shifts brought on by the COVID pandemic leading to companies highest grossing year in 2021.",
      "Featured in several publications including luxury home magazine."
    ],
  },
  {
    company: "FreeCodeCamp",
    id: "free_code",
    role: "Speaker and Organizer",
    startDate: {
      month: "March",
      year: "2022",
    },
    endDate: "Present",
    jobDescription: [
      "Organize in person and virtual meetings for passionate developers across the greater Sacramento area with over 1,000 members.",
      "Lead speaker at bi-weekly meetings where we discuss projects, news, and various tech related topics from a variety of skill ranges.",
      "Offer mentorship to individuals interested in getting into the tech space ranging from programming skills, resource suggestions, and interview best practices",
    ],
  },
];

export const projects = [
  {
    0: {
      name: "ZAWN",
      type: "Full-Stack E-Commerce Site",
      description:
        "Full-Stack E-Commerce Site with full functionality. Including adding items to cart, creating user accounts, adding shipping addresses to account, secure checkout with Stripe, and saved order history details per user. Created with React, Node.js/Express, Firebase/Firestore, Stripe API, Cloud Functions, CI/CD configured with Google Cloud, and deployed with Firebase Hosting.",
      img: "zawnscreen.png",
    },
    1: {
      name: "Mozilla Hubs",
      type: "Open-Source Contributions",
      description:
        "Worked with the Community Manager at Mozilla along with a small team to create a new visual mode for the hubs meeting space. Engineered the logic with React hooks to define a record mode state which toggles a minimal UI designed for camera operators in a hub world to record meetings and events that take place.",
      img: "hubs.png",
    },
    2: {
      name: "Architecture  Portfolio",
      type: "Portfolio Site",
      describe:
        "Engineered a basic portfolio site for the purpose of displaying freelance and personal projects I have done for architects and interior designers. Made fully responsive with mobile first practices using media queries. Created with React to display each section as a separate component to easily update information. Configured CI/CD pipeline with Vercel for auto deployment. Implemented email.js to gather data from contact form and forward emails.",
      img: "davidballowe.png",
    },
  },
];
