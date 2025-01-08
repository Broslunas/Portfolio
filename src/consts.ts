import type { Site, Page, Links } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Broslunas",
  DESCRIPTION: "Bienvenidos a Broslunas Center. Un portfolio web para desarrolladores. Aquí podrás encontrar infinidad de proyectos y mucho mas para empezar con tu desarrollo web.",
  AUTHOR: "Broslunas",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos que he realizado y podrás encontrar junto al repositorio de Github y una Demo.",
}

// Contacto Page 
export const CONTACTO: Page = {
  TITLE: "Contacto",
  DESCRIPTION: "¿Quieres contactarme y no sabes cómo? Haz click aquí y rellena el siguiente formulario.",
}

// Newsletter Page 
export const NEWSLETTER: Page = {
  TITLE: "Newsletter",
  DESCRIPTION: "¿Quieres estar al tanto de todas las novedades del sitio web por correo electrónico? Suscríbete a nuestra Newsletter.",
}

// Contacto Page 
export const ENVIADO: Page = {
  TITLE: "Formulario Enviado",
  DESCRIPTION: "Muchas gracias por enviar el formulario.",
}

// Contacto Page 
export const MODPACK: Page = {
  TITLE: "Modpack",
  DESCRIPTION: "Modpack Oficial de Broslunas para la version 1.20.1.",
}

// Broslunas Page 
export const BROSLUNAS: Page = {
  TITLE: "Sobre Mi",
  DESCRIPTION: "Obtén un poco mas de información sobre Broslunas.",
}

// Juegos Page 
export const JUEGOS: Page = {
  TITLE: "Juegos",
  DESCRIPTION: "¿Estás buscando juegos clásicos o mas únicos? Estás en el lugar correcto.",
}

// InfoJuegos Page 
export const INFOJUEGOS: Page = {
  TITLE: "Info Juegos",
  DESCRIPTION: "¿Estás buscando información sobre juegos? Estás en el lugar correcto.",
}

// Wikis Page 
export const WIKIS: Page = {
  TITLE: "Wikis",
  DESCRIPTION: "¿Estás perdido y no sabes como usar los proyectos o los juegos? Es tan fácil como verlos en la wiki.",
}

// YT Page 
export const YOUTUBE: Page = {
  TITLE: "YouTube",
  DESCRIPTION: "Mira todos los videos recién subidos a mi canal de YouTube.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Buscar cualquier publicación o proyecto.",
}

// Error 404 Page
export const ERROR404: Page = {
  TITLE: "Error 404",
  DESCRIPTION: "La página que estas intentando buscar, no esta disponible en este momento.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Proyectos", 
    HREF: "/projects",
    SUBLINKS: [
      { TEXT: "End Xpansion", HREF: "/projects/minecraft/end-xpansion" },
    ]
  },
  { 
    TEXT: "Blog",
    HREF: "https://blog.broslunas.com",
  },
  { 
    TEXT: "Wikis",
    HREF: "/wikis",
  },
  { 
    TEXT: "Videos",
    HREF: "https://videos.broslunas.com",
  },
  { 
    TEXT: "AprendeJS",
    HREF: "https://aprendejs.broslunas.com",
  },
  { 
    TEXT: "Modpacks", 
    HREF: "/modpack", 
    SUBLINKS: [
      { TEXT: "Broslunas Modpack", HREF: "/modpack/broslunas-modpack" },
    ]
  },
  {
    TEXT: "Games",
    HREF: "https://games.broslunas.com/",
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
