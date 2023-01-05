import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
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
