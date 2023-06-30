import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from './components/Nav/NavBar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import {
	HashRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './style.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [load, updateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			updateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<Preloader load={load} />
			<div className='App' id={load ? 'no-scroll' : 'scroll'}>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/project' element={<Projects />} />
					<Route path='/resume' element={<Resume />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
