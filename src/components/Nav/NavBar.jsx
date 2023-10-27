import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/sflogo.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineLinkedin,
} from 'react-icons/ai';
import { CgGitFork, CgFileDocument } from 'react-icons/cg';
import {} from 'react-icons/cg';

function NavBar() {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);

	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}

	window.addEventListener('scroll', scrollHandler);

	return (
		<Navbar
			expanded={expand}
			fixed='top'
			expand='md'
			className={navColour ? 'sticky' : 'navbar'}>
			<Container className='nav-container'>
				<Navbar.Brand
					href='/'
					className='d-flex'
					style={{ paddingTop: '16px' }}>
					<img src={logo} className='img-fluid logo' alt='brand' />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => {
						updateExpanded(expand ? false : 'expanded');
					}}>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ms-auto' defaultActiveKey='#home'>
						<Nav.Item>
							<Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
								<AiOutlineHome style={{ marginBottom: '2px' }} /> Home
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/project'
								onClick={() => updateExpanded(false)}>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: '2px' }}
								/>{' '}
								Projects
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/resume'
								onClick={() => updateExpanded(false)}>
								<CgFileDocument style={{ marginBottom: '2px' }} /> Resume
							</Nav.Link>
						</Nav.Item>

						<Nav.Item className='social-btn'>
							<Button
								href='https://github.com/vvsuji'
								target='_blank'
								className='social-btn-inner'>
								<CgGitFork style={{ fontSize: '1.2em' }} />{' '}
							</Button>
							<Button
								href='https://www.linkedin.com/in/vvsuji'
								target='_blank'
								className='social-btn-inner'>
								<AiOutlineLinkedin style={{ fontSize: '1.2em' }} />{' '}
							</Button>
						</Nav.Item>
						<Nav.Item className='social-btn'></Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
