import React from 'react';

import { HomeContext } from '../../context';

import Song from '../Song';

const renderSongs = context => {
	console.log(context);
	return context.songs.map(song => (
		<Song key={song.id} song={song}></Song>
	))
}

export default () => (
	<div>
		<HomeContext.Consumer>
			{context => (
				renderSongs(context)
			)}	
		</HomeContext.Consumer>
	</div>
)