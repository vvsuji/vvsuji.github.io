import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am <span className='gray'>Suji Falcon </span>
						located in <span className='gray'> NYC.</span>
						<br />I am a software engineering boot camp grad with a strong
						background in IT and building custom PC's. I have been programming
						for over 10 years and finally took the plunge to pursue software
						engineering full-time.
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className='about-activity'>
							<ImPointRight /> Playing Piano
						</li>
						<li className='about-activity'>
							<ImPointRight /> Making custom keyboards
						</li>
						<li className='about-activity'>
							<ImPointRight /> Coaching E-sports teams
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
