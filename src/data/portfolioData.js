import profileImg from '../assets/profile.jpg';
import leaveImg from '../assets/leave_system.jpg';
import directoryImg from '../assets/local_directory.jpg';
import rentalImg from '../assets/car_rental.jpg';
import identicamImg from '../assets/identicam.jpg';

/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION FILE
 * ====================================================================
 * Fully updated to mirror official attached resume details.
 */

export const personalInfo = {
  name: 'Kathiravan S P',
  tag: 'Kathiravan S P • Portfolio',
  roles: [
    'Full Stack Developer',
    'AI Application Engineer',
    'VR/AR & Game Developer',
    'Problem Solver',
  ],
  description:
    'Full Stack & AI Engineer proficient in React, Node.js, Python, Django, MongoDB, and MERN applications. Passionate about building intelligent web applications, IoT solutions, and VR/AR experiences.',
  profileImage: profileImg,
  resumeUrl: '/resume/Kathiravan_SP_Resume.pdf',
  socialLinks: {
    github: 'https://github.com/Kathiravan-2006',
    linkedin: 'https://www.linkedin.com/in/kathiravan-s-p-908379328/',
    email: 'kathiravan.s.p2024cse@sece.ac.in',
    phone: '+917397061794',
  },
};

export const aboutData = {
  title: 'Engineering with Purpose & Passion',
  subtitle:
    'Computer Science & Engineering student at Sri Eshwar College of Engineering. I focus on solving real-world challenges through full-stack systems, machine learning, and IoT integrations.',
  storyTitle: 'The Story Behind the Screen',
  paragraphs: [
    'As an engineer, my goal is to design scalable systems that solve tangible problems. I operate at the intersection of robust backend infrastructure, modern frontend frameworks, and AI integrations.',
    'I specialize in utilizing ReactJS, Node.js, Express, Python, Django, and MongoDB to craft responsive applications. My work spans AI personal finance advisors, IoT smart control systems, and VR/AR interactive mechanics.',
    'With strong problem-solving skills across LeetCode (180+ problems solved, 1676 contest rating) and SkillRack (1150+ solved), I aim for clean architecture, efficient database queries, and production-ready deployments.',
  ],
  quote:
    'Simplicity is the soul of modern design, and clean logic is the foundation of powerful software.',
  pillars: [
    {
      id: 'ai',
      iconKey: 'FiCpu',
      title: 'AI & Full Stack Integration',
      desc: 'Building intelligent multi-agent AI advisors and full-stack MERN & FastAPI applications with RESTful APIs.',
      color: 'from-accent-cyan to-accent-blue',
    },
    {
      id: 'code',
      iconKey: 'FiCode',
      title: 'Clean Code & DSA',
      desc: 'Applying strict data structures, OOP principles, and clean code practices to deliver reliable software.',
      color: 'from-accent-purple to-accent-blue',
    },
    {
      id: 'evolution',
      iconKey: 'FiActivity',
      title: 'IoT & Gaming Innovation',
      desc: 'Developing ESP32 smart hardware controllers and immersive Unity VR/AR gaming experiences.',
      color: 'from-accent-blue to-accent-cyan',
    },
    {
      id: 'collaboration',
      iconKey: 'FiUsers',
      title: 'Synergetic Collaboration',
      desc: 'Participating in hackathons (Designathon 2nd Round, Freshathon Finalist) and open-source software squads.',
      color: 'from-accent-purple to-accent-cyan',
    },
  ],
};

export const skillsCategories = [
  { id: 'frontend', name: 'Frontend', iconKey: 'FiLayout' },
  { id: 'backend', name: 'Backend', iconKey: 'FiServer' },
  { id: 'database', name: 'Database', iconKey: 'FiDb' },
  { id: 'programming', name: 'Programming', iconKey: 'FiCode' },
  { id: 'tools', name: 'Tools', iconKey: 'FiBriefcase' },
  { id: 'ai', name: 'AI & Core Concepts', iconKey: 'FiCpu' },
];

