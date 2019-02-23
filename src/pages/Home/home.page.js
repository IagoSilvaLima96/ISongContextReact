import React, { Component } from 'react';
import './home.css';
import { HomeContext } from '../../context';
import Songs from '../../components/Songs';

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			songs: [
				{ id: 1, value: 'Fear of the Dark' },
				{ id: 2, value: 'The Thooper' }
			]
		};
	}

	render() {
		return (
			<div className="app">
				<HomeContext.Provider value={{ songs: this.state.songs }}>
					<Songs></Songs>
				</HomeContext.Provider>
			</div>
		);
	}
}