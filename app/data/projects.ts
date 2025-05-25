export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  deployment?: string[];
  storage?: string[];
  content?: string[];
  testing?: string[];
  styling?: string[];
  tools?: string[];
  security?: string[];
  ui?: string[];
  hooks?: string[];
  apis?: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  slug: string;
  date: string;
  duration: string;
  role: string;
  client: string;
  detailedDescription: string;
  features: string[];
  challenges: string;
  techStack: TechStack;
  screenshots: Array<{ url: string; caption: string }>;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02) Study Notes",
    description:
      "A collection of study notes for the AWS Certified Cloud Practitioner (CLF-C02) certification exam.",
    image: "/projects/aws-clf.png",
    tags: [
      "AWS",
      "Cloud",
      "Certification",
      "Study Notes",
      "Cloud Practitioner",
    ],
    github: "https://github.com/sgandhi15/aws-CLF-C02-notes",
    demo: "",
    slug: "aws-clf-c02-notes",
    date: "March 2025",
    duration: "2 Weeks",
    role: "Student",
    client: "Personal Project",
    detailedDescription: `
        This is my personal collection of study materials and notes for the AWS Certified Cloud Practitioner (CLF-C02) certification exam. 
        I created this repository to organize my learning journey and track my progress in understanding fundamental AWS cloud concepts, 
        services, and best practices.
        
        The repository is structured to cover all major domains of the AWS Certified Cloud Practitioner exam, including Cloud Concepts, 
        Security and Compliance, Technology, Billing and Pricing, and Support and Documentation.
      `,
    features: [
      "Comprehensive study notes on AWS services and concepts",
      "Exam preparation strategies and tips",
      "Important AWS terminology and definitions",
      "Best practices for cloud architecture",
      "Cost optimization and security considerations",
      "Regular updates as I continue learning",
    ],
    challenges: `
        The main challenge was organizing the vast amount of information in a way that's both comprehensive and easy to navigate. 
        I structured the content to build upon fundamental concepts while maintaining clear connections between related topics.
        
        Another challenge was keeping the content up-to-date with AWS's rapid pace of innovation and service updates. I implemented 
        a regular review process to ensure the information remains current and relevant.
      `,
    techStack: {
      frontend: ["Markdown", "GitHub Pages"],
      content: ["AWS Documentation", "Official Study Guide", "Practice Exams"],
    },
    screenshots: [],
    featured: true,
  },
  // {
  //   title: "Blog Comments Application",
  //   description:
  //     "A blog comments application built with React, Redux, and Axios, showcasing best practices in state management, API integration, and component architecture.",
  //   image: "/placeholder.svg",
  //   tags: [
  //     "React",
  //     "Redux",
  //     "Redux Thunk",
  //     "Axios",
  //     "Lodash",
  //     "React Testing Library",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   slug: "blog-comments-application",
  //   date: "July 2020",
  //   duration: "2 months",
  //   role: "Full Stack Developer",
  //   client: "Personal Project",
  //   detailedDescription: `
  //       A modern React-Redux application that demonstrates the implementation of a blog comments system with user interactions.
  //       This project showcases best practices in state management, API integration, and component architecture using React and Redux.

  //       The application features a dynamic post listing with user information, Redux-powered state management, and asynchronous
  //       data fetching using Redux Thunk. The codebase is organized with a clean and modular component architecture.
  //     `,
  //   features: [
  //     "Dynamic post listing with user information",
  //     "Redux-powered state management",
  //     "Asynchronous data fetching using Redux Thunk",
  //     "Clean and modular component architecture",
  //     "Responsive user interface",
  //     "Comprehensive testing with React Testing Library",
  //   ],
  //   challenges: `
  //       The main challenge was implementing efficient state management for complex user interactions.
  //       We solved this by using Redux with proper action creators and reducers.

  //       Another challenge was ensuring smooth real-time updates. We addressed this by implementing
  //       proper data fetching strategies and optimistic updates.
  //     `,
  //   techStack: {
  //     frontend: ["React", "Redux", "Redux Thunk", "Axios"],
  //     testing: ["React Testing Library", "Jest"],
  //     tools: ["Lodash"],
  //   },
  //   screenshots: [
  //     { url: "/placeholder.svg", caption: "Post List View" },
  //     { url: "/placeholder.svg", caption: "Comment Section" },
  //     { url: "/placeholder.svg", caption: "User Interface" },
  //     { url: "/placeholder.svg", caption: "Mobile View" },
  //   ],
  //   featured: false,
  // },
  {
    title: "Chat App",
    description:
      "A modern real-time chat application built with Node.js, Express, and Socket.IO that allows users to join chat rooms, send messages, and share their location with others in the same room.",
    image: "/projects/ca-1.png",
    tags: ["Node.js", "Express", "Socket.io", "JavaScript"],
    github: "https://github.com/sgandhi15/chat-app",
    demo: "#",
    slug: "chat-app",
    date: "March 2022",
    duration: "2 months",
    role: "Full Stack Developer",
    client: "Personal Project",
    detailedDescription: `
        A modern real-time chat application that enables seamless communication between users through chat rooms. 
        The application leverages WebSocket technology to provide instant message delivery and real-time updates 
        on user presence and location sharing.
        
        The project demonstrates practical implementation of real-time communication features, user interface design, 
        and responsive web development principles. It includes features like chat rooms, user tracking, and location 
        sharing capabilities.
      `,
    features: [
      "Real-time messaging using WebSockets",
      "Chat room creation and joining",
      "User presence tracking",
      "Location sharing with Google Maps integration",
      "Responsive design for all devices",
      "Real-time notifications for user events",
      "Clean and intuitive user interface",
      "Cross-browser compatibility",
    ],
    challenges: `
        One of the main challenges was implementing reliable real-time communication across different network conditions. 
        We solved this by implementing robust error handling and reconnection logic in the Socket.IO implementation.
        
        Another challenge was ensuring accurate user presence tracking. We implemented a heartbeat mechanism to detect 
        when users disconnect unexpectedly and update the user list accordingly.
      `,
    techStack: {
      frontend: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Mustache.js",
        "Moment.js",
      ],
      backend: ["Node.js", "Express.js", "Socket.IO"],
      deployment: ["Heroku"],
    },
    screenshots: [
      { url: "/projects/ca-1.png", caption: "Login Page" },
      { url: "/projects/ca-2.png", caption: "Chat Room Interface" },
    ],
    featured: false,
  },
  {
    title: "COVID-19 Tracker",
    description:
      "A responsive, real-time COVID-19 data visualization dashboard built with React that provides up-to-date statistics on the global pandemic.",
    image: "/projects/cvt.png",
    tags: [
      "React",
      "JavaScript",
      "Material UI",
      "Chart.js",
      "Axios",
      "React CountUp",
      "CSS Modules",
      "API Integration",
      "Responsive Design",
    ],
    github: "https://github.com/sgandhi15/covid-tracker",
    demo: "#",
    slug: "covid-tracker",
    date: "June 2021",
    duration: "1.5 months",
    role: "Frontend Developer",
    client: "Personal Project",
    detailedDescription: `
        A comprehensive COVID-19 tracking dashboard that provides real-time visualization of pandemic data across 
        different countries. The application integrates with the COVID-19 Mathdro API to fetch and display the latest 
        statistics, including infection rates, recovery numbers, and deaths.
        
        The dashboard features interactive charts, animated statistics, and a country-specific data view, all presented 
        through a clean and intuitive user interface built with Material UI.
      `,
    features: [
      "Global and country-specific COVID-19 data",
      "Interactive charts and graphs",
      "Real-time data updates",
      "Animated statistics with CountUp",
      "Country selection dropdown",
      "Responsive design for all devices",
      "Visual data representation",
      "Historical data trends",
    ],
    challenges: `
        The main challenge was handling and visualizing large datasets efficiently. We implemented data aggregation 
        and caching strategies to ensure smooth performance while displaying complex charts and statistics.
        
        Another challenge was ensuring accurate real-time updates while maintaining a responsive user interface. 
        We implemented a robust data fetching strategy with proper error handling and loading states.
      `,
    techStack: {
      frontend: ["React", "Material UI", "Chart.js", "Axios", "React CountUp"],
      styling: ["CSS Modules"],
      deployment: ["Netlify"],
    },
    screenshots: [],
    featured: false,
  },
  {
    title: "GitHub Search",
    description:
      "A modern, responsive React application that allows users to search and explore GitHub profiles, repositories, and manage their favorite repositories.",
    image: "/projects/github-search.png",
    tags: [
      "React",
      "Firebase",
      "GitHub API",
      "Authentication",
      "State Management",
      "Axios",
      "React Router",
      "React Toastify",
      "React Bootstrap",
      "Bootstrap 4",
      "Semantic UI",
    ],
    github: "https://github.com/sgandhi15/github-search",
    demo: "#",
    slug: "github-search",
    date: "June 2020",
    duration: "2 months",
    role: "Full Stack Developer",
    client: "Personal Project",
    detailedDescription: `
        A comprehensive GitHub exploration tool that enables users to search and discover GitHub profiles and repositories. 
        The application features Firebase authentication for secure user management and integrates with the GitHub API to 
        provide real-time access to GitHub data.
        
        Users can search for GitHub profiles, view detailed repository information, and manage their favorite repositories 
        through an intuitive and responsive interface. The application demonstrates modern React practices and secure 
        authentication implementation.
      `,
    features: [
      "Secure Firebase authentication system",
      "Real-time GitHub user search",
      "Detailed profile information display",
      "Repository management and favorites",
      "User statistics and metrics",
      "Responsive design with Bootstrap",
      "Toast notifications for user feedback",
      "Protected routes and session management",
    ],
    challenges: `
        One of the main challenges was implementing efficient state management for user authentication and GitHub data. 
        We solved this by implementing a robust state management system and optimizing API calls to minimize data fetching.
        
        Another challenge was ensuring a smooth user experience while handling GitHub API rate limits. We implemented 
        caching strategies and optimized API calls to provide consistent performance.
      `,
    techStack: {
      frontend: ["React", "React Router", "React Bootstrap", "Semantic UI"],
      backend: ["Firebase Authentication", "Cloud Firestore"],
      tools: ["Axios", "React Toastify", "GitHub API"],
    },
    screenshots: [
      { url: "/projects/github-search.png", caption: "Login Page" },
      { url: "/projects/github-search-2.png", caption: "Search Page" },
    ],
    featured: false,
  },
  // {
  //   title: "Health Card API",
  //   description:
  //     "A backend API for a digital Health Card system that facilitates seamless interaction between patients, doctors, and administrators.",
  //   image: "/placeholder.svg",
  //   tags: [
  //     "Healthcare",
  //     "Backend",
  //     "API",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Mongoose",
  //     "JWT",
  //     "Bcryptjs",
  //     "Helmet.js",
  //     "CORS",
  //     "Morgan",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   slug: "healthcare-backend",
  //   date: "April 2021",
  //   duration: "3 months",
  //   role: "Backend Developer",
  //   client: "Healthcare Provider",
  //   detailedDescription: `
  //       A robust and secure REST API backend for a digital Health Card system that modernizes healthcare management.
  //       The system digitizes medical records and streamlines healthcare service delivery through a well-structured API
  //       that serves patients, doctors, and administrators.

  //       The API implements role-based access control, secure authentication, and comprehensive data management features
  //       to ensure the privacy and security of sensitive healthcare information.
  //     `,
  //   features: [
  //     "Multi-user role system (patients, doctors, administrators)",
  //     "JWT-based authentication with role-based access control",
  //     "Digital health records management",
  //     "Appointment scheduling system",
  //     "Medical history tracking",
  //     "Secure password management",
  //     "Comprehensive API documentation",
  //     "Request logging and monitoring",
  //   ],
  //   challenges: `
  //       The main challenge was implementing a secure and compliant healthcare data management system. We addressed this
  //       by implementing robust security measures, including JWT authentication, password hashing, and proper data encryption.

  //       Another challenge was designing an efficient database schema that could handle complex relationships between
  //       patients, doctors, and medical records. We solved this by implementing a well-structured MongoDB schema with
  //       proper indexing and relationships.
  //     `,
  //   techStack: {
  //     backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
  //     security: ["JWT", "Bcryptjs", "Helmet.js", "CORS"],
  //     tools: ["Morgan", "Nodemon", "Dotenv"],
  //   },
  //   screenshots: [
  //     { url: "/placeholder.svg", caption: "API Documentation" },
  //     { url: "/placeholder.svg", caption: "Database Schema" },
  //     { url: "/placeholder.svg", caption: "Security Implementation" },
  //     { url: "/placeholder.svg", caption: "API Endpoints" },
  //   ],
  //   featured: false,
  // },
  // {
  //   title: "Health Card Frontend",
  //   description:
  //     "A frontend for a digital Health Card system that facilitates seamless interaction between patients, doctors, and administrators.",
  //   image: "/placeholder.svg",
  //   tags: [
  //     "Healthcare",
  //     "Frontend",
  //     "React",
  //     "TypeScript",
  //     "TailwindCSS",
  //     "Material-UI",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   slug: "healthcare-frontend",
  //   date: "April 2021",
  //   duration: "3 months",
  //   role: "Frontend Developer",
  //   client: "Healthcare Provider",
  //   detailedDescription: `
  //       A modern, secure, and user-friendly healthcare management system built with React and Redux. This web application
  //       facilitates efficient communication and data management between healthcare providers, patients, and administrators.

  //       The system implements secure authentication, real-time data updates, and responsive design to ensure a seamless
  //       user experience across all devices and user roles.
  //     `,
  //   features: [
  //     "Multi-user role system (Admin, Doctor, Patient)",
  //     "JWT-based authentication with role-based access",
  //     "Medical record management",
  //     "Patient list management",
  //     "Interactive chatbot assistance",
  //     "Real-time data updates",
  //     "Responsive design",
  //     "Profile management",
  //   ],
  //   challenges: `
  //       The main challenge was creating an intuitive interface that could handle complex healthcare data while remaining
  //       user-friendly. We solved this by implementing a clean, component-based architecture with clear navigation and
  //       data presentation.

  //       Another challenge was ensuring real-time updates across different user roles. We implemented efficient state
  //       management and data synchronization to provide instant updates while maintaining performance.
  //     `,
  //   techStack: {
  //     frontend: ["React", "TypeScript", "Redux"],
  //     ui: ["Material-UI", "TailwindCSS"],
  //     tools: ["React Router", "Axios", "React Modal", "React Simple Chatbot"],
  //   },
  //   screenshots: [
  //     { url: "/placeholder.svg", caption: "Admin Dashboard" },
  //     { url: "/placeholder.svg", caption: "Doctor Portal" },
  //     { url: "/placeholder.svg", caption: "Patient Interface" },
  //     { url: "/placeholder.svg", caption: "Medical Records View" },
  //   ],
  //   featured: false,
  // },
  // {
  //   title: "Hook Season Display",
  //   description:
  //     "A modern, responsive React application that determines and displays the current season based on the user's geolocation.",
  //   image: "/placeholder.svg",
  //   tags: [
  //     "React",
  //     "Hooks",
  //     "Geolocation",
  //     "Semantic UI",
  //     "State Management",
  //     "Axios",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   slug: "hook-season-display",
  //   date: "July 2020",
  //   duration: "1 month",
  //   role: "Frontend Developer",
  //   client: "Personal Project",
  //   detailedDescription: `
  //       A creative React application that demonstrates the practical implementation of React hooks and geolocation API
  //       integration. The application automatically detects the user's location and displays the current season with
  //       appropriate visual themes and messages.

  //       The project showcases modern React practices, including custom hooks, state management, and responsive design
  //       principles.
  //     `,
  //   features: [
  //     "Geolocation integration",
  //     "Dynamic season detection",
  //     "Season-themed UI",
  //     "Custom React hooks",
  //     "Responsive design",
  //     "Error handling",
  //     "Loading states",
  //     "Cross-browser compatibility",
  //   ],
  //   challenges: `
  //       The main challenge was implementing reliable geolocation detection across different browsers and devices.
  //       We solved this by implementing robust error handling and fallback mechanisms for when geolocation is not available.

  //       Another challenge was creating a smooth user experience during the geolocation request process. We implemented
  //       clear loading states and user feedback to ensure a seamless experience.
  //     `,
  //   techStack: {
  //     frontend: ["React", "Semantic UI"],
  //     hooks: ["useState", "useEffect", "Custom Hooks"],
  //     apis: ["Browser Geolocation API"],
  //   },
  //   screenshots: [
  //     { url: "/placeholder.svg", caption: "Summer Theme" },
  //     { url: "/placeholder.svg", caption: "Winter Theme" },
  //     { url: "/placeholder.svg", caption: "Loading State" },
  //     { url: "/placeholder.svg", caption: "Error Handling" },
  //   ],
  //   featured: false,
  // },
  {
    title: "Indecision App",
    description:
      "A simple, responsive, and intuitive decision-making app built with React, JavaScript, and SCSS that helps users make decisions when they're stuck between multiple options.",
    image: "/projects/ia-1.png",
    tags: [
      "React",
      "JavaScript",
      "Webpack",
      "Babel",
      "Yarn",
      "Express.js",
      "SCSS",
    ],
    github: "https://github.com/sgandhi15/indecision-app",
    demo: "#",
    slug: "indecision-app",
    date: "June 2021",
    duration: "1 month",
    role: "Full Stack Developer",
    client: "Personal Project",
    detailedDescription: `
        Indecision App is a modern React application designed to help users make decisions when they're stuck between multiple options. 
        Simply add your options, click the "What should I do?" button, and let the app randomly decide for you!
        
        The application features a clean, modern interface with easy-to-use controls and persistent storage using the browser's 
        localStorage API. It's built with React class components and state management, styled with SCSS for advanced styling capabilities.
      `,
    features: [
      "Decision Making Helper with random option selection",
      "Persistent storage using browser's localStorage",
      "Responsive design for all devices",
      "Intuitive UI with easy-to-use controls",
      "Modal feedback for selected options",
      "Clean and modern interface",
      "Cross-browser compatibility",
      "Production-ready deployment setup",
    ],
    challenges: `
        The main challenge was implementing efficient state management for the options list while maintaining a smooth user experience. 
        We solved this by using React's state management and implementing proper data persistence with localStorage.
        
        Another challenge was ensuring the random selection process was truly random and unbiased. We implemented a robust 
        randomization algorithm that ensures fair selection across all options.
      `,
    techStack: {
      frontend: ["React.js", "JavaScript", "SCSS"],
      tools: ["Webpack", "Babel", "Yarn"],
      backend: ["Express.js"],
      deployment: ["Heroku"],
    },
    screenshots: [
      { url: "/projects/ia-1.png", caption: "Main Interface" },
      { url: "/projects/ia-2.png", caption: "Option Selection" },
      { url: "/projects/ia-3.png", caption: "Error State" },
      { url: "/projects/ia-4.png", caption: "Decision Modal" },
    ],
    featured: false,
  },
  {
    title: "JS Captcha",
    description:
      "A modern, user-friendly CAPTCHA implementation built with vanilla JavaScript, HTML, and CSS that helps protect web forms from automated submissions.",
    image: "/projects/jsc.png",
    tags: ["JavaScript", "HTML", "CSS", "CAPTCHA"],
    github: "https://github.com/sgandhi15/js-captcha",
    demo: "#",
    slug: "js-captcha",
    date: "April 2022",
    duration: "2 weeks",
    role: "Frontend Developer",
    client: "Personal Project",
    detailedDescription: `
        A modern, user-friendly CAPTCHA implementation built with vanilla JavaScript, HTML, and CSS. This project demonstrates 
        the creation of a secure and interactive CAPTCHA system that helps protect web forms from automated submissions while 
        maintaining a smooth user experience.
        
        The implementation features dynamic CAPTCHA generation, user-friendly interface, and comprehensive security features 
        while being lightweight and dependency-free.
      `,
    features: [
      "Dynamic 6-character CAPTCHA generation",
      "Mix of uppercase, lowercase, and numbers",
      "User-friendly interface with clear feedback",
      "Responsive design for all devices",
      "Instant validation of user input",
      "Reload button for new CAPTCHA",
      "Color-coded status messages",
      "Automatic reset after verification",
    ],
    challenges: `
        The main challenge was creating a secure CAPTCHA system that was both effective against bots and user-friendly. 
        We solved this by implementing a robust character generation algorithm while maintaining a clean, intuitive interface.
        
        Another challenge was ensuring cross-browser compatibility without any external dependencies. We achieved this by 
        using vanilla JavaScript and modern CSS features with appropriate fallbacks.
      `,
    techStack: {
      frontend: ["JavaScript", "HTML5", "CSS3"],
      tools: ["Font Awesome"],
    },
    screenshots: [{ url: "/projects/jsc.png", caption: "CAPTCHA Display" }],
    featured: false,
  },
  {
    title: "JSON Parser Pro",
    description:
      "A modern, feature-rich JSON validation and formatting tool built with React and TypeScript that provides developers with a powerful yet user-friendly interface for working with JSON data.",
    image: "/projects/jp-1.png",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Radix UI",
      "JSON",
      "Parser",
      "Formatter",
      "Validator",
    ],
    github: "https://github.com/sgandhi15/json-parser-pro",
    demo: "https://json-parser-pro.pages.dev/",
    slug: "json-parser-pro",
    date: "December 2024",
    duration: "1 month",
    role: "Frontend Developer",
    client: "Personal Project",
    detailedDescription: `
        A modern, feature-rich JSON validation and formatting tool built with React and TypeScript. This web application 
        provides developers with a powerful yet user-friendly interface for working with JSON data.
        
        The application features real-time validation, beautiful formatting, and a modern dark mode interface, all while 
        maintaining high performance and accessibility standards.
      `,
    features: [
      "Real-time JSON validation with clear error messages",
      "Beautiful JSON formatting and prettification",
      "Dark mode interface",
      "Responsive design for all devices",
      "Copy to clipboard functionality",
      "Toast notifications for feedback",
      "Split view layout for input/output",
      "SEO optimization with JSON-LD",
    ],
    challenges: `
        The main challenge was implementing efficient real-time validation while maintaining performance. We solved this 
        by implementing debounced validation and optimizing the parsing logic.
        
        Another challenge was creating an accessible interface that was both powerful and user-friendly. We achieved this 
        by using Radix UI primitives and implementing comprehensive keyboard navigation.
      `,
    techStack: {
      frontend: ["React 18", "TypeScript"],
      ui: ["TailwindCSS", "Radix UI"],
      tools: ["Vite", "ESLint", "Lucide React"],
    },
    screenshots: [
      { url: "/projects/jp-1.png", caption: "Main Interface" },
      { url: "/projects/jp-2.png", caption: "Parser" },
    ],
    featured: false,
  },
  {
    title: "Optical Flow Analysis and Frame Interpolation",
    description:
      "A computer vision project that implements and analyzes various optical flow estimation techniques, including frame interpolation capabilities using Python and OpenCV.",
    image: "/projects/optical.jpg",
    tags: [
      "Computer Vision",
      "Optical Flow",
      "Frame Interpolation",
      "Python",
      "OpenCV",
      "FlowPy",
      "NumPy",
      "Matplotlib",
    ],
    github: "https://github.com/sgandhi15/mun-course-computer-vision-assi3",
    demo: "#",
    slug: "mun-course-computer-vision-assi3",
    date: "March 2024",
    duration: "2 months",
    role: "Computer Vision Engineer",
    client: "Academic Project",
    detailedDescription: `
        This project implements and analyzes various optical flow estimation techniques for computer vision applications. 
        The implementation includes multiple approaches to calculate optical flow between image pairs, along with frame 
        interpolation capabilities.
        
        The project demonstrates strong understanding of computer vision concepts, Python programming, and image processing 
        techniques, achieving competitive results on standard optical flow datasets.
      `,
    features: [
      "Ground truth flow visualization using FlowPy",
      "Multi-channel optical flow computation",
      "Comparative analysis of color channels",
      "Forward and backward flow estimation",
      "Middle frame interpolation",
      "Lucas-Kanade optical flow implementation",
      "Comprehensive error analysis",
      "Visualization of flow fields",
    ],
    challenges: `
        The main challenge was implementing efficient optical flow computation that could handle complex motion patterns. 
        We solved this by implementing multiple algorithms and optimizing the computation pipeline.
        
        Another challenge was achieving accurate frame interpolation. We addressed this by implementing both forward and 
        backward warping techniques and using error metrics to validate the results.
      `,
    techStack: {
      backend: ["Python", "OpenCV", "NumPy"],
      tools: ["FlowPy", "Matplotlib"],
    },
    screenshots: [],
    featured: false,
  },
  {
    title: "NextResume",
    description:
      "A modern, AI-powered resume builder application that helps users create, customize, and tailor professional resumes for specific job applications.",
    image: "/projects/nr-1.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Hono.js",
      "AWS Lambda",
      "PostgreSQL",
      "SST",
      "Puppeteer",
      "Chromium",
      "Bun",
      "AI",
      "PDF Generation",
      "Serverless",
      "AWS",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "Google OAuth",
      "JWT",
      "LLM",
    ],
    github: "https://github.com/sgandhi15/nextresume-public",
    demo: "https://nextresume.app/",
    slug: "nextresume",
    date: "May 2025",
    duration: "3 months",
    role: "Full Stack Developer",
    client: "Personal Project",
    detailedDescription: `
        NextResume is a modern, AI-powered resume builder application that helps users create, customize, and tailor professional resumes for specific job applications. 
        The application leverages advanced AI technology to structure raw resume content, tailor resumes for specific job descriptions, and generate high-quality PDF documents.
        
        Built with a modern tech stack and serverless architecture, NextResume provides a seamless experience for users to create and manage their professional resumes.
      `,
    features: [
      "User Authentication with Google OAuth and PKCE",
      "Structured Resume Creation from unstructured text",
      "AI-Powered Resume Tailoring for specific jobs",
      "Professional PDF Export with proper formatting",
      "Resume Version Management",
      "Modern UI with Tailwind CSS and Shadcn UI",
      "Serverless Architecture with AWS Lambda",
      "Type-safe Database Operations with Drizzle ORM",
    ],
    challenges: `
        The main challenge was implementing efficient AI-powered resume tailoring while maintaining performance. 
        We solved this by implementing a robust caching system and optimizing the AI processing pipeline.
        
        Another challenge was ensuring reliable PDF generation across different browsers and devices. 
        We addressed this by using Puppeteer and Chromium for consistent PDF rendering.
      `,
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      backend: ["Hono.js", "AWS Lambda"],
      database: ["PostgreSQL"],
      deployment: ["SST", "AWS"],
      tools: ["Puppeteer", "Chromium", "Bun", "Drizzle ORM", "Zod"],
      security: ["Google OAuth", "JWT"],
    },
    screenshots: [
      { url: "/projects/nr-1.png", caption: "landing page" },
      { url: "/projects/nr-2.png", caption: "dashboard" },
      { url: "/projects/nr-3.png", caption: "resume parser" },
      { url: "/projects/nr-4.png", caption: "resume editor" },
    ],
    featured: true,
  },
  // {
  //   title: "ParkVision - Smart Parking Management System",
  //   description:
  //     "An Android mobile application designed to bring efficiency and convenience to parking management systems, enabling real-time monitoring of parking spaces.",
  //   image: "/placeholder.svg",
  //   tags: ["Android", "Firebase", "AWS", "IoT", "Mobile", "Real-Time"],
  //   github: "#",
  //   demo: "#",
  //   slug: "parkvision-archive",
  //   date: "December 2024",
  //   duration: "4 months",
  //   role: "Mobile Developer",
  //   client: "Personal Project",
  //   detailedDescription: `
  //       ParkVision is an Android mobile application that revolutionizes parking management by providing real-time monitoring
  //       of parking spaces. The app enables users to track parking space availability and receive instant notifications when
  //       spaces become available or occupied.

  //       The system integrates IoT sensors with a mobile interface, creating a seamless experience for both parking lot
  //       managers and users.
  //     `,
  //   features: [
  //     "Real-time Parking Space Monitoring",
  //     "Push Notifications for Space Availability",
  //     "Phone Number Authentication",
  //     "User Profile Management",
  //     "Intuitive UI with Status Indicators",
  //     "Offline Capability",
  //     "Real-time Data Synchronization",
  //     "Topic-based Notification System",
  //   ],
  //   challenges: `
  //       The main challenge was implementing reliable real-time synchronization across devices.
  //       We solved this by implementing a robust Firebase Realtime Database structure and proper offline persistence.

  //       Another challenge was ensuring accurate parking space status updates. We addressed this by implementing
  //       a verification system and proper error handling for sensor data.
  //     `,
  //   techStack: {
  //     frontend: ["Android Native", "Material Design"],
  //     backend: ["Firebase", "AWS"],
  //     database: ["Firebase Realtime Database", "AWS DynamoDB"],
  //     tools: ["Firebase Cloud Messaging", "AWS IoT Core"],
  //     security: ["Firebase Authentication", "AWS Cognito"],
  //   },
  //   screenshots: [
  //     { url: "/placeholder.svg", caption: "Parking Space Overview" },
  //     { url: "/placeholder.svg", caption: "Space Status Details" },
  //     { url: "/placeholder.svg", caption: "Notification Settings" },
  //     { url: "/placeholder.svg", caption: "User Profile" },
  //   ],
  //   featured: false,
  // },
  // {
  //   title: "Sarthak Gandhi - Old Portfolio",
  //   description:
  //     "A modern, responsive, and elegant portfolio website built with Astro and TailwindCSS, serving as a comprehensive showcase of professional experience, skills, and projects.",
  //   image: "/placeholder.svg",
  //   tags: [
  //     "Astro",
  //     "TailwindCSS",
  //     "TypeScript",
  //     "Cloudflare Pages",
  //     "pnpm",
  //     "json",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   slug: "sarthak-portfolio-old",
  //   date: "January 2025",
  //   duration: "2 months",
  //   role: "Frontend Developer",
  //   client: "Personal Project",
  //   detailedDescription: `
  //       A modern, responsive portfolio website built with Astro and TailwindCSS. The site serves as a comprehensive
  //       showcase of professional experience, skills, and projects, featuring a clean design and excellent performance.

  //       The website implements modern web development practices and focuses on accessibility and user experience.
  //     `,
  //   features: [
  //     "Responsive Design for all devices",
  //     "Dark/Light Mode Toggle",
  //     "Print-Friendly Layout",
  //     "Performance Optimized",
  //     "Type-Safe Development",
  //     "SEO Optimized",
  //     "Modern Component Architecture",
  //     "Fast Page Load Times",
  //   ],
  //   challenges: `
  //       The main challenge was optimizing performance while maintaining a rich feature set.
  //       We solved this by leveraging Astro's static site generation and implementing efficient component loading.

  //       Another challenge was ensuring consistent styling across different browsers. We addressed this by
  //       using TailwindCSS with a well-structured design system.
  //     `,
  //   techStack: {
  //     frontend: ["Astro", "TypeScript", "TailwindCSS"],
  //     deployment: ["Cloudflare Pages"],
  //     tools: ["pnpm", "ESLint", "Prettier"],
  //   },
  //   screenshots: [
  //     { url: "/placeholder.svg", caption: "Home Page" },
  //     { url: "/placeholder.svg", caption: "Projects Section" },
  //     { url: "/placeholder.svg", caption: "Dark Mode" },
  //     { url: "/placeholder.svg", caption: "Mobile View" },
  //   ],
  //   featured: false,
  // },
  // {
  //   title: "Sarthak Gandhi - Professional Portfolio",
  //   description:
  //     "A personal portfolio and blog website built with modern web technologies to showcase projects and share knowledge about software development.",
  //   image: "/placeholder.svg",
  //   tags: [
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Shadcn UI",
  //     "Astro",
  //     "Docker",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   slug: "sarthak-portfolio",
  //   date: "May 2025",
  //   duration: "3 months",
  //   role: "Full Stack Developer",
  //   client: "Personal Project",
  //   detailedDescription: `
  //       A modern portfolio and blog website built with React, TypeScript, and Astro. The site serves as a platform
  //       to showcase projects and share knowledge about software development, featuring a clean design and excellent
  //       performance.

  //       The website implements modern web development practices and focuses on accessibility, user experience,
  //       and content management.
  //     `,
  //   features: [
  //     "Responsive Design",
  //     "Dark/Light Mode",
  //     "Blog Section with Markdown",
  //     "Project Showcase",
  //     "Search Functionality",
  //     "Tag-based Navigation",
  //     "SEO Optimization",
  //     "Docker Deployment",
  //   ],
  //   challenges: `
  //       The main challenge was implementing an efficient content management system.
  //       We solved this by using Markdown for content and implementing a robust build process.

  //       Another challenge was ensuring fast page loads with rich content. We addressed this by
  //       implementing proper code splitting and lazy loading.
  //     `,
  //   techStack: {
  //     frontend: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  //     content: ["Astro", "Markdown"],
  //     deployment: ["Docker"],
  //     tools: ["pnpm", "ESLint", "Prettier"],
  //   },
  //   screenshots: [
  //     { url: "/placeholder.svg", caption: "Home Page" },
  //     { url: "/placeholder.svg", caption: "Blog Section" },
  //     { url: "/placeholder.svg", caption: "Projects Gallery" },
  //     { url: "/placeholder.svg", caption: "Search Interface" },
  //   ],
  //   featured: false,
  // },
  // {
  //   title: "Sarthak Gandhi - Professional Resume (LaTeX)",
  //   description:
  //     "A LaTeX archive of my professional resume, showcasing experience as a Software Developer with expertise in full-stack development, system architecture, and cloud solutions.",
  //   image: "/placeholder.svg",
  //   tags: [
  //     "LaTeX",
  //     "Overleaf",
  //     "Professional Portfolio",
  //     "Software Developer",
  //     "Full-Stack Developer",
  //     "Cloud Solutions",
  //     "System Architecture",
  //     "Cloud Practitioner",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   slug: "sarthak-resume-latex-archive",
  //   date: "December 2024",
  //   duration: "1 month",
  //   role: "Technical Writer",
  //   client: "Personal Project",
  //   detailedDescription: `
  //       A professional resume created using LaTeX and Overleaf, showcasing experience as a Software Developer.
  //       The resume highlights expertise in full-stack development, system architecture, and cloud solutions.

  //       The document is designed with attention to typography and layout, ensuring a professional appearance
  //       while maintaining readability and structure.
  //     `,
  //   features: [
  //     "Professional Typography",
  //     "Clean Layout Design",
  //     "Section Organization",
  //     "Skills Categorization",
  //     "Experience Timeline",
  //     "Education Details",
  //     "Project Highlights",
  //     "Contact Information",
  //   ],
  //   challenges: `
  //       The main challenge was creating a clean and professional layout while maintaining flexibility for updates.
  //       We solved this by implementing a modular LaTeX structure with reusable components.

  //       Another challenge was ensuring consistent formatting across different PDF viewers. We addressed this by
  //       using standard LaTeX packages and proper document structure.
  //     `,
  //   techStack: {
  //     tools: ["LaTeX", "Overleaf"],
  //     content: ["Professional Resume", "Technical Documentation"],
  //   },
  //   screenshots: [
  //     { url: "/placeholder.svg", caption: "Resume Overview" },
  //     { url: "/placeholder.svg", caption: "Experience Section" },
  //     { url: "/placeholder.svg", caption: "Skills Section" },
  //     { url: "/placeholder.svg", caption: "Projects Section" },
  //   ],
  //   featured: false,
  // },
  // {
  //   title: "Season Display",
  //   description:
  //     "A modern, responsive React application that dynamically displays seasonal content based on the user's geographical location.",
  //   image: "/placeholder.svg",
  //   tags: ["React", "Geolocation", "Semantic UI", "State Management", "Axios"],
  //   github: "#",
  //   demo: "#",
  //   slug: "season-display",
  //   date: "July 2020",
  //   duration: "1 month",
  //   role: "Frontend Developer",
  //   client: "Personal Project",
  //   detailedDescription: `
  //       A modern React application that demonstrates the practical implementation of React components and geolocation
  //       services. The application automatically detects the user's location and displays seasonal content with
  //       appropriate visual themes.

  //       The project showcases modern React practices, including custom hooks, state management, and responsive design.
  //     `,
  //   features: [
  //     "Real-time Location Detection",
  //     "Dynamic Season Display",
  //     "Responsive UI",
  //     "Error Handling",
  //     "Loading States",
  //     "Season-themed Visuals",
  //     "Cross-browser Compatibility",
  //     "Clean Component Architecture",
  //   ],
  //   challenges: `
  //       The main challenge was implementing reliable geolocation detection across different browsers.
  //       We solved this by implementing robust error handling and fallback mechanisms.

  //       Another challenge was creating a smooth user experience during location detection. We addressed this by
  //       implementing clear loading states and user feedback.
  //     `,
  //   techStack: {
  //     frontend: ["React", "Semantic UI"],
  //     hooks: ["useState", "useEffect", "Custom Hooks"],
  //     apis: ["Browser Geolocation API"],
  //   },
  //   screenshots: [
  //     { url: "/placeholder.svg", caption: "Summer Theme" },
  //     { url: "/placeholder.svg", caption: "Winter Theme" },
  //     { url: "/placeholder.svg", caption: "Loading State" },
  //     { url: "/placeholder.svg", caption: "Error Handling" },
  //   ],
  //   featured: false,
  // },
  // {
  //   title: "Simple Hook",
  //   description:
  //     "A demonstration project showcasing the implementation and usage of custom React hooks, built with React 16.13.1.",
  //   image: "/projects/react-hook.jpg",
  //   tags: [
  //     "React",
  //     "Hooks",
  //     "Custom Hooks",
  //     "API Integration",
  //     "State Management",
  //     "Component Composition",
  //   ],
  //   github: "https://github.com/sgandhi15/simple-hook",
  //   demo: "#",
  //   slug: "simple-hook",
  //   date: "July 2020",
  //   duration: "1 week",
  //   role: "Frontend Developer",
  //   client: "Personal Project",
  //   detailedDescription: `
  //       A demonstration project showcasing the implementation and usage of custom React hooks, built with React 16.13.1.
  //       This project serves as an educational example of how to create and utilize custom hooks in React applications.

  //       The project demonstrates the power and reusability of custom React hooks through a simple but practical example,
  //       featuring a custom useResources hook that fetches data from an API.
  //     `,
  //   features: [
  //     "Custom Hook Implementation with useResources",
  //     "Dynamic Resource Loading",
  //     "Clean Component Architecture",
  //     "API Integration with JSONPlaceholder",
  //     "Reusable Components",
  //     "State Management with Hooks",
  //     "Error Handling",
  //     "Loading States",
  //   ],
  //   challenges: `
  //       The main challenge was creating a reusable hook that could handle different types of resources.
  //       We solved this by implementing a flexible hook that accepts resource types as parameters.

  //       Another challenge was ensuring proper error handling and loading states. We addressed this by
  //       implementing comprehensive error boundaries and loading indicators.
  //     `,
  //   techStack: {
  //     frontend: ["React 16.13.1"],
  //     tools: ["Axios"],
  //     hooks: ["useState", "useEffect", "Custom Hooks"],
  //     apis: ["JSONPlaceholder API"],
  //   },
  //   screenshots: [],
  //   featured: false,
  // },
  {
    title: "Stream App",
    description:
      "A modern live streaming platform built with a microservice architecture, enabling users to create, manage, and watch live streams.",
    image: "/projects/rtmp.jpg",
    tags: ["Node.js", "Express", "RTMP", "JSON Server"],
    github: "https://github.com/sgandhi15/stream-app",
    demo: "#",
    slug: "stream-app",
    date: "July 2020",
    duration: "2 months",
    role: "Full Stack Developer",
    client: "Personal Project",
    detailedDescription: `
        A modern live streaming platform built with a microservice architecture, enabling users to create, manage, 
        and watch live streams. The application consists of three main components: a REST API server, an RTMP server, 
        and a client application.
        
        The system is designed with scalability and maintainability in mind, using a microservice architecture 
        to separate concerns and allow for independent scaling of components.
      `,
    features: [
      "Stream Management API",
      "Live Video Streaming via RTMP",
      "RESTful API Design",
      "Microservice Architecture",
      "Real-time Video Broadcasting",
      "Stream Metadata Management",
      "Scalable Infrastructure",
      "Clean API Design",
    ],
    challenges: `
        The main challenge was implementing reliable real-time video streaming. 
        We solved this by using Node Media Server with properly tuned chunk sizes and caching.
        
        Another challenge was ensuring proper synchronization between the API and RTMP servers. 
        We addressed this by implementing a robust event system for stream status updates.
      `,
    techStack: {
      backend: ["Node.js", "Express", "Node Media Server"],
      database: ["JSON Server"],
      deployment: ["Custom Server"],
    },
    screenshots: [],
    featured: false,
  },
  {
    title: "Task Manager API",
    description:
      "A robust RESTful API for managing tasks and user accounts, built with Node.js, Express, and MongoDB.",
    image: "/projects/tm.png",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Multer",
      "SendGrid",
      "Nodemon",
      "Heroku",
      "AWS",
      "DigitalOcean",
    ],
    github: "https://github.com/sgandhi15/task-manager-api",
    demo: "",
    slug: "task-manager-api",
    date: "June 2020",
    duration: "2 months",
    role: "Backend Developer",
    client: "Personal Project",
    detailedDescription: `
        A robust RESTful API for managing tasks and user accounts, built with Node.js, Express, and MongoDB. 
        The API provides comprehensive functionality for user management, task tracking, and file handling.
        
        The system implements secure authentication, file uploads, and email notifications, making it a 
        complete solution for task management applications.
      `,
    features: [
      "User Authentication with JWT",
      "Task Management System",
      "Profile Picture Upload",
      "Email Notifications",
      "Secure Password Handling",
      "File Upload Management",
      "Pagination and Sorting",
      "Comprehensive API Documentation",
    ],
    challenges: `
        The main challenge was implementing secure file uploads and storage. 
        We solved this by using Multer for file handling and implementing proper validation.
        
        Another challenge was ensuring reliable email notifications. We addressed this by 
        implementing a robust email service using SendGrid with proper error handling.
      `,
    techStack: {
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB", "Mongoose"],
      security: ["JWT", "Bcrypt"],
      tools: ["Multer", "SendGrid", "Nodemon"],
      deployment: ["Heroku", "AWS", "DigitalOcean"],
    },
    screenshots: [],
    featured: true,
  },
  {
    title: "Unsplash Pics Search",
    description:
      "A modern, responsive image search application built with React that allows users to search and browse high-quality images from Unsplash's extensive collection.",
    image: "/projects/pics-1.png",
    tags: [
      "React",
      "Unsplash",
      "API",
      "Semantic UI",
      "State Management",
      "Axios",
    ],
    github: "https://github.com/sgandhi15/unsplash-pics-search",
    demo: "#",
    slug: "unsplash-pics-search",
    date: "July 2020",
    duration: "1 week",
    role: "Frontend Developer",
    client: "Personal Project",
    detailedDescription: `
        A modern, responsive image search application built with React that allows users to search and browse 
        high-quality images from Unsplash's extensive collection. The application features a clean, intuitive 
        interface and real-time search functionality.
        
        The project demonstrates effective API integration, state management, and responsive design principles.
      `,
    features: [
      "Real-time Image Search",
      "Beautiful Image Grid Display",
      "Responsive User Interface",
      "Secure API Integration",
      "Mobile-friendly Design",
      "Image Preview",
      "Search History",
      "Loading States",
    ],
    challenges: `
        The main challenge was implementing efficient image loading and display. 
        We solved this by implementing lazy loading and proper image optimization.
        
        Another challenge was ensuring a smooth search experience. We addressed this by 
        implementing debounced search and proper error handling.
      `,
    techStack: {
      frontend: ["React", "Semantic UI"],
      tools: ["Axios"],
      apis: ["Unsplash API"],
    },
    screenshots: [
      { url: "/projects/pics-1.png", caption: "Search Interface" },
      { url: "/projects/pics-2.png", caption: "Image Grid" },
    ],
    featured: false,
  },
  {
    title: "Weather App",
    description:
      "A modern, real-time weather application that provides detailed weather information for any location worldwide.",
    image: "/projects/wa.png",
    tags: [
      "Node.js",
      "Express",
      "OpenWeatherMap API",
      "Handlebars",
      "Semantic UI",
      "Weather API",
    ],
    github: "https://github.com/sgandhi15/weather-app",
    demo: "#",
    slug: "weather-app",
    date: "May 2020",
    duration: "1 week",
    role: "Full Stack Developer",
    client: "Personal Project",
    detailedDescription: `
        A modern, real-time weather application that provides detailed weather information for any location worldwide. 
        Built with Node.js and Express, the application offers a clean and intuitive interface for users to check 
        current weather conditions.
        
        The app integrates with the OpenWeatherMap API to provide comprehensive weather data, including temperature, 
        conditions, wind information, and more.
      `,
    features: [
      "Real-time Weather Data",
      "Location-based Weather",
      "Comprehensive Weather Details",
      "Clean User Interface",
      "Responsive Design",
      "Error Handling",
      "Loading States",
      "Geographic Information",
    ],
    challenges: `
        The main challenge was handling API rate limits and errors. 
        We solved this by implementing proper error handling and request caching.
        
        Another challenge was creating a responsive and intuitive interface. We addressed this by 
        using Handlebars with Semantic UI for a clean, modern design.
      `,
    techStack: {
      frontend: ["Handlebars", "Semantic UI"],
      backend: ["Node.js", "Express"],
      apis: ["OpenWeatherMap API"],
      tools: ["Nodemon"],
    },
    screenshots: [{ url: "/projects/wa.png", caption: "Weather Display" }],
    featured: false,
  },
  {
    title: "YouTube Clone",
    description:
      "A YouTube clone application built with React, showcasing the implementation of a real-world video streaming platform using React.js and the YouTube Data API.",
    image: "/projects/yt-app.png",
    tags: [
      "React",
      "YouTube",
      "API",
      "Semantic UI",
      "State Management",
      "Axios",
      "React Router",
      "YouTube Data API",
    ],
    github: "https://github.com/sgandhi15/youtube-app",
    demo: "#",
    slug: "youtube-app",
    date: "July 2020",
    duration: "2 weeks",
    role: "Frontend Developer",
    client: "Personal Project",
    detailedDescription: `
        A modern React-based YouTube clone application that allows users to search and watch videos in a clean, 
        responsive interface. This project demonstrates the implementation of a real-world video streaming platform 
        using React.js and the YouTube Data API.
        
        The application features video search, playback, and related video suggestions, providing a comprehensive 
        video streaming experience.
      `,
    features: [
      "Video Search Functionality",
      "Video Playback",
      "Responsive Design",
      "Related Videos",
      "Real-time Updates",
      "Clean UI with Semantic UI",
      "Video Details Display",
      "Search History",
    ],
    challenges: `
        The main challenge was implementing efficient video search and loading. 
        We solved this by implementing proper API integration and caching strategies.
        
        Another challenge was creating a responsive video player. We addressed this by 
        implementing a flexible layout system with proper aspect ratio handling.
      `,
    techStack: {
      frontend: ["React", "Semantic UI", "React Router"],
      tools: ["Axios"],
      apis: ["YouTube Data API v3"],
    },
    screenshots: [{ url: "/projects/yt-app.png", caption: "Search Interface" }],
    featured: false,
  },
];

export const getProjectBySlug = async (slug: string) => {
  return projectsData.find((project) => project.slug === slug);
};

export const getProjects = (page: number = 1, limit: number = 9) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return projectsData.slice(start, end);
};

export const getTotalProjects = () => projectsData.length;

export const getFeaturedProjects = () =>
  projectsData.filter((project) => project.featured);
