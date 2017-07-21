import '../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Offers } from './components/Offers';
import { Footer } from './components/Footer';

class App extends React.Component {
	render() {
		return(
			<div className="app-wrap">
				<Header/>
				<Offers/>
				<Footer/>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('myapp'));
