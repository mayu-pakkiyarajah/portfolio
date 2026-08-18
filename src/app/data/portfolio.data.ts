import {
  Education,
  Experience,
  Project,
  SkillGroup,
  SocialLink
} from '../models/portfolio.model';

export const portfolio = {
  name: 'Mayuravel Pakkiyarajah',
  shortName: 'MAYURAVEL',
  role: 'Full-Stack Developer',
  location: 'Sri Lanka',
  availability: 'Open to opportunities',
  email: 'mayuravelp@gmail.com',

    profileImage: 'assets/images/profile.jpeg',

  heroIntro:
    'I build clean, scalable web applications with Angular and Spring Boot, turning real-world problems into practical digital products.',

  about: [
    'I am a Full-Stack Developer and final-year Information Technology undergraduate at the University of Moratuwa, Sri Lanka.',
    'My expertise spans modern web development with Angular on the frontend and Spring Boot, ASP.NET Core on the backend, with a strong focus on microservices, REST APIs, databases, and clean architecture.',
    'I enjoy taking an idea from the first screen to a working product — designing the UI, building the backend, connecting the data, and getting the application ready to deploy.'
  ],

  socials: <SocialLink[]>[
    {
      label: 'GitHub',
      url: 'https://github.com/mayu-pakkiyarajah',
      icon: 'GH'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mayuravel-pakkiyarajah-79b81a266/',
      icon: 'IN'
    }
  ],

  projects: <Project[]>[
    {
      number: '01',
      title: 'Online Learning Platform',
      category: 'Full-Stack · Microservices',
      year: '2026',
      description:
        'Developing a full-stack online learning platform supporting course creation, enrollment, quizzes, progress tracking, certificates, reviews, notifications, and analytics. Designed microservices-based backend using Spring Boot, Spring Cloud, API Gateway, Eureka, and MySQL.',
      technologies: ['Angular', 'Spring Boot', 'Spring Cloud', 'MySQL', 'RabbitMQ', 'Docker', 'Microservices'],
      github: 'https://github.com/mayu-pakkiyarajah/elearning-platform',
      live: '',
      featured: true
    },
    {
      number: '02',
      title: 'Dashcam Road Safety Monitoring',
      category: 'Computer Vision · Machine Learning',
      year: '2026',
      description:
        'Developed lane-line detection and lane-departure warning module using YOLOv8s-seg to identify lane boundaries and road markings from dashcam footage. Achieved 90.8% precision, 91.4% recall, 92.9% mAP@0.5, and 76.4% mAP@0.5:0.95.',
      technologies: ['Python', 'PyTorch', 'YOLOv8-seg', 'OpenCV', 'NumPy', 'Kaggle', 'Docker'],
      github: 'https://github.com/Tensor-Minds/dashcam-safety-monitor',
      live: '',
      featured: true
    },
    {
      number: '03',
      title: 'Book Network',
      category: 'Full-Stack Application',
      year: '2025',
      description:
        'Book Network is a full-stack app for managing book collections and engaging with a community of book enthusiasts.',
      technologies: ['Spring Boot', 'MySQL', 'JWT', 'Spring Security'],
      github: 'https://github.com/mayu-pakkiyarajah/book-network',
      live: '',
      featured: true
    },
    {
      number: '04',
      title: 'Field Work Management System',
      category: 'Full-Stack Web Application',
      year: '2024',
      description:
        'A field-work management platform connecting field workers and consumers in restructuring sectors. Developed UI designs using Figma, built chat module using .NET SignalR, and developed web frontend pages.',
      technologies: ['Angular', 'ASP.NET Core', 'MSSQL', 'SignalR', 'Figma'],
      github: '',
      live: '',
      featured: true
    }
  ],

  // ===== EXPERIENCE SECTION - Only Professional Experience =====
  experience: <Experience[]>[
    {
      period: 'Mar 2025 — Sep 2025',
      role: 'Software Engineering Intern',
      organization: 'Navitsa Technologies (Pvt) Ltd',
      description: `During my internship, I contributed to multiple enterprise-level projects:`,
      technologies: ['ASP.NET Core', 'Angular', 'Spring Boot', 'MSSQL', 'MySQL', 'Microservices', 'REST APIs', 'MVC']
    }
  ],

  // ===== EDUCATION SECTION - Only Academic Education =====
  education: <Education[]>[
    {
      period: '2022 — 2026 (Expected)',
      qualification: 'BSc. (Hons.) in Information Technology',
      institution: 'University of Moratuwa - Faculty of Information Technology',
      description: 'Undergraduate studies covering software engineering, web development, databases, distributed systems, mobile development, networking, and intelligent systems.'
    },
    {
      period: '2018 — 2019',
      qualification: 'ICTT NVQ Level 4',
      institution: 'NAITA, Sri Lanka',
      description: 'Completed ICT Technician Vocational Training with comprehensive hands-on experience in information technology fundamentals.'
    }
  ],

  skillGroups: <SkillGroup[]>[
    {
      title: 'Languages',
      skills: ['Java', 'C#', 'TypeScript', 'JavaScript', 'Python', 'C', 'C++']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Spring Boot', 'Spring Cloud', 'Angular', 'ASP.NET Core', 'PyTorch', 'YOLOv8', 'OpenCV']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MSSQL', 'MongoDB']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Docker', 'Git', 'GitHub', 'RabbitMQ', 'Postman', 'Maven', 'Figma', 'Linux']
    }
  ]
};

// ===== ACHIEVEMENTS & REFERENCES =====
export const achievements = {
  leadership: [
    'President - Tamil Literary Association, University of Moratuwa (2025/2026)',
    'Batch Representative - Faculty of Information Technology (Batch 21)',
    'University Volleyball Team - Represented at SLUG 2023, Inter University Meet 2024, SLUG 2025'
  ],
  certifications: [
    'ICT NVQ Level 4 - NAITA (2018/19)'
  ]
};