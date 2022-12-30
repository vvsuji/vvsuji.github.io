import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import hangman from '../../assets/hangman.png';
import shills from '../../assets/shills.png';
import legendaryslayers from '../../assets/legendaryslayers.png';
// import Particle from '../Particle';


function Projects() {
	return (
		<Container fluid className='project-section'>
			{/* <Particle /> */}
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'grey' }}>Here are my recent projects.</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={hangman}
							isBlog={false}
							title='Hangman'
							description='Front-end game using Vanilla JavaScript, HTML, and CSS. Visually engaging game and fun to play'
							ghLink='https://github.com/vvsuji/hangman'
							demoLink='https://vvsuji.github.io/hangman/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={shills}
							isBlog={false}
							title='$hills: Brag about your financial losses - or wins'
							description="Full-CRUD Social Media clone inspired by Twitter with a fun 'financial' twist. Created with React.js and Tailwindcss on the front-end and a Python/Django Back-end."
							ghLink='https://github.com/SEI-Buffleheads/twitter-clone-frontend'
							demoLink='https://shill-social.netlify.app'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={legendaryslayers}
							isBlog={false}
							title='Legendary Slayers'
							description='Full CRUD reimagination of the League of Legends website. Users are able to save their favorite champions and items to their profile page.'
							ghLink='https://github.com/SEI-Buffleheads/twitter-clone-frontend'
							demoLink='https://legendsofleague.netlify.app/'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
