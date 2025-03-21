import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { CgGitFork } from 'react-icons/cg';
import logo from '../../assets/sflogo.png';
import Button from 'react-bootstrap/Button';
import {
	AiFillStar,
	AiOutlineHome,
	AiTwotoneThunderbolt,
	AiOutlineUser,
} from 'react-icons/ai';
import './Nav.css';
import { CgFileDocument } from 'react-icons/cg';

function NavBar() {
	return (
		<div className='navbar'>
			<Link to='/'>
				<img
					src={logo}
					className='logo initials'
					alt='logo'
					width={'500px'}
					height={'500px'}
				/>
			</Link>

			<div className='links-container'>
				<Link to='/' className='link'>
					<AiOutlineHome style={{ marginBottom: '2px' }} />
					<p>Home</p>
				</Link>

				{/* <Link to='/projects' className='link'>
					<AiTwotoneThunderbolt style={{ marginBottom: '2px' }} />
					<p>Projects</p>
				</Link> */}

				<Link to='/resume' className='link'>
					<CgFileDocument style={{ marginBottom: '2px' }} />
					<p>Resume</p>
				</Link>

				<Nav.Link
					href='https://github.com/vvsuji'
					target='_blank'
					rel='noreferrer'
					className='git-btn'>
					<Button className='git-btn-inner'>
						<AiFillStar style={{ marginTop: '3px' }} />
						<CgGitFork style={{ marginTop: '3px' }} />
					</Button>
				</Nav.Link>
			</div>
		</div>
	);
}

export default NavBar;
