import {
    githubIcon, globeIcon, linkedinIcon, mailIcon,
    pdfIcon, phoneIcon, xIcon, closeIcon, myPic
} from '@/assets/index';

export const RESUME_DATA = {
    name: "Harshit Anant",
    initials: "HA",
    avatar: myPic,
    hireMe: true,
    location: "Dhanbad, Jharkhand",
    locationLink: "https://www.google.com/maps/place/Dhanbad",
    about:
        "Full Stack Developer focused on learning through experimentation and product development. I like to build webapps which makes life easier.",
    summary: "I'm just a guy on Earth. As a Full Stack Engineer, I specialize in taking products from concept to launch.I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.",
    // personalWebsiteUrl: "https://jarocki.me",
    contact: [
        {
            name: "Mail",
            url: "mailto:harshitanant29@gmail.com",
            icon: mailIcon,
        },
        {
            name: "Phone",
            url: "tel:+91 8252077674",
            icon: phoneIcon,
        },
        {
            name: "GitHub",
            url: "https://github.com/Badass-Nemesis",
            icon: githubIcon,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/harshit-anant-212393248/",
            icon: linkedinIcon,
        },
        // {
        //     name: "X",
        //     url: "https://x.com/BartoszJarocki",
        //     icon: xIcon,
        // },
        {
            name: "CV Document",
            url: "https://drive.google.com/file/d/1f_0ZayXhCRpiPkLd33hShE-m2aNdDnT9/view",
            icon: pdfIcon,
        },
    ],
    education: [
        {
            school: "Techno International Batanagar",
            degree: "Bachelor of Technology in Computer Science Engineering (8.91 CGPA)",
            start: "2020",
            end: "2024",
        },
    ],
    // work: [
    //     {
    //         company: "",
    //         link: "",
    //         badges: ["Remote"],
    //         title: "",
    //         logo: null,
    //         start: "",
    //         end: null,
    //         description:
    //             "",
    //     },
    // ],
    skills: [
        "JavaScript",
        "TypeScript",
        "ReactJS/Next.js",
        "Node.js/Express.js",
        "Tailwind CSS",
        "Java",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Competitive Programming",
    ],
    projects: [
        {
            title: "Personal Finance App",
            isLive: false,
            techStack: [
                "JavaScript",
                "Node.js/Express.js",
                "ReactJS",
                "Chart.js",
                "Google Apps Script",
                "MongoDB",
                "Railway",
                "Netlify/GHpages",
            ],
            description:
                "A webapp to manage finances, fetch Paytm Payments Bank's passbook details from your gmail, create category, use interactive graph and an OpenAI powered Chatbot to get recommendations.",
            liveLink: "#",
        },
        {
            title: "Logo Portal",
            isLive: false,
            techStack: [
                "Java/Servlet",
                "JSP",
                "JDBC",
                "Tomcat",
                "MySQL/Xampp",
            ],
            description:
                "A java servlet app which lets users search and download the logos/stickers uploaded by admins.",
            liveLink: "#",
        },
        {
            title: "Little Lemon",
            isLive: false,
            techStack: [
                "JavaScript",
                "React Native",
                "Expo",
                "SQLite",
                "Chart.js",
            ],
            description:
                "A react native expo snack of Little Lemon App, made as an assignment for Coursera Meta react native course. Users can order & book a reservation in the Little Lemon Restaurant",
            liveLink: "#",
        },
        {
            title: "CV",
            isLive: false,
            techStack: [
                "TypeScript",
                "ReactJS/Next.js",
                "Tailwind CSS",
            ],
            description:
                "A minimalist cv page deployed online. Inspired by the minimalist cv of BartoszJarocki/cv",
            liveLink: "#",
        },
        {
            title: "School Proximity API",
            isLive: true,
            techStack: [
                "TypeScript",
                "Node.js/Express.js",
                "MySQL",
                "Render",
            ],
            description:
                "A Backend project made for Educase backend internship assignment, where users can manage school data by adding new schools and retrieve a list of schools sorted by proximity to a user-specified location (used Haversine formula).",
            liveLink: "https://school-proximity-api.onrender.com/api/schools/listSchools?latitude=20&longitude=-10",
        },
        {
            title: "Blog App",
            isLive: false,
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "MySQL",
            ],
            description:
                "A full stack blog (& course sell) webapp made as an assignment for SciAstra internship. Admins can schedule blogs (future release) and create/update courses.",
            liveLink: "#",
        },
        {
            title: "Notes App",
            isLive: false,
            techStack: [
                "TypeScript",
                "Node.js/Express.js",
                "Firebase",
            ],
            description:
                "A Backend app made as an assignment for Intellectworks internship. It handles user authentication, profile management, and note storage with Firestore.",
            liveLink: "#",
        },
        {
            title: "School Management System API",
            isLive: false,
            techStack: [
                "TypeScript",
                "Node.js/Express.js",
                "MongoDB",
                "Cloudinary",
            ],
            description:
                "A Backend project made for Neina (Previously Nexorand) backend internship assignment. Features include user registration and authentication, class management, exam and result management, attendance tracking, and report generation",
            liveLink: "#",
        },
        {
            title: "Another Blog App",
            isLive: false,
            techStack: [
                "JavaScript",
                "Node.js/Express.js",
                "ReactJS",
                "Render",
            ],
            description:
                "A blog app made as a fullstack assignment for Hallienz internship. Users can perform CRUD operations on their blogs.",
            liveLink: "#",
        },
        {
            title: "Force Shorts Quality",
            isLive: false,
            techStack: [
                "JavaScript",
            ],
            description:
                "A basic tampermonkey/violentmonkey userscript that forces youtube shorts quality on browser to be 720p.",
            liveLink: "#",
        },
    ],
} as const;