import {
    githubIcon, linkedinIcon, mailIcon, leetcodeIcon,
    pdfIcon, phoneIcon, myPic, codeforcesIcon, codechefIcon,
    // xIcon, closeIcon, globeIcon,
} from '@/assets/index';

export const RESUME_DATA = {
    name: "Harshit Anant",
    initials: "HA",
    avatar: myPic,
    hireMe: true,
    location: "Dhanbad, Jharkhand",
    locationLink: "https://www.google.com/maps/place/Dhanbad",
    about:
        "Full Stack Developer eager to build web apps that simplify life through innovation and experimentation.",
    summary:
        "I'm just a guy on Earth, a dedicated Full Stack Developer passionate about learning through hands-on projects. I mainly focus on backend development with Node.js/Express.js and have recently started exploring TypeScript. I've dabbled in Java, particularly with a servlet project and DSA. I also enjoy working with React and Next.js to expand my skills. Outside of coding, I relax by playing games.",
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
            name: "Codeforces",
            url: "https://codeforces.com/profile/Badass_Nemesis",
            icon: codeforcesIcon,
        },
        {
            name: "LeetCode",
            url: "https://leetcode.com/u/harshitanant29/",
            icon: leetcodeIcon,
        },
        {
            name: "CodeChef",
            url: "https://www.codechef.com/users/badassnemesis",
            icon: codechefIcon,
        },
        {
            name: "CV Document",
            url: "https://drive.google.com/file/d/1rv2hFOsl18F9KEKOCc7CncrYJ8QR2lNM/view",
            icon: pdfIcon,
        },
    ],
    education: [
        {
            school: "Techno International Batanagar",
            degree: "Bachelor of Technology in Computer Science Engineering",
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
            title: "YouTube Chatbot",
            isLive: false,
            techStack: [
                "TypeScript",
                "Node.js",
                "GoogleAPI",
                "Docker",
            ],
            description:
                "A Node.js bot that fetches and replies to YouTube live chat messages using YouTube API, OAuth2.0, and service accounts. Customize model behavior with Ollama and deploy using Docker for scalability.",
            liveLink: "#",
            repoLink: "https://github.com/Badass-Nemesis/little-lemon-react-native",
        },
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
            repoLink: "https://github.com/Badass-Nemesis/Personal-Finance-Backend",
        },
        {
            title: "CV",
            isLive: true,
            techStack: [
                "TypeScript",
                "ReactJS/Next.js",
                "Tailwind CSS",
                "Docker",
            ],
            description:
                "A minimalist & responsive cv page deployed online. Inspired by the minimalist cv of BartoszJarocki/cv",
            liveLink: "https://cv.harshitanant.dev/",
            repoLink: "https://github.com/Badass-Nemesis/my-cv",
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
            repoLink: "https://github.com/Badass-Nemesis/Logo-Portal",
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
            repoLink: "https://github.com/Badass-Nemesis/little-lemon-react-native",
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
            repoLink: "https://github.com/Badass-Nemesis/school-proximity-api",
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
                "A full stack blog (& course selling) webapp made as an assignment for SciAstra internship. Admins can schedule blogs (future release) and create/update courses.",
            liveLink: "#",
            repoLink: "https://github.com/Badass-Nemesis/blog-demo",
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
            repoLink: "https://github.com/Badass-Nemesis/firebase-demo",
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
            repoLink: "https://github.com/Badass-Nemesis/school-management-system",
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
            repoLink: "https://github.com/Badass-Nemesis/hallienz_frontend",
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
            repoLink: "https://github.com/Badass-Nemesis/force-shorts-quality",
        },
    ],
} as const;