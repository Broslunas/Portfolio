import { getRepositoryDetails } from '../../utils';

export interface Project {
	name: string;
	demoLink: string;
	tags?: string[];
	description?: string;
	postLink?: string;
	demoLinkRel?: string;
	[key: string]: any;
}

export const projects: Project[] = [
	{
		...(await getRepositoryDetails('broslunas/spotify-stats')),
		name: 'Spotify Stats',
		description: 'Un sitio web para ver tus estadísticas de Spotify.',
		demoLink: 'https://stats.broslunas.com',
		postLink: '/spotify-stats',
		tags: ['Astro', 'Javascript']
	},
	{
		name: 'Videos',
		description: 'Sitio web para poder ver tus series y películas favoritas.',
		demoLink: 'https://videos.broslunas.com',
		postLink: '/videos',
		tags: ['Astro', 'Markdown']
	},
	{
		...(await getRepositoryDetails('broslunas/portfolio')),
		name: 'Portfolio',
		description: 'Mi portfolio personal, donde muestro mis proyectos y habilidades.',
		demoLink: 'https://broslunas.com',
		tags: ['Astro', 'Typescript']
	}
];
