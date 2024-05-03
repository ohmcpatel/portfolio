import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  vig,
  ucf, 
  cfp, 
  smp,
  vigil, 
  clear,
  record,
  thera,
  study,
  blaze,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founder",
    icon: vig, 
    company_name: "Vigil AI",
    date: "Nov 2023 - Present",
    points: [
      "Engineered a multimodal Speech Isolation / RAG / Sentiment model to scan through police bodycam footage.",
      "Leveraged AWS GovCloud Architecture to create a CJIS compliant backend to perform bodycam analysis.",
      "Conducted beta testing in 10+ police stations in America, communicating traction to VC’s for further Seed Investment.",
    ],
  },
  {
    title: "Paid Undergraduate Research Assistant",
    icon: ucf,
    company_name: "SAGE Labs at UCF",
    date: "Oct 2023 - Present",
    points: [
      "Built a Chrome Extension and API Endpoints to link browser image data to the data pipeline.",
      "Engineered a Dockerized scalable Express data pipeline to perform ML inference on browser image data.",
    ],
  },
  {
    title: "Software Engineer Intern",
    icon: cfp,
    company_name: "Career Fair Plus",
    date: "Mar 2023 - Feb 2024",
    points: [
      "Refactored a MERN workflow by introducing automation with HubSpot, reducing work by 150+ hours per year.",
      "Unblocked production environments in ReactJS, AngularJS, React Native, and Java by fixing 35+ user bugs.",
    ],
  },
  {
    title: "S&P Consulting Intern",
    icon: smp,
    company_name: "SMP Consulting",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Performed data analysis/reporting using Excel.",
      "Managed document control of records using Veeva CRM.",
    ],
  }
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
  {
    name: "1Record",
    description: "Vectorized 100k EHR records to store contextual representations of patient history in MongoDB Vector Search. Developed MERN application to connect “similar” patients allowing physicians to predict patient outcomes.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: record,
    source_code_link: "https://github.com/ohmcpatel/1Record",
  },
  {
    name: "Therapute",
    description: "Developed a Flask server with OpenCV and Mediapipe integrations to perform Time-Series Forecasting. Developed MERN platform, enabling patients to receive immediate feedback from their physical therapist. Developed a Neural Radiance Field with an Intel Developer Cloud CUDA environment to generate tailored 3D models of any given user to show how their body type affects the procedures in performing an exercise.",
    tags: [
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google-cloud",
        color: "green-text-gradient",
      },
      
    ],
    image: thera,
    source_code_link: "https://github.com/ohmcpatel/Therapute-Google-Solution-Challenge",
  },
  {
    name: "ClearPath",
    description: "Developed a React app to identify dangerous areas along a truck route through an algorithm made in Python. Coded an algorithm to assign a “danger index” by examining roadkill accidents, poor lighting, and rural zones.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: clear,
    source_code_link: "https://github.com/ohmcpatel/Clearpath-Trucking-Software",
  },
  {
    name: "Vigil AI",
    description: "Engineered a multimodal Speech Isolation / RAG / Sentiment model to scan through police bodycam footage. Leveraged AWS GovCloud Architecture to create a CJIS compliant backend to perform bodycam analysis. Conducted beta testing in 10+ police stations in America, communicating traction to VC’s for further Seed Investment.",
    tags: [
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RAG Models",
        color: "green-text-gradient",
      },
    ],
    image: vigil,
    source_code_link: "https://github.com/ohmcpatel/vigilAI",
  },
  {
    name: "StudyHub",
    description: "iOS application that integrates with location services and Firebase, as well as the Webcourses Canvas API, to find nearby students who want to study together.",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "canvas-api",
        color: "green-text-gradient",
      },
    ],
    image: study,
    source_code_link: "https://github.com/ohmcpatel/StudyHub",
  },
  {
    name: "Blaze Landing Page",
    description: "A landing page for a 90 Second Apartment Delivery Startup I am working on. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
    ],
    image: blaze,
    source_code_link: "https://blazemarket.co/",
  },
];


export { services, technologies, experiences, testimonials, projects };
