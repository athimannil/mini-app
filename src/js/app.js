import '../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

class App extends React.Component {
	render() {
		return(
			<div className="app-wrap">
				<Header/>
				<main>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</main>
				<Footer/>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('myapp'));
