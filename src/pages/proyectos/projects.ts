import { getRepositoryDetails } from '../../utils';

export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	[key: string]: any;
	cover: string;
}

export const projects: Project[] = [
	{
		...(await getRepositoryDetails('broslunas/spotify-stats')),
		name: 'Spotify Stats',
		description: 'Un sitio web para visualizar estadísticas personalizadas de Spotify, como tus canciones y artistas más escuchados.',
		demoLink: 'https://stats.broslunas.com',
		postLink: '/spotify-stats',
		tags: ['Astro', 'Javascript'],
		cover: 'https://cdn.broslunas.com/projects/spotify-stats.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/games')),
		name: 'Games',
		description: 'Una colección de juegos interactivos desarrollados para la web.',
		demoLink: 'https://games.broslunas.com',
		postLink: '/games',
		tags: ['Astro', 'Javascript', 'HTML', 'CSS'],
		cover: 'https://cdn.broslunas.com/projects/games.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/clock')),
		name: 'Clock',
		description: 'Aplicación web para crear temporizadores y cronómetros personalizados.',
		demoLink: 'https://clock.broslunas.com',
		postLink: '/clock',
		tags: ['HTML', 'CSS', 'Javascript'],
		cover: 'https://cdn.broslunas.com/projects/clock.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/Calculator')),
		name: 'Calculadora',
		description: 'Calculadora web sencilla para realizar operaciones matemáticas básicas.',
		demoLink: 'https://calc.broslunas.com',
		postLink: '/calc',
		tags: ['HTML', 'CSS', 'Javascript'],
		cover: 'https://cdn.broslunas.com/projects/calc.webp'
	},
	{
		name: 'Videos',
		description: 'Plataforma web para disfrutar de tus series y películas favoritas en un solo lugar.',
		demoLink: 'https://videos.broslunas.com',
		postLink: '/videos',
		tags: ['Astro', 'Markdown', 'Typescript'],
		cover: 'https://cdn.broslunas.com/projects/brl-videos.webp'
	},
	{
		...(await getRepositoryDetails('broslunas/portfolio')),
		name: 'Portfolio',
		description: 'Mi portfolio personal donde presento mis proyectos, habilidades y experiencia profesional.',
		demoLink: 'https://broslunas.com',
		tags: ['Astro', 'Typescript'],
		cover: 'https://cdn.broslunas.com/projects/portfolio.webp'
	}
];
