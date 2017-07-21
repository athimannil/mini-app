import React from 'react';

export class Filter extends React.Component {

	searchUpdate(){
		const val = this.searchValue.value;
		this.props.searchUpdate(val);
	}

	render () {
		return (
			<nav className="filter">
				<div className="container">
					<form>
						<input
							type="search"
							className="filter-input"
							placeholder="Search offers..."
							ref={ (value) => this.searchValue = value}
							onChange={(e) => this.searchUpdate(e)}
						/>
					</form>
				</div>
			</nav>
		);
	}
}
