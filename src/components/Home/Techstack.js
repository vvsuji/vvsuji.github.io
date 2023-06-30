import React from "react";
import { Col, Row } from 'react-bootstrap';
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiGit,
	DiDjango,
	DiPostgresql,
	DiMysql,
	DiJava,
	DiDocker,
	DiFirebase,
	DiAws,
	DiLinux,
	DiSass,
	DiSqllite,
	DiUbuntu,
} from 'react-icons/di';
import {
	SiCplusplus,
	SiCsharp,
	SiKotlin,
	SiGnubash,
	SiTailwindcss,
	SiVuedotjs,
	SiFigma,
	SiFlask,
	SiPostman,
	SiHeroku,
	SiVercel,
	SiSpring,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

function Techstack() {
	const techStackItems = [
		{ icon: DiReact, text: 'React' },
		{ icon: DiJavascript1, text: 'Javascript' },
		{ icon: TbBrandNextjs, text: 'Next.js' },
		{ icon: DiSass, text: 'Sass' },
		{ icon: SiTailwindcss, text: 'Tailwindcss' },
		{ icon: DiFirebase, text: 'Firebase' },
		{ icon: DiPython, text: 'Python' },
		{ icon: DiNodejs, text: 'Node.js' },
		{ icon: DiMongodb, text: 'MongoDB' },
		{ icon: DiPostgresql, text: 'PostgreSQL' },
		// { icon: SiHeroku, text: 'Heroku' },
		{ icon: SiVercel, text: 'Vercel' },
		{ icon: SiPostman, text: 'Postman' },
		{ icon: SiFigma, text: 'Figma' },
		{ icon: SiFlask, text: 'Flask' },
		{ icon: SiCsharp, text: 'C#' },
		{ icon: DiMysql, text: 'MySQL' },
		// { icon: DiGit, text: 'Git' },
		{ icon: DiDocker, text: 'Docker' },
		{ icon: DiLinux, text: 'Linux' },
		{ icon: DiUbuntu, text: 'Ubuntu' },
		{ icon: DiJava, text: 'Java' },
		{ icon: SiSpring, text: 'Spring' },
		{ icon: DiSqllite, text: 'SQLite' },
		// { icon: SiCplusplus, text: 'C++' },
		{ icon: DiAws, text: 'AWS' },
		{ icon: DiDjango, text: 'Django' },
		{ icon: SiGnubash, text: 'Bash' },
		// { icon: SiVuedotjs, text: 'Vue.js' },
		{ icon: SiKotlin, text: 'Kotlin' },
	];

	return (
		<Row style={{ justifyContent: 'center' }}>
			{techStackItems.map((item, index) => (
				<Col key={index} md={1} className='tech-icons'>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						{React.createElement(item.icon)}
						<p style={{ fontSize: '.18em', marginTop: '4px', marginBottom: 0 }}>
							{item.text}
						</p>
					</div>
				</Col>
			))}
		</Row>
	);
}

export default Techstack;
