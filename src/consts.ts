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

// Modpacks Page 
export const MODPACK: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos recientes en los que he participado.",
}

// Contacto Page 
export const CONTACTO: Page = {
  TITLE: "Contacto",
  DESCRIPTION: "Contacta conmigo a través del siguiente formulario.",
}

// Newsletter Page 
export const NEWSLETTER: Page = {
  TITLE: "Newsletter",
  DESCRIPTION: "Únete a nuestra newsletter para estar al tanto de todas las novedades.",
}

// Newsletter Confirmada Page 
export const ENVIADO: Page = {
  TITLE: "Formulario Enviado",
  DESCRIPTION: "Gracias por rellenar el formulario.",
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
    TEXT: "Blog", 
    HREF: "https://blog.broslunas.com", 
  },
  { 
    TEXT: "Videos", 
    HREF: "https://videos.broslunas.com", 
  },
  { 
    TEXT: "Linktree", 
    HREF: "https://linktree.broslunas.com", 
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

