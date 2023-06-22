import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Contact from './Contact';
// import ThemeProvider from 'react-bootstrap';

import pfp from '../../assets/sfpfp.png';

function Home() {
	return (
		<section>
			<Container fluid className='home-about-section' id='home'>
				<Container className='home-content' style={{}}>
					<Row>
						<Col className='home-header'>
							<h1 md={3} className='heading-name'>
								Hi! I'm
								<strong className='main-name'> Suji Falcon </strong>
							</h1>
							<p className='home-about-body'>
								Software engineer with an extensive background in IT and game
								modding. I fell in love with programming at the age of 10 making
								websites for my friends. I found so much excitement with
								programming which only motivated me to work harder and make it
								into a career.
								<br />
								<br />I currently work with
								<i>
									<b className='purple'>
										{' '}
										React, Next.js, Typescript, Tailwind, Java{' '}
									</b>
								</i>
							</p>
						</Col>
						<Col>
							<img
								src={pfp}
								className='img-fluid rounded-circle'
								alt='home pic'
								id='home-img'
							/>
						</Col>
						{/* <Col className='home-about-description'>
							<Col style={{ right: 30, top: 220 }}></Col>
						</Col> */}
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Home;
