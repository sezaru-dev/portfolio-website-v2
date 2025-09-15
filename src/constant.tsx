import { FaFacebookF, FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export const navLinks = [
  {
    title: 'Skills',
    id: 'nav_item',
    url: '#skills',
  },
  {
    title: 'Projects',
    id: 'nav_item',
    url: '#projects',
  },
	{
		title: 'About',
		id: 'nav_item',
		url: '#about',
	},
	{
		title: 'Contact',
		id: 'cta_contact',
		url: '#contact',
	},
];

export const heroSectionData = {
	heading: 'Transforming Ideas into Interactive Web Experiences',
	description:
		'Passionate about creating practical and engaging web experiences, I specialize in React and Next.js while exploring backend development to broaden my impact.',
};
export const ProjectSectionText = {
	heading: 'Projects',
	description:
		"Here are the projects that I've built.",
};
export const SkillsSectionText = {
	heading: 'Skills',
	description:
		"Technologies and tools that I use in building websites.",
};
export const AboutSectionText = {
	heading: 'About',
	description:
		"Driven by Passion.",
};
export const ContactSectionText = {
	heading: 'Connect',
  subheading: 'Get in touch',
	description: "I’m a Front-end Developer seeking opportunities to contribute to real-world projects and grow my skills. If you’re looking for someone passionate about crafting modern, responsive web applications, feel free to reach out — my inbox is always open.",
};

export const skills = [
	{
		name: 'HTML',
		logo: 'html5.svg',
    category: ['frontend']
	},
	{
		name: 'CSS',
		logo: 'css.svg',
    category: ['frontend']
	},
	{
		name: 'Javascript',
		logo: 'js.svg',
    category: ['frontend', 'backend']
	},
	{
		name: 'Tailwind',
		logo: 'tailwind.svg',
    category: ['frontend']
	},
	{
		name: 'React',
		logo: 'react.svg',
    category: ['frontend']
	},
	{
		name: 'Next',
		logo: 'nextjs.svg',
    category: ['frontend', 'backend']
	},
	{
		name: 'Node JS',
		logo: 'nodejs.svg',
    category: ['frontend', 'backend']
	},
	{
		name: 'Typescript',
		logo: 'typescript.svg',
    category: ['frontend', 'backend']
	},
	{
    name: 'Zustand',
		logo: 'zustand.webp',
    category: ['frontend']
	},
	{
		name: 'NextAuth',
		logo: 'nextauth.webp',
    category: ['backend']
	},
	{
		name: 'MongoDB',
		logo: 'mongodb.webp',
    category: ['backend']
	},
	{
    name: 'Tanstack Query',
		logo: 'react-query.svg',
    category: ['frontend']
	},
  {
    name: 'Framer Motion',
    logo: 'framermotion.webp',
    category: ['frontend']
  },
    {
    name: 'Git',
    logo: 'git.svg',
    category: ['tools']
  },
  {
		name: 'Github',
		logo: 'github.webp',
    category: ['tools']
	},
  {
		name: 'Postman',
		logo: 'postman.svg',
    category: ['tools']
	},
];

export const projects = [
	{
		title: 'Hyrivo',
		description:
			'Hyrivo is a personal job application tracker that helps you manage applications',
		techsUsed: ['React', 'Next', 'Tailwind', 'Shadcn-ui', 'Zustand'],
		image: 'projects/hyrivo.png',
		liveUrl: 'https://hyrivo.vercel.app/',
		githubUrl: 'https://github.com/sezaru-dev/hyrivo',
	},
	{
		title: 'Hyrivo',
		description:
			'Hyrivo is a personal job application tracker that helps you manage applications, take notes, and track progress to stay organized in your job hunt.',
		techsUsed: ['React', 'Next', 'Tailwind', 'Shadcn-ui', 'Zustand', 'Tanstack-query', 'MongoDB', 'NextAuth', 'Framer Motion'],
		image: 'projects/hyrivo.png',
		liveUrl: 'https://hyrivo.vercel.app/',
		githubUrl: 'https://github.com/sezaru-dev/hyrivo',
	},
	{
		title: 'JLPT Tango単語',
		description:
			'A simple website with Japanese Language Proficiency Test(JLPT) vocabularies from N5 level to N1 level.',
		techsUsed: ['React', 'Next', 'Tailwind', 'Shadcn-ui', 'Zustand', 'Tanstack-query', 'MongoDB', 'NextAuth', 'Framer Motion'],
		image: 'projects/hyrivo.png',
		liveUrl: 'https://hyrivo.vercel.app/',
		githubUrl: 'https://github.com/sezaru-dev/hyrivo',
	},
	{
		title: 'Todo App',
		description:
			'A Todo App with a dark/light mode theme switcher and local storage. A challenge from the Frontend Mentor website.',
		techsUsed: ['React', 'Next', 'Tailwind', 'Shadcn-ui', 'Zustand', 'Tanstack-query', 'MongoDB', 'NextAuth', 'Framer Motion'],
		image: 'projects/hyrivo.png',
		liveUrl: 'https://hyrivo.vercel.app/',
		githubUrl: 'https://github.com/sezaru-dev/hyrivo',
	},
];


export const emailLink =
  'cezarbaguhin20@gmail.com';

export const FooterMyName = "Cezarlito O. Baguhin"

export const Socials = [
	{
		name: 'facebook',
		logo: <FaFacebookF size={18} />,
		url: 'https://www.facebook.com/sezaru20',
	},
	{
		name: 'tiktok',
		logo: <FaTiktok size={18} />,
		url: 'https://www.tiktok.com/@sezarudev',
	},
	{
		name: 'linkedin',
		logo: <FaLinkedinIn size={18} />,
		url: 'https://www.linkedin.com/in/cezarlito-baguhin-184748175',
	},
	{
		name: 'github',
		logo: <FaGithub size={18} />,
		url: 'https://github.com/sezaru-dev',
	},
];