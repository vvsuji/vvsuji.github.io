import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi! I'm <strong className='purple'>Suji Falcon, </strong>
						located in <strong className='purple'> NYC.</strong>
						<br />I am a software engineer with a strong background in IT and
						building custom PC's. I have been programming for over 10 years and
						finally took the plunge to pursue software engineering full-time.
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