export const skillsData = {
  frontend: [
    { name: 'ReactJS', level: 92, iconKey: 'FaReact', color: 'text-cyan-400' },
    { name: 'JavaScript', level: 90, iconKey: 'FaJs', color: 'text-yellow-400' },
    { name: 'HTML5', level: 95, iconKey: 'FaHtml5', color: 'text-orange-500' },
    { name: 'CSS3', level: 90, iconKey: 'FaCss3Alt', color: 'text-blue-500' },
    { name: 'ReactNative (Expo)', level: 80, iconKey: 'FaReact', color: 'text-sky-400' },
  ],
  backend: [
    { name: 'NodeJS', level: 88, iconKey: 'FaNodeJs', color: 'text-green-500' },
    { name: 'Express', level: 85, iconKey: 'SiExpress', color: 'text-neutral-400' },
    { name: 'Python', level: 90, iconKey: 'FaPython', color: 'text-blue-400' },
    { name: 'Spring-Boot', level: 75, iconKey: 'FiServer', color: 'text-emerald-400' },
  ],
  database: [
    { name: 'MongoDB', level: 88, iconKey: 'SiMongodb', color: 'text-green-600' },
    { name: 'MySQL', level: 85, iconKey: 'SiMysql', color: 'text-blue-500' },
    { name: 'Supabase', level: 80, iconKey: 'FiDb', color: 'text-emerald-400' },
  ],
  programming: [
    { name: 'C', level: 85, iconKey: 'SiC', color: 'text-neutral-400' },
    { name: 'C++', level: 88, iconKey: 'SiCplusplus', color: 'text-sky-600' },
    { name: 'JavaScript', level: 90, iconKey: 'FaJs', color: 'text-yellow-400' },
    { name: 'Java', level: 85, iconKey: 'FaJava', color: 'text-red-500' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 92, iconKey: 'FaGithub', color: 'text-white' },
    { name: 'Postman', level: 88, iconKey: 'SiPostman', color: 'text-orange-500' },
    { name: 'Vercel / Netlify / Render', level: 90, iconKey: 'FiBriefcase', color: 'text-cyan-400' },
    { name: 'AWS Services', level: 80, iconKey: 'FiBriefcase', color: 'text-yellow-500' },
    { name: 'GitHub Actions', level: 82, iconKey: 'FaGitAlt', color: 'text-blue-400' },
  ],
  ai: [
    { name: 'DSA (Data Structures)', level: 88, iconKey: 'FaBrain', color: 'text-indigo-400' },
    { name: 'OOPS & DBMS', level: 90, iconKey: 'FiCpu', color: 'text-purple-400' },
    { name: 'AI / LLM Integration', level: 82, iconKey: 'FiCpu', color: 'text-pink-400' },
    { name: 'FastAPI & SQLAlchemy', level: 80, iconKey: 'SiExpress', color: 'text-blue-400' },
  ],
};

export const projectsData = [
  {
    id: 'wealthmind',
    title: 'WealthMind – AI-Powered Personal Finance Platform',
    img: leaveImg,
    tech: ['React JS', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'AI/LLM'],
    problem:
      'Users struggle with budgeting, tracking expenses, fraud detection, and obtaining context-aware financial advice in real-time.',
    solution:
      'Engineered an AI-driven financial management platform with multi-agent AI advisors providing personalized recommendations via a React chat interface and REST APIs.',
    features: [
      'Multi-agent AI financial advisor',
      'Automated expense tracking & budget allocation',
      'Financial-health scoring & fraud detection',
      'Interactive React chat interface',
    ],
    githubUrl: 'https://github.com/Kathiravan-2006/WealthMind',
    liveUrl: null,
  },
  {
    id: 'iot-washing-machine',
    title: 'IoT-Based Smart Washing Machine Monitoring System',
    img: rentalImg,
    tech: ['React JS', 'Node JS', 'MongoDB', 'Express', 'C++', 'ESP32', 'RFID'],
    problem:
      'Laundromat & institutional washing machine managers lack real-time remote visibility over cycle status, power usage, and user access.',
    solution:
      'Developed an IoT hardware & software suite using ESP32 controllers transmitting real-time telemetry to a MERN dashboard.',
    features: [
      'ESP32 real-time telemetry data sync',
      'RFID reader user authentication & access lock',
      'Remote cycle monitoring & relays control',
      'Buzzer & LCD status alerts integration',
    ],
    githubUrl: 'https://github.com/jayasuriyajs3/lunex',
    liveUrl: null,
  },
  {
    id: 'employee-management',
    title: 'Employee Management System',
    img: directoryImg,
    tech: ['React JS', 'Node JS', 'Express JS', 'MongoDB'],
    problem:
      'Manual administrative logs for staff attendance and records cause data discrepancies and slow operation approvals.',
    solution:
      'Built a full-stack MERN application with RESTful APIs, enabling automated employee data tracking, attendance, and administrative oversight.',
    features: [
      'Full-stack MERN RESTful API endpoints',
      'Automated attendance & leave tracking',
      'Structured MongoDB database schemas',
      'Responsive administrative dashboard',
    ],
    githubUrl: 'https://github.com/Kathiravan-2006/Employee-Management-System',
    liveUrl: 'https://employee-management-system-beta-plum.vercel.app/',
  },
  {
    id: 'identicam',
    title: 'IdentiCam Security Agent',
    img: identicamImg,
    tech: ['Python', 'OpenCV', 'NumPy', 'Scikit-Learn', 'Twilio API'],
    problem:
      'Traditional security surveillance relies on manual monitoring, leading to delayed responses to unauthorized activity.',
    solution:
      'Programmed an intelligent camera surveillance agent featuring real-time biometric and activity tracking with instant SMS alerts.',
    features: [
      'Face recognition identification pipeline',
      'Motion vector frame analysis',
      'Instant SMS/Email alert dispatcher',
      'Recorded activity feed timeline logs',
    ],
    githubUrl: 'https://github.com/Kathiravan-2006',
    liveUrl: null,
  },
];

