import React from 'react';

export class Offers extends React.Component {
	render () {
		const {data} = this.props;
		const offersList = data
			.map(offerDetail => {
				return (
					<div className="offer" key={offerDetail.id}>
						<h2 className="offer-title">{offerDetail.title}</h2>
						<p className="offer-location"><i className="location-icon"></i> {offerDetail.city}</p>
					</div>
				);
			});
		return(
			<main>
				<div className="container">
					{offersList}
				</div>
			</main>
		);
	}
}
