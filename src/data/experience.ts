export interface ExperienceRole {
  title: string;
  type: string;
  dates: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  dates: string;
  summary: string;
  roles: ExperienceRole[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Bank of America",
    location: "Charlotte, NC",
    dates: "2021 — Present",
    summary:
      "I joined Bank of America as a contract developer before moving into a full-time Software Engineer role and progressing to Software Engineer II. My work now spans frontend engineering, application ownership, and feature leadership.",
    roles: [
      {
        title: "Software Engineer II",
        type: "Full-time",
        dates: "Present",
        highlights: [
          "Build accessible, responsive interfaces across desktop, tablet, and mobile, with an emphasis on keyboard navigation, screen-reader support, focus management, and consistent interaction patterns.",
          "Serve as an application owner, supporting application health, governance, compliance, continuity planning, and other ongoing technical responsibilities.",
          "Collaborate with engineers, product partners, designers, and business stakeholders to turn complex requirements into maintainable frontend solutions.",
          "Step into feature-lead responsibilities when needed, facilitating stand-ups, coordinating delivery, and supporting the team during leadership coverage.",
        ],
      },
      {
        title: "Software Engineer",
        type: "Contract",
        dates: "2021 — 2022",
        highlights: [
          "Joined Bank of America as a contract developer and contributed to production applications while building experience in a large-scale enterprise engineering environment.",
        ],
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vue",
      "HTML",
      "SCSS",
      "Git",
    ],
  },
];
