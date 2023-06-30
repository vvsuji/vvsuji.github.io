import React from "react";
import {Col, Row} from "react-bootstrap";
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
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col md={1} className='tech-icons '>
				<DiJavascript1 />
			</Col>
			<Col md={1} className='tech-icons '>
				<DiDjango />
			</Col>
			<Col md={1} className='tech-icons '>
				<DiNodejs />
			</Col>
			<Col md={1} className='tech-icons '>
				<DiReact />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiPython />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiMongodb />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiPostgresql />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiGit />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiCsharp />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiCplusplus />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiGnubash />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiJava />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiDocker />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiFirebase />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiAws />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiLinux />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiSass />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiSqllite />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiTailwindcss />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiVuedotjs />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<TbBrandNextjs />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiMysql />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiKotlin />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiFigma />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiFlask />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<DiUbuntu />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiPostman />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiHeroku />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
			<Col md={1} className='tech-icons '>
				<SiVercel />
				<p style={{ fontSize: '.18em' }}></p>
			</Col>
		</Row>
	);
}

export default Techstack;
