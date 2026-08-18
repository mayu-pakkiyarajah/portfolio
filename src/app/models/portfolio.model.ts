export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Project {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  description: string;
  technologies: string[];
}

export interface Education {
  period: string;
  qualification: string;
  institution: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}
