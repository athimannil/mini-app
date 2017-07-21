import '../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';

class App extends React.Component {
	render() {
		return(
			<div className="app-wrap">
				<Header/>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('myapp'));
