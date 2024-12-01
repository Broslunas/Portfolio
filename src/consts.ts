import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Broslunas",
  DESCRIPTION: "Bienvenidos al portfolio de Broslunas.",
  AUTHOR: "Broslunas",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Videos", 
    HREF: "https://videos.broslunas.com", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "pablo@broslunas.com",
    HREF: "mailto:pablo@broslunas.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "broslunas0",
    HREF: "https://github.com/broslunas0"
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Broslunas",
    HREF: "https://twitter.com/Broslunas",
  },
]

