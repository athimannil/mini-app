import '../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Filter } from './components/Filter';
import { Offers } from './components/Offers';
import { Footer } from './components/Footer';

import data from './data/Offers-list';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchText: 'berlin'
		};
	}

	searchUpdate(value){
		this.setState({
			searchText: value
		});
	}

	render() {
		return(
			<div className="app-wrap">
				<Header/>
				<Filter
					searchText={this.state.searchText}
					searchUpdate={(value) => this.searchUpdate(value)}
				/>
				<Offers
					data={data}
					searchText={this.state.searchText}
				/>
				<Footer/>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('myapp'));
