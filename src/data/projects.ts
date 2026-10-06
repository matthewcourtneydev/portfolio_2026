export interface Project {
  title: string;
  label?: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  desktopImage?: string;
  tabletImage?: string;
  mobileImage?: string;
}

export interface OtherProject {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const featuredProjects: Project[] = [
  {
    title: "Wedding Website",
    label: "Featured Project",
    description:
      "A full-stack wedding experience designed to bring guest information, RSVP management, travel details, and private planning tools into one responsive application.",
    technologies: ["React", "TypeScript", "Supabase", "SCSS"],
    liveUrl: "#",
    githubUrl: "#",
    desktopImage: "/projects/wedding/desktop.png",
    tabletImage: "/projects/wedding/tablet.png",
    mobileImage: "/projects/wedding/mobile.png",
  },
  {
    title: "Sun Sisters",
    label: "Featured Project",
    description:
      "A custom, responsive website for a mobile spray tanning business. Built with Vue and SCSS, the site combines a distinctive brand identity with reusable components, responsive layouts, client education, and a streamlined path to booking.",
    technologies: ["Vue", "Vite", "JavaScript", "SCSS", "Vercel"],
    liveUrl: "https://sunsistersspraytanning.com/",
    githubUrl: "https://github.com/matthewcourtneydev/sun_sisters",
    desktopImage: "/projects/sunsisters/desktop.png",
    tabletImage: "/projects/sunsisters/tablet.png",
    mobileImage: "/projects/sunsisters/mobile.png",
  },
  {
    title: "United Wrestling",
    label: "Featured Project",
    description:
      "A custom, responsive website for a wrestling training facility. Built with Next.js and TypeScript, the site features live Google Calendar integration, dynamic announcements, training and membership information, coach profiles, and streamlined access to registration.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Calendar",
      "Vercel",
    ],
    liveUrl: "https://unitedtrainingfacility.com/",
    githubUrl: "https://github.com/matthewcourtneydev/united-training-facility",
    desktopImage: "/projects/united/desktop.png",
    tabletImage: "/projects/united/tablet.png",
    mobileImage: "/projects/united/mobile.png",
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "Pokédex App",
    description:
      "An interactive Pokédex powered by PokéAPI, allowing users to browse and explore Pokémon data through a responsive interface.",
    technologies: ["React", "JavaScript", "PokéAPI", "REST API", "CSS"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Forest Hills Chiro",
    description:
      "A responsive website for a chiropractic practice designed to clearly present services, patient information, and practice details while providing a simple path to scheduling care.",
    technologies: ["React", "TypeScript", "SCSS", "Vite"],
    liveUrl: "",
    githubUrl: "",
  },
];
