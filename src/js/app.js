import '../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Filter } from './components/Filter';
import { Offers } from './components/Offers';
import { Footer } from './components/Footer';

import data from './data/Offers-list';

class App extends React.Component {
	render() {
		return(
			<div className="app-wrap">
				<Header/>
				<Filter/>
				<Offers
					data={data}
				/>
				<Footer/>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('myapp'));
