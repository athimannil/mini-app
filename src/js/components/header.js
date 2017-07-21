import React from 'react';

export class Header extends React.Component {
	render(){
		return(
			<header>
				<div className="container header">
					<h1>Mini App</h1>
					<div>
						<span>Change theme </span>
						<input
							type="color"
						/>
					</div>
				</div>
			</header>
		);
	}
}
