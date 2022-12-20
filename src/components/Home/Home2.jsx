import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
				<Row>
					<Col md={12} className='home-about-description'>
						<p className='home-about-body'>
							Software engineer with an extensive background in IT and game
							modding. I fell in love with programming at the age of 10 making
							websites for my friends. I found so much excitement with
							programming which only motivated me to work harder and make it
							into a career.
							<br />
							<br />I currently work with
							<i>
								<b className='gray'>
									{' '}
									Javascript, Python, React.js, HTML, CSS{' '}
								</b>
							</i>
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='home-about-social'>
						<h2>CONNECT WITH ME</h2>
						<br />
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/vvsuji'
									target='_blank'
									rel='noreferrer'
									className='icon-color  home-social-icons'>
									<AiFillGithub />
								</a>
							</li>

							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/vvsuji/'
									target='_blank'
									rel='noreferrer'
									className='icon-color  home-social-icons'>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
