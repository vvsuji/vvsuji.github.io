import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Techstack from './Techstack';
// import Github from '../About/Github.js';

import pfp from '../../assets/sfpfp.png';

function Home() {
	return (
		<section>
			<Container fluid className='home-about-section' id='home'>
				<Container className='home-content'>
					<Row>
						<Col className='home-header' sm={8} px={0}>
							<h1 md={3} className='heading-name'>
								Hi! I'm <strong className='purple'>Suji Falcon, </strong>a
								software engineer based in{' '}
								<strong className='purple'> NYC.</strong>
							</h1>
							<p className='home-about-body'>
								Seasoned programmer with a focus on game modding and AI
								implementation. Let's build something together!
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
						<Col className='pfp-col' px={0}>
							<img
								src={pfp}
								className='img-fluid rounded-circle float-right'
								alt='home pic'
								id='home-img'
							/>
						</Col>
					</Row>
					<h1 className='pro-skill'>
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
