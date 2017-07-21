import React from 'react';

export class Filter extends React.Component {
	render () {
		return (
			<nav className="filter">
				<div className="container">
					<form>
						<input
							type="search"
							className="filter-input"
							placeholder="Search offers..."
						/>
					</form>
				</div>
			</nav>
		);
	}
}
