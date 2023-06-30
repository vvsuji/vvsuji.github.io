import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsGithub} from "react-icons/bs";

function ProjectCards(props) {
  return (
		<Card className='project-card-view'>
			<Card.Img variant='top' src={props.imgPath} alt='card-img' />
			<Card.Body className='d-flex flex-column'>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text style={{ textAlign: 'justify' }}>
					{props.description}
				</Card.Text>

				<div className='mt-auto'>
					<div className='d-flex justify-content-between mx-2'>
						<Button
							role='button'
							className='btn btn-primary'
							href={props.ghLink}
							target='_blank'>
							<BsGithub /> &nbsp;
							{props.isBlog ? 'Blog' : 'GitHub'}
						</Button>

						{!props.isBlog && props.demoLink && (
							<Button
								role='button'
								className='btn btn-primary'
								href={props.demoLink}
								target='_blank'>
								<CgWebsite /> &nbsp;
								{'Demo'}
							</Button>
						)}
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
export default ProjectCards;
