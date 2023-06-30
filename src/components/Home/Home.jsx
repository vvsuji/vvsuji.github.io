import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Techstack from './Techstack';
// import Github from '../About/Github.js';

import pfp from '../../assets/sfpfp.png';

function Home() {
	return (
		<section>
			<Container fluid className='home-about-section' id='home'>
				<Container className='home-content' style={{}}>
					<Row>
						<Col className='home-header' sm={8}>
							<h1 md={3} className='heading-name'>
								Hi! I'm <strong className='purple'>Suji Falcon, </strong>a
								software engineer based in{' '}
								<strong className='purple'> NYC.</strong>
							</h1>
							<p className='home-about-body'>
								With over 10 years of programming experience from creating
								websites for friends at a young age to my current expertise in
								game modding, my love for programming has always been a driving
								force in my career. I bring a unique blend of software
								engineering skills and a strong background in hardware
								customization and system integration, allowing me to deliver
								tailor-made computing solutions that optimize performance and
								user experience. Let's build something together!
								<br />
								{/* <br />I currently work with
								<i>
									<b className='purple'>
										{' '}
										React, Next.js, Typescript, Tailwind, Bootstrap, Python,
										Flask, Firebase{' '}
									</b>
								</i> */}
							</p>
						</Col>
						{/* <Col sm={1}></Col> */}
						<Col sm={4}>
							<img
								src={pfp}
								className='img-fluid rounded-circle float-right'
								alt='home pic'
								id='home-img'
							/>
						</Col>
					</Row>
					<h1 className='project-heading'>
						Professional <strong className='purple'>Skillset </strong>
					</h1>
					<Techstack />
					{/* <Github /> */}
				</Container>
			</Container>
		</section>
	);
}

export default Home;
