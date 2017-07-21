import '../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';

class App extends React.Component {
	render() {
		return(
			<Header/>
		);
	}
}

render(<App/>, window.document.getElementById('myapp'));