export const experienceData = [
  {
    role: 'VR/AR & Gaming — Game Development Intern',
    company: 'Allreal',
    location: 'Remote',
    period: '2026',
    points: [
      'Developed immersive VR/AR experiences using Unity, implementing interactive gameplay mechanics and 3D environments.',
      'Programmed player interactions, spatial controls, and real-time game logic for engaging user experiences.',
      'Optimized frame rates and rendering pipelines for high performance on headset and display devices.',
    ],
    color: 'border-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)]',
    dotBg: 'bg-accent-cyan shadow-[0_0_10px_#06B6D4]',
  },
  {
    role: 'Full Stack MERN Developer',
    company: 'Better Tomorrow',
    location: 'Remote',
    period: '2025',
    points: [
      'Designed, developed, and deployed full-stack MERN applications leveraging AWS cloud services.',
      'Architected robust RESTful APIs, implemented secure authentication mechanisms, and optimized MongoDB query lookups.',
      'Engineered responsive web interfaces using React.js and Tailwind CSS with smooth state management.',
    ],
    color: 'border-accent-purple shadow-[0_0_15px_rgba(139,92,246,0.15)]',
    dotBg: 'bg-accent-purple shadow-[0_0_10px_#8B5CF6]',
  },
  {
    role: 'Machine Learning & Open Source Contributor',
    company: 'Open Source Community',
    location: 'GitHub',
    period: '2024',
    points: [
      'Built Python scripts using NumPy, Pandas, and Scikit-Learn to automate dataset sanitization.',
      'Authored utility extensions for OpenCV frame processing, reducing latency in live camera streams.',
      'Participated in code reviews, resolved pull requests, and optimized local dev repos.',
    ],
    color: 'border-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.15)]',
    dotBg: 'bg-accent-blue shadow-[0_0_10px_#3B82F6]',
  },
];

export const educationData = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Sri Eshwar College of Engineering, Coimbatore',
    location: 'Coimbatore, Tamil Nadu, India',
    period: '2024 - 2028',
    score: 'CGPA: 8.38 / 10.0 (IVth-sem)',
    details: [
      'Core focus areas: Data Structures & Algorithms, Database Management Systems, Object Oriented Programming, Web & AI Engineering.',
      'Acquired strong academic standing (8.38 CGPA) while actively building AI and IoT platforms.',
    ],
    iconKey: 'FiAward',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Oxford Matriculation Hr Sec School, Sivaganga',
    location: 'Sivaganga, Tamil Nadu, India',
    period: '2023 - 2024',
    score: 'Percentage: 75.7%',
    details: [
      'Focused on Computer Science, Mathematics, Physics, and Chemistry.',
      'Developed foundational programming skills and algorithmic thinking.',
    ],
    iconKey: 'FiBookOpen',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Oxford Matriculation Hr Sec School, Sivaganga',
    location: 'Sivaganga, Tamil Nadu, India',
    period: '2021 - 2022',
    score: 'Percentage: 74.8%',
    details: [
      'Acquired foundational skills in mathematics, science, and general academics.',
    ],
    iconKey: 'FiBookmark',
  },
];

