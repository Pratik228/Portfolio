import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  kubernetes,
  tailwind,
  nodejs,
  git,
  cplusplus,
  docker,
  nokia,
  aaai,
  cmrit,
  student,
  db,
  railway,
  mysql,
  python,
  linux,
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
    id: "tech",
    title: "Skill",
  },
  {
    id: "project",
    title: "Project",
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
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Co-founder & Chief Technology Officer (CTO)",
    company_name: "AAAI Infotech",
    icon: aaai,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Oct 2021",
    points: [
      "Co-founded a tech startup during my second year of engineering, demonstrating early entrepreneurial leadership and an ability to capitalize on technology sector opportunities.",
      "Led a diverse team of developers and engineers, orchestrating project management and fostering a collaborative environment to drive innovation and efficient solution delivery.",
      "Architected and developed an advanced administration monitoring system to prevent online cheating, successfully marketed and sold to various educational institutions to enhance academic integrity.",
      "Spearheaded the design and deployment of a user-centric food delivery application, meeting market needs by providing a seamless ordering experience.",
      "Created and managed a sophisticated apparel e-commerce website, enhancing user engagement and streamlining shopping experiences through extensive functionalities, responsible for ongoing management and optimization of platform operations.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "CMRIT",
    icon: cmrit,
    iconBg: "#383E56",
    date: "Oct 2021 - Nov 2022",
    points: [
      "Developed and deployed a database management system at my college to enhance faculty and student interactions, improving educational and administrative processes.",
      "Created user-friendly dashboards and implemented role-based authentication to simplify access and management of information, increasing operational efficiency.",
      "Integrated features for efficient generation and export of reports in Excel and PDF formats, reducing the time required for administrative tasks by 80%.",
      "Actively managed and optimized the system, ensuring its continued effectiveness and user satisfaction within the college environment.",
    ],
  },
  {
    title: "R&D Intern Backend",
    company_name: "Nokia",
    icon: nokia,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Mar 2024",
    points: [
      "Architected and developed the SS Migration Tool using Golang and Kubernetes to enhance cloud-native application security and manage data migration efficiently.",
      "Integrated Keycloak for advanced user management, reducing manual provisioning by 50% and enhancing data migration processes by 40% using RedisDB for secure secrets management.",
      "Engineered a sophisticated monitoring solution utilizing Golang and gRPC for API calls, enabling robust real-time data integrity tracking.",
      "Implemented a map-based structure for minute-by-minute updates, enhancing system analytics and operational efficiency by integrating with Netact, leading to a 30% increase in operational efficiency and a 25% decrease in incident response times.",
      "Developed a Python-based tool for optimizing JSON/XML configuration integration, simplifying CNF and ZTS product integration and achieving a notable 20% reduction in operational costs.",
      "Conducted extensive system enhancement and debugging operations using Linux, Docker, and Kubernetes, addressing critical issues like FQDN DNS flooding and improving system reliability by 35%.",
      "Streamlined alarm management and performed Redis optimizations, resulting in a 40% decrease in false alarms and a 30% improvement in data retrieval times.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Pratik is really talented and has a lot of potential. He is always willing to learn and he really has a thing for AI and OpenCV. He is also skilled in python development and really sticks to the timeline of development. I would really recommend people to give Pratik a chance and he won't let you down.",
    name: "Saswat Pandey",
    designation: "Software Developer",
    company: "Epicor",
    image:
      "https://media.licdn.com/dms/image/C4D03AQHjhDEeCAIr2w/profile-displayphoto-shrink_100_100/0/1585821950663?e=1719446400&v=beta&t=89f49h2ElTJiP_uSno43oAIzIdec23CpVFmCjAFVY3c",
  },
  {
    testimonial:
      "Pratik is very efficient and I had a great experience working with him.He is very good with ML/AI projects.His web designing skills are exceptional.",
    name: "Kunal Shekhar",
    designation: "Engineer",
    company: "PhonePe",
    image:
      "https://media.licdn.com/dms/image/D5603AQE9bmbAYDsPdA/profile-displayphoto-shrink_100_100/0/1709922052803?e=1719446400&v=beta&t=gmB35QyNqHfaG0nNG-HfZQVslOWmMdarZU1qGgVRcsM",
  },
  {
    testimonial:
      "Pratik Mishra is a good team leader. He has many skills including ML, AI, Python. He is great motivator. He did many interesting projects using the latest technology.",
    name: "Ritik Seth",
    designation: "Associate Data Analytics Developer",
    company: "KGSI",
    image:
      "https://media.licdn.com/dms/image/C4E03AQH1bctp0xjCiw/profile-displayphoto-shrink_100_100/0/1597148034643?e=1720051200&v=beta&t=xMKNki8sxNB7KKC4ziXaZB9Yu51e35w45e_fIoovyRk",
  },
];

const projects = [
  {
    name: "Face Recognition System for Attendance Management",
    description:
      "Engineered a face recognition system to revolutionize attendance tracking with a 90% accuracy rate. Deployed on Azure, this system streamlines the attendance process with real-time recognition and has notably improved performance by reducing processing times.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: student,
    source_code_link: "https://github.com/Pratik228/FDP",
  },
  {
    name: "College Database Management System",
    description:
      "A cornerstone for academic administration, the comprehensive database management system I architected has revolutionized faculty-student interactions, bringing a 60% boost in operational efficiency to college processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javacript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: db,
    source_code_link: "https://github.com/Pratik228/DataRepository-development",
  },
  {
    name: "Indian Railways Food Catering Service",
    description:
      "A cutting-edge catering platform for Indian Railways, enabling passengers to conveniently order meals for their train journeys with personalized recommendations and real-time tracking.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "gRPC",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "green-text-gradient",
      },
    ],
    image: railway,
    source_code_link: "https://github.com/Pratik228/IRCTC-CATERING-CLONE",
  },
];

export { services, technologies, experiences, testimonials, projects };
