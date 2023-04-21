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
						<Col md={9} className='home-header'>
							<h1 md={3} className='heading-name'>
								Hi! I'm
								<strong className='main-name'> Suji Falcon </strong>
							</h1>
						</Col>
						<Col md={7} className='home-about-description'>
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
					</Row>
				</Container>
				<Col md={4} style={{ right: 30, top: 220 }}>
					<img
						src={pfp}
						alt='home pic'
						// className='img-fluid'
						id='home-img'
						// style={{ maxHeight: '450px', borderRadius: '99px' }}
					/>
				</Col>
			</Container>
			{/* <Container fluid className='home-about-section' id='about'>
				<Container>
					<Row>
						<Col md={12} className='home-about-social'>
							<h2>CONNECT WITH ME</h2>
							<br />
						</Col>
					</Row>
					<Contact />
				</Container>
			</Container> */}
		</section>
	);
}

export default Home;
