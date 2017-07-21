import React from 'react';

export class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {color: '#3C454B'};
	}

	handleColor(event) {
		this.setState({color: event.target.value});
		document.documentElement.style.setProperty('--base',this.state.color);
	}

	render(){
		return(
			<header>
				<div className="container header">
					<h1>Mini App</h1>
					<div>
						<span>Change theme </span>
						<input
							type="color"
							defaultValue={this.state.color}
							onChange={(e) => this.handleColor(e)}
						/>
					</div>
				</div>
			</header>
		);
	}
}