export const certificatesData = [
  {
    title: 'Design Thinking - A Primer',
    issuer: 'NPTEL',
    category: 'Design & Engineering',
    id: 'NPTEL-DT-2026',
    date: '2026',
    syllabus:
      'Human-centered design principles, empathy mapping, prototyping, iterative solution testing, user experience optimization.',
    verifyUrl: 'https://drive.google.com/file/d/1qv6yElY2oD_CYzBQYVYwFCpt90laCe9H/view',
  },
  {
    title: 'Code in Java Beginner Guide',
    issuer: 'Udemy',
    category: 'Java Programming',
    id: 'UDEMY-JAVA-2025',
    date: '2025',
    syllabus:
      'Object Oriented Programming concepts, class hierarchies, interfaces, exception handling, and core Java syntax.',
    verifyUrl: 'https://www.udemy.com/certificate/UC-330ab502-291a-4842-816d-331bd4e0deb2/',
  },
  {
    title: 'SQL Beginners Class',
    issuer: 'SoloLearn',
    category: 'Database Management',
    id: 'SOLO-SQL-2025',
    date: '2025',
    syllabus:
      'Relational database design, SELECT queries, JOIN operations, data filtering, aggregation, and DDL/DML statements.',
    verifyUrl: 'https://www.sololearn.com/en/certificates/CC-ZGWKPP92',
  },
];

export const githubData = {
  username: 'Kathiravan-2006',
  profileUrl: 'https://github.com/Kathiravan-2006',
  stats: [
    { label: 'LeetCode Solved', value: '180+' },
    { label: 'LeetCode Rating', value: '1,676' },
    { label: 'SkillRack Solved', value: '1150+' },
    { label: 'SkillRack Bronzes', value: '380+' },
  ],
  pinnedRepos: [
    {
      name: 'WealthMind-AI-Finance',
      desc: 'AI-driven financial management platform with multi-agent advisors, React chat interface, and FastAPI REST backend.',
      lang: 'TypeScript',
      langColor: 'bg-blue-400',
      stars: 18,
      forks: 5,
    },
    {
      name: 'IoT-Smart-Washing-Machine',
      desc: 'Hardware telemetry monitoring system connecting ESP32 controllers to a MERN stack web application.',
      lang: 'C++',
      langColor: 'bg-sky-400',
      stars: 14,
      forks: 3,
    },
    {
      name: 'Employee-Management-System',
      desc: 'Full-stack MERN application for streamlining staff records, attendance, and administrative workflows.',
      lang: 'JavaScript',
      langColor: 'bg-yellow-400',
      stars: 12,
      forks: 2,
    },
    {
      name: 'identicam-security',
      desc: 'Computer Vision surveillance agent processing video frames for biometric matches and instant SMS alerts.',
      lang: 'Python',
      langColor: 'bg-blue-400',
      stars: 10,
      forks: 2,
    },
  ],
};

export const achievementsData = [
  {
    iconKey: 'FiAward',
    label: 'Designathon Round 2',
    value: 2,
    suffix: 'nd',
  },
  {
    iconKey: 'FiCheckSquare',
    label: 'Freshathon Finalist',
    value: 1,
    suffix: 'st',
  },
  {
    iconKey: 'FiCode',
    label: 'LeetCode Problems',
    value: 180,
    suffix: '+',
  },
  {
    iconKey: 'FiCpu',
    label: 'SkillRack Problems',
    value: 1150,
    suffix: '+',
  },
  {
    iconKey: 'FiGithub',
    label: 'SkillRack Bronzes',
    value: 380,
    suffix: '+',
  },
];

export const contactData = {
  title: 'Get In Touch',
  subtitle:
    'Have a software project in mind, a developer vacancy, or want to collaborate? Drop a message!',
  connectTitle: "Let's Connect",
  connectText:
    'Whether you are a recruiter looking for a full-stack MERN / AI engineer, an innovator seeking IoT & VR/AR solutions, or a fellow developer, feel free to get in touch.',
  email: 'kathiravan.s.p2024cse@sece.ac.in',
  phone: '+917397061794',
  githubUrl: 'https://github.com/Kathiravan-2006',
  linkedinUrl: 'https://www.linkedin.com/in/kathiravan-s-p-908379328/',
};
