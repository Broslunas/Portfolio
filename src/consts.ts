import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Broslunas",
  DESCRIPTION: "Bienvenidos al portfolio de Broslunas.",
  AUTHOR: "Broslunas",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos recientes en los que he participado.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscador",
  DESCRIPTION: "Buscar en el sitio web.",
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
  { 
    TEXT: "Uptime", 
    HREF: "https://uptime.broslunas.com", 
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

